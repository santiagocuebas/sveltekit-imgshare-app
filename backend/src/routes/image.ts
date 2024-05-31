import { Router } from 'express';
import { imageCtrl } from '../controllers/index.js';
import { getDataToken, isValidToken } from '../middleware/logged.js';
import { validate } from '../middleware/validations.js';
import * as array from '../validators/arrays-validators.js';

const router = Router();

router.use(isValidToken);

router.get('/:id', getDataToken, imageCtrl.getImage);

router.post('/upload', validate(array.Upload), imageCtrl.postUpload);

router.post('/:id/views', imageCtrl.postViews);

router.post('/:id/public', imageCtrl.postPublic);

router.post(
	'/:id/description',
	validate(array.ImageDescription),
	imageCtrl.postDescription
);

router.post('/:id/score', validate(array.Score), imageCtrl.postScore);

router.post('/:id/favorite', imageCtrl.postFavorite);

router.delete('/:id', imageCtrl.deleteImage);

export default router;
