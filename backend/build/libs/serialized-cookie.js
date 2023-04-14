import jwt from 'jsonwebtoken';
import { serialize } from 'cookie';
import { DOMAIN, JWT, NODE_ENV } from '../config.js';
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
        domain: DOMAIN,
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 15,
        path: '/',
        sameSite: 'lax',
        secure: NODE_ENV === 'production'
    });
};
