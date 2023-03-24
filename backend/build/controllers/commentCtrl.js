import { UserRole } from '../enums.js';
import { getLike } from '../libs/libs.js';
import { Comment, Image } from '../models/index.js';
export const postComment = async (req, res) => {
    const comment = await Comment.findOneBy({ id: req.params.id });
    // Update comment content
    if (comment !== null && req.user.username === comment.author) {
        comment.edit = true;
        comment.comment = req.body.comment;
        await comment.save();
    }
    return res.json({});
};
export const postLike = async (req, res) => {
    const { username } = req.user;
    const comment = await Comment.findOneBy({ id: req.params.id });
    // Update like and dislike
    if (comment !== null) {
        if (req.body.like === 'like') {
            const [actLike, actDislike] = getLike(comment.like, comment.dislike, username);
            comment.like = actLike;
            comment.dislike = actDislike;
        }
        else if (req.body.like === 'dislike') {
            const [actDislike, actLike] = getLike(comment.dislike, comment.like, username);
            comment.like = actLike;
            comment.dislike = actDislike;
        }
        await comment.save();
        return res.json({ like: comment.like, dislike: comment.dislike });
    }
    return res.json(comment);
};
export const deleteComment = async (req, res) => {
    const { username, role } = req.user;
    const comment = await Comment.findOneBy({ id: req.params.id });
    // Delete a comment
    if (comment !== null &&
        (username === comment.author || username === comment.receiver ||
            role !== UserRole.EDITOR)) {
        const image = await Image.findOne({
            where: { id: comment.imageId },
            select: { id: true, totalComments: true }
        });
        // Update total comments
        image.totalComments--;
        await image.save();
        await comment.remove();
    }
    return res.json({});
};
