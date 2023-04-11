import { Router } from 'express';
import { FindOptionsWhere } from 'typeorm';
import { UserRole } from '../enums.js';
import { getOrderGallery, recentImages } from '../libs/index.js';
import { getDataToken } from '../middleware/logged.js';
import { Image, Comment } from '../models/index.js';

const router = Router();

router.get('/', async (_req, res) => {
	// Find all images
	const images = await Image.find({
		where: { isPublic: true },
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

	return res.json(images);
});

router.get('/:id', getDataToken, async (req, res) => {
	let where: FindOptionsWhere<Image> | FindOptionsWhere<Image>[] = [];

	if (req.user?.role !== UserRole.EDITOR) {
		where = { id: req.params.id };
	} else {
		where = [
			{ id: req.params.id, isPublic: true },
			{ id: req.params.id, author: req.user?.username }
		];
	}

	// Find image if exists
	const image = await Image.findOne({ where });

	if (image !== null) {
		// Increment views
		image.views++;
		// Updated total comment 
		image.totalComments = await Comment.countBy({ imageId: image.id });
		await image.save();
		
		// Get comments of images
		const comments = await Comment.find({
			where: { imageId: image.id },
			order: { createdAt: 'DESC' }
		});

		// Get recent images
		const sidebarImages = await recentImages();

		return res.json({ image, comments, sidebarImages });
	}

	return res.json(image);
});

router.get('/order/:order', async (req, res) => {
	// Get order of image
	const order = getOrderGallery(req.params.order);
	
	// Find images by order
	const images = await Image.find({
		where: { isPublic: true },
		order,
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

	return res.json(images);
});

export default router;
