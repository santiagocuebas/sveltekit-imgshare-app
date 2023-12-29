import type { Direction } from '../global.js';
import { Like } from 'typeorm';
import { ShowValues, UserRole } from '../enums.js';
import { orderGallery } from '../dictonary.js';
import { User, Image, Comment } from '../models/index.js';

export const getUserData: Direction = async (req, res) => {
	const { username } = req.params;

	// Find user
	const user = await User.findOne({
		where: { username },
		select: {
			username: true,
			email: true,
			avatar: true,
			description: true,
			links: true,
			createdAt: true
		}
	});

	if (user !== null) {
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
		const favorites = await Image.find({
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
	
		return res.json({
			images,
			comments,
			favorites: favorites.filter(image => image.favorites.includes(username)),
			foreignUser: {
				...user,
				links: JSON.parse(user.links),
				totalViews: images.reduce((value, image) => value + Number(image.views), 0)
			}
		});
	}

	return res.status(401).json(user);
};

export const getImages: Direction = async (req, res) => {
	const { username, sort, isPublic } = req.params;
	const user = await User.findOneBy({ username });
		
	if (user) {
		const order = orderGallery[sort] ?? orderGallery.NEWEST;
		let isPublicImage: boolean | undefined = true;

		if (
			req.user?.username === username ||
			req.user?.role === UserRole.ADMIN ||
			req.user?.role === UserRole.SUPER
		) {
			if (isPublic === ShowValues.PUBLIC) isPublicImage = true;
			else if (isPublic === ShowValues.PRIVATE) isPublicImage = false;
			else isPublicImage = undefined;
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
	
		return res.json({ images });
	}

	return res.json(user);
};
