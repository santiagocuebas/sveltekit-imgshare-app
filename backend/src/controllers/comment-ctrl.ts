import { UserRole } from '../enums.js';
import { Direction } from '../global.js';
import { catchLike } from '../libs/index.js';
import { User, Comment, Image } from '../models/index.js';

export const postComment: Direction = async (req, res) => {
	const comment = await Comment.findOneBy({ id: req.params.id });

	// Update comment content
	if (comment !== null && req.user.username === comment.author) {
		comment.edit = true;
		comment.comment = req.body.comment;
		await comment.save();
	}

	return res.json({});
};

export const postLike: Direction = async (req, res) => {
	const { username } = req.user as User;
	const comment = await Comment.findOneBy({ id: req.params.id });

	// Update like and dislike
	if (comment !== null) {
		if (req.body.like === 'like') {
			const [ actLike, actDislike ] = catchLike(comment.likes, comment.dislikes, username);
			comment.likes = actLike;
			comment.dislikes = actDislike;
		} else if (req.body.like === 'dislike') {
			const [ actDislike, actLike ] = catchLike(comment.dislikes, comment.likes, username);
			comment.likes = actLike;
			comment.dislikes = actDislike;
		}

		await comment.save();

		return res.json({ likes: comment.likes, dislikes: comment.dislikes });
	}

	return res.json(comment);
};

export const deleteComment: Direction = async (req, res) => {
	const { username, role } = req.user;
	const comment = await Comment.findOneBy({ id: req.params.id });
	
	// Delete a comment
	if (comment !== null && (username === comment.author || username === comment.receiver || role !== UserRole.EDITOR)) {
		const image = await Image.findOne({
			where: { id: comment.imageId },
			select: { id: true, totalComments: true }
		}) as Image;

		// Update total comments
		image.totalComments--;
		
		await image.save();
		
		await comment.remove();
	}

	return res.json({});
};
