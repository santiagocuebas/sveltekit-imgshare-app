import fs from 'fs-extra';
import { Like } from 'typeorm';
import { Image, Comment } from '../models/index.js';

export const deleteUserImages = async (author: string) => {
	const imagesUser = await Image.findBy({ author });

	for (const image of imagesUser) {
		await fs.unlink(`uploads/${image.filename}`);
		await image.remove();
	}

	const imagesLikes = await Image.findBy({ likes: Like(`%${author}%`) });

	for (const image of imagesLikes) {
		image.likes = image.likes.filter(opt => opt !== author);
		await image.save();
	}

	const imagesDislikes = await Image.findBy({ dislikes: Like(`%${author}%`) });
	
	for (const image of imagesDislikes) {
		image.dislikes = image.dislikes.filter(opt => opt !== author);
		await image.save();
	}

	const imagesFavorites = await Image.findBy({ favorites: Like(`%${author}%`) });
	
	for (const image of imagesFavorites) {
		image.favorites = image.favorites.filter(opt => opt !== author);
		await image.save();
	}
};

export const deleteUserComments = async (author: string) => {
	await Comment.delete({ author });

	const commentsLikes = await Comment.findBy({ likes: Like(`%${author}%`) });
	
	for (const comment of commentsLikes) {
		comment.likes = comment.likes.filter(opt => opt !== author);
		await comment.save();
	}

	const commentsDislikes = await Comment.findBy({ dislikes: Like(`%${author}%`) });
	
	for (const comment of commentsDislikes) {
		comment.dislikes = comment.dislikes.filter(opt => opt !== author);
		await comment.save();
	}
};
