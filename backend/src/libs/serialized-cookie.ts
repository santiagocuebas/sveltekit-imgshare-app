import jwt from 'jsonwebtoken';
import { JWT } from '../config.js';

export const getSerializedCookie = (username: string): string => {
	return jwt.sign({
		username,
		exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 15,
	}, JWT);
};
