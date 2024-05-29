import { deleteFile } from './index.js';
import { Image, Comment } from '../models/index.js';

export const deleteUserImages = async (author: string) => {
	const images = await Image.findBy({ author });

	for (const image of images) {
		await deleteFile(image.filename);
	}

	await Image.delete({ author });

	await Image.update({ }, {
		likes: () => `array_remove(likes, '${author}')`,
		dislikes: () => `array_remove(dislikes, '${author}')`,
		favorites: () => `array_remove(favorites, '${author}')`,
	});
};

export const deleteUserComments = async (author: string) => {
	await Comment.delete({ author });

	await Comment.update({ }, {
		likes: () => `array_remove(likes, '${author}')`,
		dislikes: () => `array_remove(dislikes, '${author}')`,
	});
};
