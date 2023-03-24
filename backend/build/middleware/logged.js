import jwt from 'jsonwebtoken';
import { JWT } from '../config.js';
import { UserRole } from '../enums.js';
import { User } from '../models/index.js';
export const isValidToken = async (req, res, next) => {
    try {
        const token = req.cookies['authenticate'];
        const decoded = jwt.verify(token, JWT);
        const user = await User.findOneBy({ username: decoded.user.username });
        if (user === null)
            throw 'Error';
        req.user = user;
        return next();
    }
    catch (err) {
        return res.json({ redirect: true, url: '/' });
    }
};
export const isNotValidToken = async (req, res, next) => {
    try {
        const token = req.cookies['authenticate'];
        const decoded = jwt.verify(token, JWT);
        const user = await User.findOneBy({ username: decoded.id });
        if (user === null)
            throw 'Error';
        return res.json({ redirect: true, url: user.username });
    }
    catch (err) {
        return next();
    }
};
export const isAdminToken = async (req, res, next) => {
    if (req.user.role === UserRole.ADMIN || req.user.role === UserRole.SUPER) {
        return next();
    }
    return res.json({ redirect: true, url: '/' });
};
export const isNotProperUser = async (req, res, next) => {
    const user = await User.findOneBy({ username: req.params.username });
    if (user &&
        req.user.username !== user.username &&
        user.role !== UserRole.SUPER &&
        (user.role !== UserRole.ADMIN || req.user.role === UserRole.SUPER)) {
        req.foreignUser = user;
        return next();
    }
    return res.json({ change: false });
};
export const getDataToken = async (req, _res, next) => {
    try {
        const token = req.cookies['authenticate'];
        const decoded = jwt.verify(token, JWT);
        const user = await User.findOneBy({ username: decoded.user.username });
        if (user === null)
            throw 'Error';
        req.user = user;
        return next();
    }
    catch (err) {
        return next();
    }
};
