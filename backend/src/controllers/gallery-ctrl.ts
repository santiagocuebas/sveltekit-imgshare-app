import type { Direction } from '../types/global.js';
import { Like } from 'typeorm';
import { SelectOption, orderGallery } from '../dictonary.js';
import { Image } from '../models/index.js';

export const getImages: Direction = async (req, res) => {
	// Find all images
	const images = await Image
		.find({
			where: { isPublic: true },
			order: orderGallery[String(req.query.order)] ?? orderGallery.NEWEST,
			select: SelectOption.Images
		})
		.catch(() => []);

	return res.json({ images });
};

export const getSearch: Direction = async (req, res) => {
	const searchParams = String(req.query.searchParams);

	// Find images by search params
	const images = await Image
		.find({
			where: [
				{ title: Like(`%${searchParams}%`), isPublic: true },
				{ description: Like(`%${searchParams}%`), isPublic: true }
			],
			order: orderGallery.NEWEST,
			select: SelectOption.Images
		})
		.catch(() => []);

	return res.json({ images });
};
