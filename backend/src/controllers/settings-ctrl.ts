import type { Direction, ILink } from '../global.js';
import { v2 as cloudinary } from 'cloudinary';
import {
	encryptPassword,
	deleteUserComments,
	deleteUserImages,
	dataUri,
	getId
} from '../libs/index.js';
import { Image, Comment } from '../models/index.js';

export const postAvatar: Direction = async (req, res) => {
	const { username, avatar } = req.user;
	const file = dataUri(req);

	if (file) {
		// Set avatar location
		const data = await cloudinary.uploader
			.upload(file, { public_id: await getId(), folder: 'imgshare/avatar/' })
			.catch(() => {
				console.error('An error occurred while trying to uploaded the image');
				return null;
			});

		if (data) {
			// Unlink old avatar
			if (!avatar.includes('default')) {
				const avatarFullFilename = avatar.split('/').reverse();
				const avatarFilename = avatarFullFilename[0].split('.');
				
				await cloudinary.uploader
					.destroy('imgshare/avatar/' + avatarFilename[0])
					.catch(() => {
						console.error('An error occurred while trying to delete the image');
					});
			}

			// Update databases with the new avatar
			Image.update({ author: username }, { avatar: data.secure_url });
			Comment.update({ author: username }, { avatar: data.secure_url });

			req.user.avatar = data.secure_url;
			await req.user.save();

			return res.json({
				filename: data.secure_url,
				message: 'Your avatar has been successfully updated'
			});
		}
	}

	return res.json({
		message: { errors: 'An error occurred while trying to change the avatar' }
	});
};

export const postDescription: Direction = async (req, res) => {
	// Update description
	if (req.body.description?.length < 8000) {
		req.user.description = req.body.description;
		await req.user.save();
		
		return res.json({
			message: 'Your description has been successfully updated'
		});
	}

	return res.json({
		message: { description: 'Have exceeded the character limit' }
	});
};

export const postPassword: Direction = async (req, res) => {
	// Update password
	req.user.password = await encryptPassword(req.body.password);
	await req.user.save();
	
	return res.json({ message: 'Your password has been successfully updated' });
};

export const postLinks: Direction = async (req, res) => {
	const links: ILink[] = JSON.parse(req.user.links);
	links.push({ title: req.body.title, url: req.body.url });

	// Update links
	req.user.links = JSON.stringify(links);
	await req.user.save();
	
	return res.json({ message: 'Your link has been successfully updated' });
};

export const deleteLinks: Direction = async (req, res) => {
	const links: ILink[] = JSON.parse(req.user.links);

	// Update links
	const newLinks = links.filter(link => link.title !== req.body.title);

	req.user.links = JSON.stringify(newLinks);
	await req.user.save();
	
	return res.json({
		change: true,
		message: 'Your link has been successfully deleted'
	});
};

export const deleteUser: Direction = async (req, res) => {
	const { username, avatar } = req.user;

	// Delete avatar
	if (!avatar.includes('default')) {
		const avatarFullFilename = avatar.split('/').reverse();
		const avatarFilename = avatarFullFilename[0].split('.');

		await cloudinary.uploader
			.destroy('imgshare/avatar/' + avatarFilename[0])
			.catch(() => {
				console.error('An error occurred while trying to delete the image');
			});
	}

	// Delete all images and comments of user and filters all their ratings
	deleteUserImages(username);
	deleteUserComments(username);

	// Delete user
	await req.user.remove();

	return res.json({});
};
