import { Router } from 'express';
import { imageCtrl } from '../controllers/index.js';
import { isValidToken } from '../middleware/logged.js';
import { validate } from '../middleware/validations.js';
import * as array from '../validators/arrays-validators.js';

const router = Router();

router.use(isValidToken);

router.post('/upload', validate(array.Upload), imageCtrl.postUpload);

router.post('/:imageId/public', imageCtrl.postPublic);

router.post('/:imageId/description', imageCtrl.postDescription);

router.post('/:imageId/comment', imageCtrl.postComment);

router.post('/:imageId/like', imageCtrl.postLike);

router.post('/:imageId/favorite', imageCtrl.postFavorite);

router.delete('/:imageId', imageCtrl.deleteImage);

export default router;
