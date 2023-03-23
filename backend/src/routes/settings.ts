import { Router } from 'express';
import { settingsCtrl } from '../controllers/index.js';
import { isValidToken } from '../middleware/logged.js';
import { validateSettings } from '../middleware/validations.js';
import * as array from '../validators/arraysValidators.js';

const router = Router();

router.use(isValidToken);

router.post('/avatar', validateSettings(array.Avatar), settingsCtrl.postAvatar);

router.post('/description', settingsCtrl.postDescription);

router.post('/password', validateSettings(array.Password), settingsCtrl.postPassword);

router.post('/link', validateSettings(array.Link), settingsCtrl.postLinks);

router.delete('/deletelink', settingsCtrl.deleteLinks);

router.delete('/deleteuser', settingsCtrl.deleteUser);

export default router;
