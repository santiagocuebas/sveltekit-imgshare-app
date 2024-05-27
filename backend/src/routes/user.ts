import { Router } from 'express';
import { userCtrl } from '../controllers/index.js';
import { isValidToken, getDataToken } from '../middleware/logged.js';

const router = Router();

router.get('/:username/data', userCtrl.getUserData);

router.get('/:username/order', getDataToken, userCtrl.getImages);

router.post('/:username/upload', isValidToken, userCtrl.postUpload);

router.post('/:username/settings', isValidToken, userCtrl.postSettings);

export default router;
