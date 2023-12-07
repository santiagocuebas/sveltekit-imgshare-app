import { Router } from 'express';
import { serialize } from 'cookie';
import { authCtrl } from '../controllers/index.js';
import { isValidToken, isNotValidToken } from '../middleware/logged.js';
import { validate } from '../middleware/validations.js';
import * as array from '../validators/arrays-validators.js';
import { DOMAIN, NODE_ENV } from '../config.js';

const router = Router();

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

		return res.json({ redirect: '/' });
	}
);

export default router;
