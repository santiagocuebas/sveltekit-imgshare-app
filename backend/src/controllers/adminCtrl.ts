import fs from 'fs-extra';
import { UserRole } from '../enums.js';
import { Direction, ILink } from '../global.js';
import { deleteUserComments, deleteUserImages } from '../libs/delete-user.js';

export const postDescription: Direction = async (req, res) => {
	const { description } = req.body;

	// Edit or delete user description
	if (typeof description === 'string' && description.length < 4200) {
		req.foreignUser.description = description;
		await req.foreignUser.save();
	}

	return res.json({ change: true });
};

export const postRole: Direction = async (req, res) => {
	const { role } = req.body;
	const roles: string[] = Object.values(UserRole);

	// Update user role
	if (
		roles.includes(role) &&
		role !== UserRole.SUPER &&
		(
			req.user.role === UserRole.SUPER ||
			(req.user.role === UserRole.ADMIN && role !== UserRole.ADMIN)
		)
	) {
		req.foreignUser.role = role;
		await req.foreignUser.save();
	}

	return res.json({ change: true });
};

export const deleteLink: Direction = async (req, res) => {
	const user = req.foreignUser;

	// Delete user link
	let parseLinks = JSON.parse(user.links);
	parseLinks = parseLinks.filter((link: ILink) => link.title !== req.body.link);
	user.links = JSON.stringify(parseLinks);

	await user.save();

	return res.json({ change: true });
};

export const deleteUser: Direction = async (req, res) => {
	const user = req.foreignUser;

	// Delete avatar
	if (user.avatar !== 'default.png') {
		await fs.unlink(`uploads/avatars/${user.avatar}`);
	}

	// Delete all images and comments of user and filters all their ratings
	deleteUserImages(user.username);
	deleteUserComments(user.username);

	// Delete user
	await user.remove();

	return res.json({ change: true });
};
