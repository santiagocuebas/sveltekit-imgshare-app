import type { Direction } from '../types/global.js';
import { ArrayContains } from 'typeorm';
import { SelectOption, orderGallery } from '../dictonary.js';
import { User, Image, Comment } from '../models/index.js';
import { ShowValues, UserRole } from '../types/enums.js';

export const getUserData: Direction = async (req, res) => {
	try {
		// Find user
		const user = await User.findOne({
			where: { username: req.params.username },
			select: SelectOption.User,
		});

		if (user === null) throw undefined;

		// Get images of user
		const images = await Image.find({
			where: { author: user.username, isPublic: true },
			order: { createdAt: 'DESC' },
			select: SelectOption.Images,
		});

		// Get comments of user
		const comments = await Comment.find({
			where: { author: user.username },
			order: { createdAt: 'DESC' },
			select: SelectOption.PartialComments,
		});

		// Get favorites images of user
		const favorites = await Image.find({
			where: { favorites: ArrayContains([user.username]), isPublic: true },
			order: { createdAt: 'DESC' },
			select: SelectOption.FavoriteImages,
		});

		return res.json({
			images,
			comments,
			favorites,
			foreignUser: {
				...user,
				totalViews: images.reduce((value, image) => value + Number(image.views), 0),
			},
		});
	}
	catch {
		return res.status(401).json(null);
	}
};

export const getImages: Direction = async (req, res) => {
	try {
		const { order, isVisible } = req.query;
		const user = await User.findOneBy({ username: req.params.username });

		if (user === null) throw undefined;

		let isPublic: boolean | undefined = true;

		if (
			req.user?.username === user.username
			|| req.user?.role === UserRole.ADMIN
			|| req.user?.role === UserRole.SUPER
		) {
			if (isVisible === ShowValues.PRIVATE) isPublic = false;
			else if (isVisible !== ShowValues.PUBLIC) isPublic = undefined;
		}

		// Get images by order
		const images = await Image.find({
			where: { author: user.username, isPublic },
			order: orderGallery[String(order)] ?? orderGallery.NEWEST,
			select: SelectOption.Images,
		});

		return res.json({ images });
	}
	catch {
		return res.status(401).json();
	}
};

export const postUpload: Direction = async (req, res) => {
	if (req.user.username !== req.params.username) return res.status(401).json();

	const recentImages = await Image
		.find({
			where: { author: req.params.username },
			order: { createdAt: 'DESC' },
			select: SelectOption.RecentImages,
			take: 3,
		})
		.catch(() => []);

	return res.json({ images: recentImages });
};

export const postSettings: Direction = (req, res) => {
	if (req.user.username !== req.params.username) return res.status(401).json();

	return res.json({ });
};
