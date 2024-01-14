import { UserRole } from '../enums.js';
import { decodedToken } from '../libs/index.js';
import { User } from '../models/index.js';
export const isValidToken = async (req, res, next) => {
    console.log(req.headers);
    const token = req.cookies['authenticate'];
    const user = await decodedToken(token).catch(() => null);
    if (user === null)
        return res.status(401).json({ redirect: true });
    req.user = user;
    return next();
};
export const isNotValidToken = async (req, res, next) => {
    const token = req.cookies['authenticate'];
    const user = await decodedToken(token).catch(() => null);
    if (user === null)
        return next();
    return res.status(401).json({ redirect: true });
};
export const isAdminToken = async (req, res, next) => {
    if (req.user.role === UserRole.ADMIN || req.user.role === UserRole.SUPER) {
        return next();
    }
    return res.status(401).json();
};
export const isValidUser = async (req, res, next) => {
    const user = await User.findOneBy({ username: req.params.username });
    if (user !== null &&
        req.user.username !== user.username &&
        user.role !== UserRole.SUPER &&
        (user.role !== UserRole.ADMIN || req.user.role === UserRole.SUPER)) {
        req.foreignUser = user;
        return next();
    }
    return res.status(401).json({ change: false });
};
export const getDataToken = async (req, _res, next) => {
    const token = req.cookies['authenticate'];
    const user = await decodedToken(token).catch(() => null);
    if (user !== null)
        req.user = user;
    return next();
};
