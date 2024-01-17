import type { Direction } from '../global.js';
import { v2 as cloudinary } from 'cloudinary';
import { Score, UserRole } from '../enums.js';
import { catchLike, getId, dataUri } from '../libs/index.js';
import { Image, Comment } from '../models/index.js';

export const postUpload: Direction = async (req, res) => {
	const file = dataUri(req);

	if (file) {
		const imageId = await getId('Image');
		
		const data = await cloudinary.uploader
			.upload(file, { public_id: 'imgshare/' + imageId })
			.catch(() => {
				console.log('An error occurred while trying to uploaded the image');
				return null;
			});

		if (data) {
			// Create a new image
			const image = await Image.create({
				id: imageId,
				filename: data.secure_url,
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
		}
	}

	return res.json({
		error: { message: 'Someting went wrong while processing your request' }
	});
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
	if (image && (image.author === username || role !== UserRole.EDITOR)) {
		await cloudinary.uploader
			.destroy('imgshare/' + image.id)
			.catch(() => {
				console.error('An error occurred while trying to delete the image');
			});
		
		await Comment.delete({ imageId: image.id });
		await image.remove();
	}

	return res.json({});
};
