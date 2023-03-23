import { Router } from 'express';
import { commentCtrl } from '../controllers/index.js';
import { isValidToken } from '../middleware/logged.js';

const router = Router();

router.use(isValidToken);

router.post('/:id/edit', commentCtrl.postComment);

router.post('/:id/like', commentCtrl.postLike);

router.delete('/:id', commentCtrl.deleteComment);

export default router;
