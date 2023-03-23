import { CustomValidator } from 'express-validator';
import { extname } from 'path';
import { ILink } from '../global.js';
import { Ext } from '../enums.js';
import { User } from '../models/index.js';
import { matchPassword } from '../libs/bcrypt.js';

export const isValidUsername: CustomValidator = async (username: string): Promise<boolean> => {
	const user: User | null = await User.findOneBy({ username });

	if (user !== null) throw new Error('Username already in use');

	return true;
};

export const isValidEmail: CustomValidator = async (email: string): Promise<boolean> => {
	const user: User | null = await User.findOneBy({ email });

	if (user !== null) throw new Error('E-mail already in use');

	return true;
};

export const confirmPassword: CustomValidator = (
	value: string,
	{ req: { body } }
): boolean => {
	if (value !== body.password) throw new Error('Password not match');

	return true;
};

export const isRegisterUser: CustomValidator = async (value: string): Promise<boolean> => {
	const user: User | null = await User.findOne({
		where: [
			{ username: value },
			{ email: value }
		]
	});

	if (!user) throw new Error('The user no exists');

	return true;
};

export const isCorrectPassword: CustomValidator = async (
	value: string,
	{ req: { body } }
): Promise<boolean> => {
	if (body.username) {
		const user: User | null = await User.findOne({
			where: [
				{ username: body.username },
				{ email: body.username }
			]
		});
	
		if (user) {
			const match = await matchPassword(value, user.password);
			if (match) return true;
		}
	}

	throw new Error('Incorrect password');
};

export const isCorrectCurrentPassword: CustomValidator = async (
	value: string,
	{ req: { user } }
): Promise<boolean> => {
	const match: boolean = await matchPassword(value, user.password);

	if (!match) throw new Error('Incorrect password');

	return true;
};

export const isValidTitle: CustomValidator = async (
	value: string,
	{ req: { user } }
): Promise<boolean> => {
	const parseLinks: ILink[] = JSON.parse(user.links);

	for (const link of parseLinks) {
		if (link.title === value) throw new Error('This title already exists');
	}

	return true;
};

export const isValidURL: CustomValidator = async (
	value: string,
	{ req: { user } }
): Promise<boolean> => {
	const parseLinks: ILink[] = JSON.parse(user.links);

	for (const link of parseLinks) {
		if (link.url === value) throw new Error('This URL already exists');
	}

	return true;
};

export const limitLinks: CustomValidator = async (
	_value: string,
	{ req: { user } }
): Promise<boolean> => {
	const parseLinks: ILink[] = JSON.parse(user.links);

	if (parseLinks.length >= 12) {
		throw new Error('Max number of links reached');
	}

	return true;
};

export const isUndefinedImage: CustomValidator = (_value, { req }) => {
	return req.file !== undefined;
};

export const isValidExtension: CustomValidator = (_value, { req }) => {
	const file = req.file;
	const ext: string = extname(file.originalname).toLowerCase();
	const values: string[] = Object.values(Ext);

	return values.includes(ext);
};

export const isValidImageSize: CustomValidator = (_value, { req }) => {
	return req.file.size < 20971520;
};

export const isValidAvatarSize: CustomValidator = (_value, { req }) => {
	return req.file.size < 1048576;
};
