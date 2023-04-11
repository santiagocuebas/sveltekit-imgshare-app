import { extname } from 'path';
import { Ext } from '../enums.js';
import { User } from '../models/index.js';
import { matchPassword } from '../libs/index.js';
export const isValidUsername = async (username) => {
    const user = await User.findOneBy({ username });
    if (user !== null)
        throw new Error('Username already in use');
    return true;
};
export const isValidEmail = async (email) => {
    const user = await User.findOneBy({ email });
    if (user !== null)
        throw new Error('E-mail already in use');
    return true;
};
export const confirmPassword = (value, { req: { body } }) => {
    if (value !== body.password)
        throw new Error('Password not match');
    return true;
};
export const isRegisterUser = async (value) => {
    const user = await User.findOne({
        where: [
            { username: value },
            { email: value }
        ]
    });
    if (!user)
        throw new Error('The user no exists');
    return true;
};
export const isCorrectPassword = async (value, { req: { body } }) => {
    if (body.username) {
        const user = await User.findOne({
            where: [
                { username: body.username },
                { email: body.username }
            ]
        });
        if (user) {
            const match = await matchPassword(value, user.password);
            if (match)
                return true;
        }
    }
    throw new Error('Incorrect password');
};
export const isCorrectCurrentPassword = async (value, { req: { user } }) => {
    const match = await matchPassword(value, user.password);
    if (!match)
        throw new Error('Incorrect password');
    return true;
};
export const isValidTitle = async (value, { req: { user } }) => {
    const parseLinks = JSON.parse(user.links);
    for (const link of parseLinks) {
        if (link.title === value)
            throw new Error('This title already exists');
    }
    return true;
};
export const isValidURL = async (value, { req: { user } }) => {
    const parseLinks = JSON.parse(user.links);
    for (const link of parseLinks) {
        if (link.url === value)
            throw new Error('This URL already exists');
    }
    return true;
};
export const limitLinks = async (_value, { req: { user } }) => {
    const parseLinks = JSON.parse(user.links);
    if (parseLinks.length >= 12) {
        throw new Error('Max number of links reached');
    }
    return true;
};
export const isUndefinedImage = (_value, { req }) => {
    return req.file !== undefined;
};
export const isValidExtension = (_value, { req }) => {
    const file = req.file;
    const ext = extname(file.originalname).toLowerCase();
    const values = Object.values(Ext);
    return values.includes(ext);
};
export const isValidImageSize = (_value, { req }) => {
    return req.file.size < 20971520;
};
export const isValidAvatarSize = (_value, { req }) => {
    return req.file.size < 1048576;
};
