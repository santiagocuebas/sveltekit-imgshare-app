import { v2 as cloudinary } from 'cloudinary';
import { Like } from 'typeorm';
import { Image, Comment } from '../models/index.js';

export const deleteUserImages = async (author: string) => {
	const imagesUser = await Image.findBy({ author });

	for (const image of imagesUser) {
		await cloudinary.uploader
			.destroy('imgshare/' + image.id)
			.catch(() => {
				console.error('An error occurred while trying to delete the image');
			});
		
		await image.remove();
	}

	const images = await Image.find({
		where: [
			{ likes: Like('%ethaikalama%') },
			{ dislikes: Like('%ethaikalama%') },
			{ favorites: Like('%ethaikalama%') }
		]
	});

	for (const image of images) {
		image.likes = image.likes.filter(opt => opt !== author);
		image.dislikes = image.dislikes.filter(opt => opt !== author);
		image.favorites = image.favorites.filter(opt => opt !== author);
		await image.save();
	}
};

export const deleteUserComments = async (author: string) => {
	await Comment.delete({ author });

	const comments = await Comment.find({
		where: [
			{ likes: Like(`%${author}%`) },
			{ dislikes: Like(`%${author}%`) }
		]
	});
	
	for (const comment of comments) {
		comment.likes = comment.likes.filter(opt => opt !== author);
		comment.dislikes = comment.dislikes.filter(opt => opt !== author);
		await comment.save();
	}
};
