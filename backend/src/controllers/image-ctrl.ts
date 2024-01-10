import type { Direction } from '../global.js';
import fs from 'fs-extra';
import { extname, resolve } from 'path';
import { Score, UserRole } from '../enums.js';
import { catchLike, getId } from '../libs/index.js';
import { Image, Comment } from '../models/index.js';

export const postUpload: Direction = async (req, res) => {
	const tempPath = req.file?.path as string;
	const ext = extname(req.file?.originalname as string).toLowerCase();
	const imgUrl = await getId('Image');
	const targetPath = resolve(`uploads/${imgUrl + ext}`);

	// Set image location
	await fs.rename(tempPath, targetPath);

	// Create a new image
	const image = await Image.create({
		id: imgUrl,
		filename: imgUrl + ext,
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
};

export const postPublic: Direction = async (req, res) => {
	const { username, role } = req.user;

	const image = await Image.findOneBy({ id: req.params.imageId });

	// Switch to public or private 
	if (image !== null && (username === image.author || role !== UserRole.EDITOR)) {
		image.isPublic = !image.isPublic;
		await image.save();
	}

	return res.json({});
};

export const postDescription: Direction = async (req, res) => {
	const { username, role } = req.user;

	const image = await Image.findOneBy({ id: req.params.imageId });

	// Update description
	if (image !== null && (username === image.author || role !== UserRole.EDITOR)) {
		image.description = req.body.description;
		await image.save();
	}

	return res.json({});
};

export const postLike: Direction = async (req, res) => {
	const { username } = req.user;
	const { like } = req.body;
	const scores = Object.values(Score);

	const image = await Image.findOneBy({ id: req.params.imageId });

	// Update like and dislike
	if (image !== null && scores.includes(like)) {
		const [ actLike, actDislike ] = (like === Score.LIKE)
			? catchLike(image.likes, image.dislikes, username)
			: catchLike(image.dislikes, image.likes, username);
		
		image.likes = (like === Score.LIKE) ? actLike : actDislike;
		image.dislikes = (like === Score.LIKE) ? actDislike : actLike;

		await image.save();

		return res.json({ likes: image.likes, dislikes: image.dislikes });
	}

	return res.json(image);
};

export const postFavorite: Direction = async (req, res) => {
	const { username } = req.user;
	const image = await Image.findOneBy({ id: req.params.imageId });

	// Update favorite
	if (image !== null) {
		image.favorites = (image.favorites.includes(username))
			? image.favorites.filter(item => item !== username)
			: [username, ...image.favorites];

		await image.save();

		return res.json({ favorite: image.favorites });
	}

	return res.json(image);
};

export const postComment: Direction = async (req, res) => {
	const { comment } = req.body;
	const image = await Image.findOneBy({ id: req.params.imageId });

	// Create a new comment if the image exists
	if (
		image !== null &&
		typeof comment === 'string' &&
		comment.length > 0 &&
		comment.length <= 4200
	) {
		const newComment = await Comment.create({
			id: await getId('Comment', 16),
			imageId: image.id,
			imageDir: image.filename,
			receiver: image.author,
			author: req.user.username,
			avatar: req.user.avatar,
			comment,
			likes: [],
			dislikes: []
		}).save();
		
		// Update total comments
		image.totalComments = [newComment.id, ...image.totalComments];
		await image.save();
		
		return res.json({ comment: newComment });
	}

	return res.json({});
};

export const deleteImage: Direction = async (req, res) => {
	const { username, role } = req.user;
	const image = await Image.findOneBy({ id: req.params.imageId });

	// Delete a image and all their comments
	if (image?.author === username || role !== UserRole.EDITOR) {
		await fs.unlink(`uploads/${image?.filename}`);
		await Comment.delete({ imageId: image?.id });
		await image?.remove();
	}

	return res.json({});
};
