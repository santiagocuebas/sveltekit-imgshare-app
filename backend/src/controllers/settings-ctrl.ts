import type { Direction } from '../types/global.js';
import {
	encryptPassword,
	deleteUserComments,
	deleteUserImages,
	deleteFile,
	uploadFile,
	updateUser,
} from '../libs/index.js';
import { Image, Comment, User } from '../models/index.js';
import { Folder } from '../types/enums.js';

export const postAvatar: Direction = async (req, res) => {
	try {
		const { username, avatar } = req.user;

		const file = await uploadFile(req.file, Folder.USER, avatar);

		if (file === null) throw new Error();

		// Update databases with the new avatar
		await Image.update({ author: username }, { avatar: file.secure_url });
		await Comment.update({ author: username }, { avatar: file.secure_url });
		await User.update({ username }, { avatar: file.secure_url });

		return res.json({
			success: true,
			filename: file.secure_url,
			message: 'Your avatar has been successfully updated',
		});
	}
	catch {
		return res.status(401).json({
			success: false,
			message: 'An error occurred while trying to change the avatar',
		});
	}
};

export const postDescription: Direction = async (req, res) => {
	// Update description
	const [success, message] = await updateUser(req.user.username,
		{ description: req.body.description });

	return res.status(success ? 200 : 401).json({ success, message });
};

export const postPassword: Direction = async (req, res) => {
	// Update password
	const [success, message] = await updateUser(req.user.username,
		{ password: await encryptPassword(req.body.password) });

	return res.status(success ? 200 : 401).json({ success, message });
};

export const postLinks: Direction = async (req, res) => {
	const link = `{ "title": "${req.body.title}", "url": "${req.body.url}" }`;

	// Update links
	const [success, message] = await updateUser(req.user.username,
		{ links: () => `links || '${link}'::jsonb` });

	return res.status(success ? 200 : 401).json({ success, message });
};

export const deleteLinks: Direction = async (req, res) => {
	// Update links
	const linkIndex = req.user.links.findIndex(link => link.title === req.body.title);

	const [success, message] = await updateUser(req.user.username,
		{ links: () => `links - ${linkIndex}` });

	return res.status(success ? 200 : 401).json({ success, message });
};

export const deleteUser: Direction = async (req, res) => {
	try {
		const { username, avatar } = req.user;

		// Delete avatar
		if (!avatar.includes('default')) await deleteFile(avatar, Folder.USER);

		// Delete user and all theirs images and comments and filters all their ratings
		await deleteUserImages(username);
		await deleteUserComments(username);
		await User.delete({ username });

		return res.json({ success: true });
	}
	catch {
		return res.status(401).json({
			success: false,
			message: 'An error occurred while trying to delete your user account',
		});
	}
};
