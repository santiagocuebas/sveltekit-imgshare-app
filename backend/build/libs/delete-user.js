import fs from 'fs-extra';
import { Like } from 'typeorm';
import { Image, Comment } from '../models/index.js';
export const deleteUserImages = async (author) => {
    const imagesUser = await Image.findBy({ author });
    for (const image of imagesUser) {
        await fs.unlink(`src/uploads/${image.filename}`);
        await image.remove();
    }
    const imagesLikes = await Image.findBy({ like: Like(`%${author}%`) });
    for (const image of imagesLikes) {
        image.like = image.like.filter(opt => opt !== author);
        await image.save();
    }
    const imagesDislikes = await Image.findBy({ dislike: Like(`%${author}%`) });
    for (const image of imagesDislikes) {
        image.dislike = image.dislike.filter(opt => opt !== author);
        await image.save();
    }
    const imagesFavorites = await Image.findBy({ favorite: Like(`%${author}%`) });
    for (const image of imagesFavorites) {
        image.favorite = image.favorite.filter(opt => opt !== author);
        await image.save();
    }
};
export const deleteUserComments = async (author) => {
    await Comment.delete({ author });
    const commentsLikes = await Comment.findBy({ like: Like(`%${author}%`) });
    for (const comment of commentsLikes) {
        comment.like = comment.like.filter(opt => opt !== author);
        await comment.save();
    }
    const commentsDislikes = await Comment.findBy({ dislike: Like(`%${author}%`) });
    for (const comment of commentsDislikes) {
        comment.dislike = comment.dislike.filter(opt => opt !== author);
        await comment.save();
    }
};
