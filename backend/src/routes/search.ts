import { Router } from 'express';
import { Like } from 'typeorm';
import { Image } from '../models/index.js';

const router = Router();

router.get('/:searchParams', async (req, res) => {
	const searchParams = req.params.searchParams.trim();

	// Find images by search params
	const images = await Image.find({
		where: [
			{ title: Like(`%${searchParams}%`), isPublic: true },
			{ description: Like(`%${searchParams}%`), isPublic: true }
		],
		order: { createdAt: 'DESC', views: 'DESC' },
		select: {
			id: true,
			filename: true,
			title: true,
			like: true,
			dislike: true,
			views: true,
			totalComments: true
		}
	});

	return res.json({ images });
});

export default router;
