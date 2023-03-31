import fs from 'fs-extra';
import { extname, resolve } from 'path';
import { Direction, ILink } from '../global.js';
import { encryptPassword } from '../libs/bcrypt.js';
import { deleteUserComments, deleteUserImages } from '../libs/delete-user.js';
import { getId } from '../libs/random-id.js';
import { getSerializedCookie } from '../libs/serialized-cookie.js';
import { Image, Comment } from '../models/index.js';

export const postAvatar: Direction = async (req, res) => {
	if (req.file) {
		const { username, avatar } = req.user;
		const tempPath = req.file.path;
		const ext = extname(req.file.originalname).toLowerCase();
		const avatarURL = await getId() + ext;
		const oldPath = resolve(`uploads/avatars/${avatar}`);
		const targetPath = resolve(`uploads/avatars/${avatarURL}`);

		// Unlink old avatar
		if (avatar !== 'default.png') await fs.unlink(oldPath);

		// Set avatar location
		await fs.rename(tempPath, targetPath);

		// Update databases with the new avatar
		await Image.update({ author: username }, { avatar: avatarURL });

		await Comment.update({ author: username }, { avatar: avatarURL });

		req.user.avatar = avatarURL;
		await req.user.save();

		// Update cookie with the new avatar
		const token = getSerializedCookie(req.user);
	
		res.set('Set-Cookie', token);

		return res.json({
			class: 'success-settings',
			filename: avatarURL,
			message: 'Your avatar has been successfully updated'
		});
	}

	return res.json({});
};

export const postDescription: Direction = async (req, res) => {
	// Update description
	if (req.body.description?.length < 8000) {
		req.user.description = req.body.description;
		await req.user.save();
		
		return res.json({
			class: 'success-settings',
			message: 'Your description has been successfully updated'
		});
	}

	return res.json({
		class: 'error-settings',
		message: {
			description: 'Have exceeded the character limit'
		}
	});
};

export const postPassword: Direction = async (req, res) => {
	// Update password
	req.user.password = await encryptPassword(req.body.password);
	await req.user.save();
	
	return res.json({
		class: 'success-settings',
		message: 'Your password has been successfully updated'
	});
};

export const postLinks: Direction = async (req, res) => {
	const links: ILink[] = JSON.parse(req.user.links);
	links.push({ title: req.body.title, url: req.body.url });

	// Update links
	req.user.links = JSON.stringify(links);
	await req.user.save();
	
	return res.json({
		class: 'success-settings',
		message: 'Your link has been successfully updated'
	});
};

export const deleteLinks: Direction = async (req, res) => {
	const links: ILink[] = JSON.parse(req.user.links);
	const newLinks: ILink[] = [];

	// Update links
	for (const link of links) {
		if (link.title !== req.body.title) newLinks.push(link);
	}

	req.user.links = JSON.stringify(newLinks);
	await req.user.save();
	
	return res.json({
		class: 'success-settings',
		message: 'Your link has been successfully updated'
	});
};

export const deleteUser: Direction = async (req, res) => {
	const { username, avatar } = req.user;

	// Delete avatar
	if (avatar !== 'default.png') {
		await fs.unlink(`uploads/avatars/${avatar}`);
	}

	// Delete all images and comments of user and filters all their ratings
	deleteUserImages(username);
	deleteUserComments(username);

	// Delete user
	await req.user.remove();

	// Delete cookie
	res.clearCookie('authenticate');

	return res.json({ url: '/' });
};
