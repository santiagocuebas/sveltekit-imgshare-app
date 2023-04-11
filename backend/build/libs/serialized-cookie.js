import jwt from 'jsonwebtoken';
import { serialize } from 'cookie';
import { JWT } from '../config.js';
export const getSerializedCookie = ({ username, email, avatar, role }) => {
    const token = jwt.sign({
        user: {
            username,
            email,
            avatar,
            role
        },
        exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 15
    }, JWT);
    return serialize('authenticate', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 1000 * 60 * 60 * 24 * 15,
        path: '/'
    });
};
