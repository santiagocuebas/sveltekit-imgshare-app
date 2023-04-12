import fs from 'fs-extra';
import { extname, resolve } from 'path';
import { Direction } from '../global.js';
import { UserRole } from '../enums.js';
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
		like: [],
		dislike: [],
		favorite: []
	}).save();

	return res.json({ url: '/' + image.id });
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
	const image = await Image.findOneBy({ id: req.params.imageId });

	// Update like and dislike
	if (image !== null) {
		if (req.body.like === 'like') {
			const [ actLike, actDislike ] = catchLike(image.like, image.dislike, username);
			image.like = actLike;
			image.dislike = actDislike;
		} else if (req.body.like === 'dislike') {
			const [ actDislike, actLike ] = catchLike(image.dislike, image.like, username);
			image.like = actLike;
			image.dislike = actDislike;
		}

		await image.save();

		return res.json({ like: image.like, dislike: image.dislike });
	}

	return res.json(image);
};

export const postFavorite: Direction = async (req, res) => {
	const { username } = req.user;
	const image = await Image.findOneBy({ id: req.params.imageId });

	// Update favorite
	if (image !== null) {
		if (image.favorite.includes(username)) {
			image.favorite = image.favorite.filter(item => item !== username);
		} else {
			image.favorite = [username, ...image.favorite];
		}

		await image.save();

		return res.json({ favorite: image.favorite });
	}

	return res.json(image);
};

export const postComment: Direction = async (req, res) => {
	const { comment } = req.body;
	const image = await Image.findOneBy({ id: req.params.imageId });

	// Create a new comment if the image exists
	if (image !== null && typeof comment === 'string' && comment.length > 0 && comment.length < 4200) {
		const newComment = await Comment.create({
			id: await getId('Comment', 16),
			imageId: image.id,
			imageDir: image.filename,
			receiver: image.author,
			author: req.user.username,
			avatar: req.user.avatar,
			comment,
			like: [],
			dislike: []
		}).save();
		
		// Update total comments
		image.totalComments++;

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
