import { Router } from 'express';
import { commentCtrl } from '../controllers/index.js';
import { isValidToken } from '../middleware/logged.js';
import { validate } from '../middleware/validations.js';
import * as array from '../validators/arrays-validators.js';

const router = Router();

router.use(isValidToken);

router.post('/', commentCtrl.postComment);

router.post('/:id/edit', validate(array.CommentEdit), commentCtrl.postEditComment);

router.post('/:id/score', validate(array.Score), commentCtrl.postScore);

router.delete('/:id', commentCtrl.deleteComment);

export default router;
