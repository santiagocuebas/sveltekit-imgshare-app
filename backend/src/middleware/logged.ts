import jwt, { JwtPayload } from 'jsonwebtoken';
import { JWT } from '../config.js';
import { UserRole } from '../enums.js';
import { Direction } from '../global.js';
import { User } from '../models/index.js';

export const isValidToken: Direction = async (req, res, next) => {
	try {
		const token = req.cookies['authenticate'];
		const decoded = jwt.verify(token, JWT) as JwtPayload;
		const user = await User.findOneBy({ username: decoded.user.username });

		if (user === null) throw 'Error';

		req.user = user;

		return next();
	} catch(err) {
		return res.json({ redirect: true, url: '/' });
	}
};

export const isNotValidToken: Direction = async (req, res, next) => {
	try {
		const token = req.cookies['authenticate'] as string;
		const decoded = jwt.verify(token, JWT) as JwtPayload;
		const user = await User.findOneBy({ username: decoded.id });
	
		if (user === null) throw 'Error';
	
		return res.json({ redirect: true, url: user.username });
	} catch(err) {
		return next();
	}
};

export const isAdminToken: Direction = async (req, res, next) => {
	if (req.user.role === UserRole.ADMIN || req.user.role === UserRole.SUPER) {
		return next();
	}

	return res.json({ redirect: true, url: '/' });
};

export const isNotProperUser: Direction = async (req, res, next) => {
	const user = await User.findOneBy({ username: req.params.username });

	if (
		user &&
		req.user.username !== user.username &&
		user.role !== UserRole.SUPER &&
		(user.role !== UserRole.ADMIN || req.user.role === UserRole.SUPER)
	) {
		req.foreignUser = user;
		
		return next();
	}

	return res.json({ change: false });
};

export const getDataToken: Direction = async (req, _res, next) => {
	try {
		const token = req.cookies['authenticate'];
		const decoded = jwt.verify(token, JWT) as JwtPayload;
		const user = await User.findOneBy({ username: decoded.user.username });

		if (user === null) throw 'Error';

		req.user = user as User;
		return next();
	} catch(err) {
		return next();
	}
};
