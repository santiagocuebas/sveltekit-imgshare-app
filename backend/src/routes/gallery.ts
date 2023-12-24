import { Router } from 'express';
import { orderGallery } from '../dictonary.js';
import { UserRole } from '../enums.js';
import { recentImages } from '../libs/index.js';
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
			likes: true,
			dislikes: true,
			views: true,
			totalComments: true
		}
	});

	return res.json({ images });
});

router.get('/:id', getDataToken, async (req, res) => {
	const where = (req.user?.role !== UserRole.EDITOR)
		? { id: req.params.id }
		: [
			{ id: req.params.id, isPublic: true },
			{ id: req.params.id, author: req.user?.username }
		];

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

	return res.status(401).json(image);
});

router.get('/order/:order', async (req, res) => {
	// Get order of image
	const order = orderGallery[req.params.order] ?? orderGallery.NEWEST;
	
	// Find images by order
	const images = await Image.find({
		where: { isPublic: true },
		order,
		select: {
			id: true,
			filename: true,
			title: true,
			likes: true,
			dislikes: true,
			views: true,
			totalComments: true
		}
	});

	return res.json({ images });
});

export default router;
