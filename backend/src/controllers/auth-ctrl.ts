import type { Direction } from '../types/global.js';
import {
	encryptPassword,
	getPartialUser,
	getSerializedCookie,
	matchPassword
} from '../libs/index.js';
import { User } from '../models/index.js';

export const getUser: Direction = async (req, res) => {
	const partialUser = req.user ? getPartialUser(req.user) : undefined;

	return res.json({ user: partialUser });
};

export const postPassword: Direction = async (req, res) => {
	const match = await matchPassword(req.body.password, req.user.password)
		.catch(() => false);

	return res.json(match);
};

export const postSignup: Direction = async (req, res) => {
	try {
		// Create a new user
		const user = await User.create({
			username: req.body.username,
			email: req.body.email,
			password: await encryptPassword(req.body.password),
			description: '',
			links: []
		}).save();

		// Create a cookie of authentication
		const token = getSerializedCookie(user.username);
		const partialUser = getPartialUser(user);

		return res.json({ user: partialUser, token });
	} catch (error) {
		return res.status(401).json();
	}
};

export const postSignin: Direction = async (req, res) => {
	try {
		// Find user by username or email
		const user = await User.findOne({
			where: [
				{ username: req.body.username },
				{ email: req.body.username }
			]
		}) as User;

		// Create a cookie of authentication
		const token = getSerializedCookie(user.username);
		const partialUser = getPartialUser(user);

		return res.json({ user: partialUser, token });
	} catch {
		return res.status(401).json();
	}
};
