import { Router } from 'express';
import { authCtrl } from '../controllers/index.js';
import { matchPassword, getPartialUser } from '../libs/index.js';
import {
	isValidToken,
	isNotValidToken,
	getDataToken
} from '../middleware/logged.js';
import { validate } from '../middleware/validations.js';
import * as array from '../validators/arrays-validators.js';

const router = Router();

router.get(
	'/',
	getDataToken,
	async (req, res) => {
		const partialUser = req.user ? getPartialUser(req.user) : undefined;
		return res.json({ user: partialUser });
	}
);

router.post(
	'/password',
	isValidToken,
	async (req, res) => {
		const match = await matchPassword(req.body.password, req.user.password);
		return res.json(match);
	}
);

router.post(
	'/signup',
	isNotValidToken,
	validate(array.Signup),
	authCtrl.postSignup
);

router.post(
	'/signin',
	isNotValidToken,
	validate(array.Signin),
	authCtrl.postSignin
);

export default router;
