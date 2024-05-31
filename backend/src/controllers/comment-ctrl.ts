import type { Direction } from '../types/global.js';
import { getId, queryOption, updateComment } from '../libs/index.js';
import { Comment, Image } from '../models/index.js';
import { TypeId, UserRole } from '../types/enums.js';

export const postComment: Direction = async (req, res) => {
	try {
		const image = await Image.findOneBy({ id: String(req.query.id) });

		// Create a new comment if the image exists
		if (image === null) throw new Error();

		const newComment = await Comment.create({
			id: await getId(TypeId.COMMENT, 16),
			imageId: image.id,
			imageDir: image.filename,
			receiver: image.author,
			author: req.user.username,
			avatar: req.user.avatar,
			comment: req.body.comment,
			likes: [],
			dislikes: []
		}).save();

		// Update total comments
		image.totalComments = [newComment.id, ...image.totalComments];
		await image.save();

		return res.json(newComment);
	} catch {
		return res.status(401).json(null);
	}
};

export const postEditComment: Direction = async (req, res) => {
	// Update comment content
	const findQuery = { id: req.params.id, author: req.user.username };
	const optionsQuery = { edit: true, comment: req.body.comment };
	const success = await updateComment(findQuery, optionsQuery);

	return res.status(success ? 200 : 401).json();
};

export const postScore: Direction = async (req, res) => {
	// Update like and dislike
	const query = queryOption(String(req.query.score), req.user.username);
	const success = await updateComment({ id: req.params.id }, query);

	return res.status(success ? 200 : 401).json(success);
};

export const deleteComment: Direction = async (req, res) => {
	try {
		const author = (req.user.role === UserRole.EDITOR) ? req.user.username : undefined;
		const comment = await Comment.findOne({
			where: [
				{ id: req.params.id, author },
				{ id: req.params.id, receiver: author }
			]
		});

		if (comment === null) throw undefined;

		// Update total comments and delete a comment
		const totalComments = () => `array_remove(totalComments, '${comment.id}')`;
		await Image.update({ id: comment.imageId }, { totalComments });
		await comment.remove();

		return res.json();
	} catch (error) {
		return res.status(401).json();
	}
};
