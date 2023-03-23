import { Router } from 'express';
import { Like } from 'typeorm';
import { adminCtrl } from '../controllers/index.js';
import { UserRole } from '../enums.js';
import { isValidToken, isAdminToken, isNotProperUser } from '../middleware/logged.js';
import { User } from '../models/index.js';

const router = Router();

router.use(isValidToken, isAdminToken);

router.get('/', async (_req, res) => {
	// Find all users
	const users = await User.find({
		select: {
			username: true,
			email: true,
			avatar: true,
			description: true,
			role: true,
			links: true,
			createdAt: true
		},
		where: [
			{ role: UserRole.EDITOR },
			{ role: UserRole.MOD },
			{ role: UserRole.ADMIN }
		],
		order: { createdAt: 'DESC' }
	});

	return res.json({ users });
});

router.get('/:username', async (req, res) => {
	// Get specific user
	const users = await User.find({
		select: {
			username: true,
			email: true,
			avatar: true,
			description: true,
			role: true,
			links: true,
			createdAt: true
		},
		where: [
			{ role: UserRole.EDITOR, username: Like(`%${req.params.username}%`) },
			{ role: UserRole.MOD, username: Like(`%${req.params.username}%`) },
			{ role: UserRole.ADMIN, username: Like(`%${req.params.username}%`) }
		],
		order: { createdAt: 'DESC' }
	});

	return res.json({ users });
});

router.post('/:username/description', isNotProperUser, adminCtrl.postDescription);

router.post('/:username/role', isNotProperUser, adminCtrl.postRole);

router.delete('/:username', isNotProperUser, adminCtrl.deleteUser);

router.delete('/:username/link', isNotProperUser, adminCtrl.deleteLink);

export default router;
