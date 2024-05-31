import { Router } from 'express';
import { authCtrl } from '../controllers/index.js';
import {
	isValidToken,
	isNotValidToken,
	getDataToken
} from '../middleware/logged.js';
import { validate } from '../middleware/validations.js';
import * as array from '../validators/arrays-validators.js';

const router = Router();

router.get('/', getDataToken, authCtrl.getUser);

router.post('/password', isValidToken, authCtrl.postPassword);

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
