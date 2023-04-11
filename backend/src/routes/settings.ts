import { Router } from 'express';
import { settingsCtrl } from '../controllers/index.js';
import { isValidToken } from '../middleware/logged.js';
import { validate } from '../middleware/validations.js';
import * as array from '../validators/arrays-validators.js';

const router = Router();

router.use(isValidToken);

router.post('/avatar', validate(array.Avatar), settingsCtrl.postAvatar);

router.post('/description', settingsCtrl.postDescription);

router.post('/password', validate(array.Password), settingsCtrl.postPassword);

router.post('/link', validate(array.Link), settingsCtrl.postLinks);

router.delete('/deletelink', settingsCtrl.deleteLinks);

router.delete('/deleteuser', settingsCtrl.deleteUser);

export default router;
