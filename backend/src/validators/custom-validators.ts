import type { CustomValidator } from 'express-validator';
import { AvailableExts } from '../dictonary.js';
import { matchPassword } from '../libs/index.js';
import { User } from '../models/index.js';
import { Score, UserRole } from '../types/enums.js';

const mimetypes: string[] = Object.keys(AvailableExts);
const roles: string[] = Object.values(UserRole);

export const isValidUsername: CustomValidator = async (username) => {
	const user: User | null = await User.findOneBy({ username });

	if (user !== null) throw new Error('Username already in use');

	return true;
};

export const isValidEmail: CustomValidator = async (email) => {
	const user: User | null = await User.findOneBy({ email });

	if (user !== null) throw new Error('E-mail already in use');

	return true;
};

export const confirmPassword: CustomValidator = (value, { req }) => {
	if (value !== req.body.password) throw new Error('Password not match');

	return true;
};

export const isRegisterUser: CustomValidator = async (value) => {
	const user: User | null = await User.findOne({
		where: [
			{ username: value },
			{ email: value }
		]
	});

	if (!user) throw new Error('The user no exists');

	return true;
};

export const isCorrectPassword: CustomValidator = async (value, { req }) => {
	const user: User | null = await User.findOne({
		where: [
			{ username: req.body.username ?? '' },
			{ email: req.body.username ?? '' }
		]
	});

	if (user) {
		const match = await matchPassword(value, user.password);

		if (match) return true;
	}

	throw new Error('Incorrect password');
};

export const isValidScore: CustomValidator = async (value) => {
	return value === Score.LIKE || value === Score.DISLIKE;
};

export const isCorrectCurrentPassword: CustomValidator = async (value, { req }) => {
	const match: boolean = await matchPassword(value, req.user.password);

	if (!match) throw new Error('Incorrect password');

	return true;
};

export const isValidTitle: CustomValidator = async (value, { req }) => {
	for (const link of req.user.links) {
		if (link.title === value) throw new Error('This title already exists');
	}

	return true;
};

export const isValidURL: CustomValidator = async (value, { req }) => {
	for (const link of req.user.links) {
		if (link.url === value) throw new Error('This URL already exists');
	}

	return true;
};

export const limitLinks: CustomValidator = async (_value, { req }) => {
	if (req.user.links.length >= 12) {
		throw new Error('Max number of links reached');
	}

	return true;
};

export const existsLink: CustomValidator = async (value, { req }) => {
	for (const link of req.user.links) {
		if (link.title === value) return true;
	}

	return false;
};

export const existsForeignLink: CustomValidator = async (value, { req }) => {
	for (const link of req.foreignUser.links) {
		if (link.title === value) return true;
	}

	return false;
};

export const existsRole: CustomValidator = (value) => {
	return roles.includes(value) && value !== UserRole.SUPER;
};

export const validPermissions: CustomValidator = (value, { req }) => {
	return req.user.role === UserRole.SUPER ||
	(req.user.role === UserRole.ADMIN && value !== UserRole.ADMIN);
};

export const isUndefinedImage: CustomValidator = (_value, { req }) => {
	return req.file !== undefined;
};

export const isValidExtension: CustomValidator = (_value, { req }) => {
	return mimetypes.includes(req.file.mimetype);
};

export const isValidImageSize: CustomValidator = (_value, { req }) => {
	return req.file.size < 2e7;
};

export const isValidAvatarSize: CustomValidator = (_value, { req }) => {
	return req.file.size < 1e6;
};
