import type { Direction } from '../global.js';
import { Score, UserRole } from '../enums.js';
import { catchLike } from '../libs/index.js';
import { Comment, Image } from '../models/index.js';

export const postComment: Direction = async (req, res) => {
	const comment = await Comment.findOneBy({ id: req.params.id });

	// Update comment content
	if (
		comment !== null &&
		req.user.username === comment.author &&
		typeof req.body.comment === 'string' &&
		req.body.comment.length > 0 &&
		req.body.comment.length <= 4200
	) {
		comment.edit = true;
		comment.comment = req.body.comment;
		await comment.save();
	}

	return res.status(comment ? 200 : 401).json();
};

export const postLike: Direction = async (req, res) => {
	const { username } = req.user;
	const { like } = req.body;
	const scores = Object.values(Score);
	
	const comment = await Comment.findOneBy({ id: req.params.id });

	// Update like and dislike
	if (comment !== null && scores.includes(like)) {
		const [ actLike, actDislike ] = (like === Score.LIKE)
			? catchLike(comment.likes, comment.dislikes, username)
			: catchLike(comment.dislikes, comment.likes, username);
			
		comment.likes = (like === Score.LIKE) ? actLike : actDislike;
		comment.dislikes = (like === Score.LIKE) ? actDislike : actLike;

		await comment.save();
	}

	return res.status(comment ? 200 : 401).json(comment);
};

export const deleteComment: Direction = async (req, res) => {
	const { username, role } = req.user;
	const comment = await Comment.findOneBy({ id: req.params.id });
	
	// Delete a comment
	if (
		comment !== null &&
		(
			username === comment.author ||
			username === comment.receiver ||
			role !== UserRole.EDITOR
		)
	) {
		const image = await Image.findOneBy({ id: comment.imageId });

		// Update total comments
		if (image) {
			image.totalComments = image.totalComments.filter(id => comment.id !== id);
			await image.save();
		}
		
		await comment.remove();
	}

	return res.status(comment ? 200 : 401).json();
};
