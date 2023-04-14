import { Like } from 'typeorm';
import { ShowValues, UserRole } from '../enums.js';
import { getOrderGallery } from '../libs/index.js';
import { User, Image, Comment } from '../models/index.js';
export const getUserData = async (req, res) => {
    const { username } = req.params;
    // Find user
    const foreignUser = await User.findOne({
        where: { username },
        select: {
            username: true,
            email: true,
            avatar: true,
            description: true,
            totalViews: true,
            links: true,
            createdAt: true
        }
    });
    if (foreignUser !== null) {
        // Get images of user
        const images = await Image.find({
            where: { author: username, isPublic: true },
            order: { createdAt: 'DESC' },
            select: {
                id: true,
                filename: true,
                title: true,
                likes: true,
                dislikes: true,
                views: true,
                totalComments: true
            }
        });
        // Get comments of user
        const comments = await Comment.find({
            where: { author: username },
            order: { createdAt: 'DESC' },
            select: { imageId: true, comment: true, createdAt: true }
        });
        // Get favorites images of user
        let favorites = await Image.find({
            where: { favorites: Like(`%${username}%`), isPublic: true },
            order: { createdAt: 'DESC' },
            select: {
                id: true,
                filename: true,
                title: true,
                likes: true,
                dislikes: true,
                favorites: true,
                views: true,
                totalComments: true
            }
        });
        favorites = favorites.filter((image) => image.favorites.includes(username));
        // Update total views
        foreignUser.totalViews = 0;
        for (const image of images) {
            foreignUser.totalViews += image.views;
        }
        await foreignUser.save();
        // Patch links
        foreignUser.links = JSON.parse(foreignUser.links);
        return res.json({ images, comments, favorites, foreignUser });
    }
    return res.json(foreignUser);
};
export const getImages = async (req, res) => {
    const { username, sort, isPublic } = req.params;
    const user = await User.findOneBy({ username });
    if (user) {
        const order = getOrderGallery(sort);
        let isPublicImage = true;
        if (req.user && (req.user.username === username || req.user.role === UserRole.ADMIN || req.user.role === UserRole.SUPER)) {
            if (isPublic === ShowValues.PUBLIC)
                isPublicImage = true;
            else if (isPublic === ShowValues.PRIVATE)
                isPublicImage = false;
            else
                isPublicImage = undefined;
        }
        // Get images by order
        const images = await Image.find({
            where: { author: username, isPublic: isPublicImage },
            order,
            select: {
                id: true,
                filename: true,
                title: true,
                likes: true,
                dislikes: true,
                views: true,
                totalComments: true
            }
        });
        return res.json(images);
    }
    return res.json(user);
};
