import type { Direction } from '../global.js';
import { UserRole } from '../enums.js';
import { decodedToken } from '../libs/index.js';
import { User } from '../models/index.js';

export const isValidToken: Direction = async (req, res, next) => {
	const token = req.cookies['authenticate'] ?? req.headers['authorization'];
	const user = await decodedToken(token).catch(() => null);

	if (user === null) return res.status(401).json({ redirect: true });

	req.user = user;

	return next();
};

export const isNotValidToken: Direction = async (req, res, next) => {
	const token = req.cookies['authenticate'] ?? req.headers['authorization'];
	const user = await decodedToken(token).catch(() => null);

	if (user === null) return next();

	return res.status(401).json({ redirect: true });
};

export const isAdminToken: Direction = async (req, res, next) => {
	if (req.user.role === UserRole.ADMIN || req.user.role === UserRole.SUPER) {
		return next();
	}

	return res.status(401).json();
};

export const isValidUser: Direction = async (req, res, next) => {
	const user = await User.findOneBy({ username: req.params.username });

	if (
		user !== null &&
		req.user.username !== user.username &&
		user.role !== UserRole.SUPER &&
		(user.role !== UserRole.ADMIN || req.user.role === UserRole.SUPER)
	) {
		req.foreignUser = user;
		
		return next();
	}

	return res.status(401).json({ change: false });
};

export const getDataToken: Direction = async (req, _res, next) => {
	const token = req.cookies['authenticate'] ?? req.headers['authorization'];
	const user = await decodedToken(token).catch(() => null);

	if (user !== null) req.user = user;

	return next();
};
