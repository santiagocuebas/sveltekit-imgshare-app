import jwt from 'jsonwebtoken';
import { JWT } from '../config.js';
import { User } from '../models/index.js';
export const decodedToken = async (token) => {
    const decoded = jwt.verify(token, JWT);
    return await User.findOneBy({ username: decoded.username });
};
