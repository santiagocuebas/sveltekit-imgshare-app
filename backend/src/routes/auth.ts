import { Router } from 'express';
import { serialize } from 'cookie';
import { DOMAIN, NODE_ENV } from '../config.js';
import { authCtrl } from '../controllers/index.js';
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
	(req, res) => {
		const partialUser = req.user
			? {
				username: req.user.username,
				avatar: req.user.avatar,
				email: req.user.email,
				role: req.user.role
			} : undefined;

		return res.json({ user: partialUser });
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

router.post(
	'/logout',
	isValidToken,
	(_req, res) => {
		// Delete cookie authenticate
		res.set('Set-Cookie', serialize('authenticate', '', {
			domain: DOMAIN,
			httpOnly: true,
			maxAge: 0,
			path: '/',
			sameSite: 'none',
			secure: NODE_ENV === 'production'
		}));

		return res.json({ redirect: true });
	}
);

export default router;
