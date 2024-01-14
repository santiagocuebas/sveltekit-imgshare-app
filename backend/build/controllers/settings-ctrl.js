import fs from 'fs-extra';
import { extname, resolve } from 'path';
import { encryptPassword, deleteUserComments, deleteUserImages, getId } from '../libs/index.js';
import { Image, Comment } from '../models/index.js';
export const postAvatar = async (req, res) => {
    const { username, avatar } = req.user;
    const tempPath = req.file?.path;
    const ext = extname(req.file?.originalname).toLowerCase();
    const avatarURL = await getId() + ext;
    const oldPath = resolve(`uploads/avatars/${avatar}`);
    const targetPath = resolve(`uploads/avatars/${avatarURL}`);
    // Unlink old avatar
    if (avatar !== 'default.png')
        await fs.unlink(oldPath)
            .catch(err => {
            console.error('An error occurred while trying to delete the image', err?.message);
        });
    // Set avatar location
    await fs.rename(tempPath, targetPath);
    // Update databases with the new avatar
    Image.update({ author: username }, { avatar: avatarURL });
    Comment.update({ author: username }, { avatar: avatarURL });
    req.user.avatar = avatarURL;
    await req.user.save();
    return res.json({
        filename: avatarURL,
        message: 'Your avatar has been successfully updated'
    });
};
export const postDescription = async (req, res) => {
    // Update description
    if (req.body.description?.length < 8000) {
        req.user.description = req.body.description;
        await req.user.save();
        return res.json({
            message: 'Your description has been successfully updated'
        });
    }
    return res.json({
        message: { description: 'Have exceeded the character limit' }
    });
};
export const postPassword = async (req, res) => {
    // Update password
    req.user.password = await encryptPassword(req.body.password);
    await req.user.save();
    return res.json({ message: 'Your password has been successfully updated' });
};
export const postLinks = async (req, res) => {
    const links = JSON.parse(req.user.links);
    links.push({ title: req.body.title, url: req.body.url });
    // Update links
    req.user.links = JSON.stringify(links);
    await req.user.save();
    return res.json({ message: 'Your link has been successfully updated' });
};
export const deleteLinks = async (req, res) => {
    const links = JSON.parse(req.user.links);
    const newLinks = [];
    // Update links
    for (const link of links) {
        if (link.title !== req.body.title)
            newLinks.push(link);
    }
    req.user.links = JSON.stringify(newLinks);
    await req.user.save();
    return res.json({
        change: true,
        message: 'Your link has been successfully deleted'
    });
};
export const deleteUser = async (req, res) => {
    const { username, avatar } = req.user;
    // Delete avatar
    if (avatar !== 'default.png') {
        await fs.unlink(`uploads/avatars/${avatar}`)
            .catch(err => {
            console.error('An error occurred while trying to delete the image', err?.message);
        });
    }
    // Delete all images and comments of user and filters all their ratings
    deleteUserImages(username);
    deleteUserComments(username);
    // Delete user
    await req.user.remove();
    // Delete cookie
    res.clearCookie('authenticate');
    return res.json({ url: '/' });
};
