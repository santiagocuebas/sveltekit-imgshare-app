import { Router } from 'express';
import { adminCtrl } from '../controllers/index.js';
import { isValidToken, isAdminToken, isValidUser } from '../middleware/logged.js';
import { validate } from '../middleware/validations.js';
import * as array from '../validators/arrays-validators.js';

const router = Router();

router.use(isValidToken, isAdminToken);

router.get('/', adminCtrl.getUsers);

router.use(isValidUser);

router.post(
	'/description',
	validate(array.UserDescription),
	adminCtrl.postDescription,
);

router.post('/role', validate(array.Role), adminCtrl.postRole);

router.post('/link', validate(array.DeleteForeignLink), adminCtrl.deleteLink);

router.delete('/', adminCtrl.deleteUser);

export default router;
