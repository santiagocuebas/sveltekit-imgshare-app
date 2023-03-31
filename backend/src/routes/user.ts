import { Router } from 'express';
import { userCtrl } from '../controllers/index.js';
import { isValidToken, getDataToken } from '../middleware/logged.js';
import { Image } from '../models/index.js';

const router = Router();

router.get('/:username/data', userCtrl.getUserData);

router.get('/:username/:isPublic/:sort', getDataToken, userCtrl.getImages);

router.post('/:username/upload', async (req, res) => {
	const recentImages = await Image.find({
		where: { author: req.params.username },
		order: { createdAt: 'DESC' },
		select: { id: true, filename: true },
		take: 3
	});

	return res.json({ images: recentImages });
});

router.post(
	'/:username/settings',
	isValidToken,
	(req, res) => {
		req.user.password = '';
		return res.json({ user: req.user });
	}
);

export default router;
