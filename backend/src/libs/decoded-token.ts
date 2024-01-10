import type { JwtPayload } from 'jsonwebtoken';
import jwt from 'jsonwebtoken';
import { JWT } from '../config.js';
import { User } from '../models/index.js';

export const decodedToken = async (token: string) => {
	const decoded = jwt.verify(token, JWT) as JwtPayload;
	return await User.findOneBy({ username: decoded.username });
};
