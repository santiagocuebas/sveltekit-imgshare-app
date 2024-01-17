import type { FindOptionsWhere } from 'typeorm';
import { Router } from 'express';
import { orderGallery } from '../dictonary.js';
import { UserRole } from '../enums.js';
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
	let where: FindOptionsWhere<Image> | FindOptionsWhere<Image>[] =
		{ id: req.params.id, isPublic: true };

	if (req.user) {
		where = (req.user.role === UserRole.EDITOR)
			? [
				{ id: req.params.id, isPublic: true },
				{ id: req.params.id, author: req.user?.username }
			] : { id: req.params.id };
	}

	// Find image if exists
	const image = await Image.findOne({ where });

	if (image !== null) {
		// Increment views
		image.views++;
		
		// Get comments of images
		const comments = await Comment.find({
			where: { imageId: image.id },
			order: { createdAt: 'DESC' }
		});

		// Get recent images
		const sidebarImages = await Image.find({
			select: {
				id: true,
				filename: true,
				title: true,
				author: true,
				views: true,
				createdAt: true
			},
			where: { isPublic: true },
			order: { createdAt: 'DESC' },
			take: 20
		});

		return res.json({ image, comments, sidebarImages });
	}

	return res.status(401).json(image);
});

router.post('/views/:id', async (req, res) => {
	// Find image if exists
	const image = await Image.findOneBy({ id: req.params.id });

	if (image !== null) {
		// Increment views
		image.views++;
		await image.save();
	}

	return res.json({});
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
