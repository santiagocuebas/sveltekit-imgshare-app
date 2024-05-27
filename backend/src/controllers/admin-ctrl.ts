import type { Direction } from '../types/global.js';
import { FindOperator, Like } from 'typeorm';
import { SelectOption } from '../dictonary.js';
import {
	deleteFile,
	deleteUserComments,
	deleteUserImages,
	updateUser,
} from '../libs/index.js';
import { User } from '../models/index.js';
import { Folder, UserRole } from '../types/enums.js';

export const getUsers: Direction = async (req, res) => {
	const findRole = new FindOperator<UserRole>('not', UserRole.SUPER);
	const username = req.query.username?.length
		? Like(`%${req.query.username}%`)
		: undefined;

	// Find all users
	const users = await User
		.find({
			select: SelectOption.Users,
			where: { role: findRole, username },
			order: { createdAt: 'DESC' },
		})
		.catch(() => []);

	return res.json({ users });
};

export const postDescription: Direction = async (req, res) => {
	// Edit or delete user description
	const [success] = await updateUser(req.foreignUser.username,
		{ description: req.body.description });

	return res.status(success ? 200 : 401).json({ change: success });
};

export const postRole: Direction = async (req, res) => {
	// Update user role
	const [success] = await updateUser(req.foreignUser.username,
		{ role: req.body.role });

	return res.status(success ? 200 : 401).json({ change: success });
};

export const deleteLink: Direction = async (req, res) => {
	const linkIndex = req.foreignUser.links.findIndex(link => link.title === req.body.title);

	// Delete user link
	const [success] = await updateUser(req.foreignUser.username,
		{ links: () => `links - ${linkIndex}` });

	return res.status(success ? 200 : 401).json({ change: success });
};

export const deleteUser: Direction = async (req, res) => {
	try {
		const user = req.foreignUser;

		// Delete avatar
		if (!user.avatar.includes('default')) await deleteFile(user.avatar, Folder.USER);

		// Delete all images and comments of user and filters all their ratings
		await deleteUserImages(user.username);
		await deleteUserComments(user.username);

		// Delete user
		await User.delete({ username: user.username });

		return res.json({ change: true });
	}
	catch {
		return res.status(401).json({ change: false });
	}
};
