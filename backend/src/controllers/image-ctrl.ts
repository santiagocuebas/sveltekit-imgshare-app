import type { Direction } from '../types/global.js';
import { SelectOption, orderGallery } from '../dictonary.js';
import { queryOption, deleteFile, uploadFile, updateImage } from '../libs/index.js';
import { Image, Comment, User } from '../models/index.js';
import { Folder, UserRole } from '../types/enums.js';

export const getImage: Direction = async (req, res) => {
	const isPublic = !req.user || req.user.role === UserRole.EDITOR ? true : undefined;

	try {
		// Find image if exists
		const image = await Image.findOne({
			where: [
				{ id: req.params.id, isPublic },
				{ id: req.params.id, author: req.user?.username ?? '' }
			]
		});

		if (image === null) throw new Error();

		image.views++;

		// Get comments of images
		const comments = await Comment.find({
			where: { imageId: image.id },
			order: orderGallery.COMMENT
		});

		// Get recent images
		const sidebarImages = await Image.find({
			where: { isPublic: true },
			order: orderGallery.NEWEST,
			select: SelectOption.UnscoredImages,
			take: 20
		});

		return res.json({ image, comments, sidebarImages });
	} catch {
		return res.status(401).json(null);
	}
};

export const postUpload: Direction = async (req, res) => {
	try {
		const file = await uploadFile(req.file, Folder.PUBLIC);

		// Create a new image
		const image = await Image.create({
			id: file.id,
			filename: file.filename,
			author: req.user.username,
			avatar: req.user.avatar,
			title: req.body.title,
			description: req.body.description,
			likes: [],
			dislikes: [],
			favorites: [],
			totalComments: []
		}).save();

		return res.json({ url: image.id });
	} catch {
		return res.status(401).json({
			error: { message: 'Someting went wrong while processing your request' }
		});
	}
};

export const postViews: Direction = async (req, res) => {
	try {
		// Find image if exists
		const image = await Image.findOneBy({ id: req.params.id });

		if (image === null) throw undefined;

		await Image.update({ id: image.id }, { views: () => 'views + 1' });
		await User.update({ username: image.author },
			{ totalViews: () => 'totalViews + 1' });

		return res.json();
	} catch {
		return res.status(401).json();
	}
};

export const postPublic: Direction = async (req, res) => {
	// Switch to public or private
	const success = await updateImage({ id: req.params.id },
		{ isPublic: () => 'NOT isPublic' }, req.user);

	return res.status(success ? 200 : 401).json();
};

export const postDescription: Direction = async (req, res) => {
	// Update description
	const success = await updateImage({ id: req.params.id },
		{ description: req.body.description }, req.user);

	return res.status(success ? 200 : 401).json();
};

export const postScore: Direction = async (req, res) => {
	const query = queryOption(String(req.query.score), req.user.username);

	// Update like and dislike
	const success = await updateImage({ id: req.params.id }, query);

	return res.status(success ? 200 : 401).json();
};

export const postFavorite: Direction = async (req, res) => {
	const { username } = req.user;
	const favorites = () => `
		CASE WHEN '${username}' = ANY(favorites)
			THEN array_remove(favorites, '${username}')
			ELSE array_append(favorites, '${username}')
		END
	`;

	// Update favorite
	const success = await updateImage({ id: req.params.id }, { favorites });

	return res.status(success ? 200 : 401).json();
};

export const deleteImage: Direction = async (req, res) => {
	try {
		const author = req.user.role === UserRole.EDITOR ? req.user.username : undefined;

		const image = await Image.findOneBy({ id: req.params.id, author });

		if (image === null) throw undefined;

		// Delete a image and all their comments
		await deleteFile(image.filename, Folder.PUBLIC);
		await Comment.delete({ imageId: image.id });
		await User.update({ username: image.author },
			{ totalViews: () => `totalViews - ${image.views}` });
		await image.remove();

		return res.json();
	} catch {
		return res.status(401).json(null);
	}
};
