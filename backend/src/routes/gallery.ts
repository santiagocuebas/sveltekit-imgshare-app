import { Router } from 'express';
import { galleryCtrl } from '../controllers/index.js';

const router = Router();

router.get('/', galleryCtrl.getImages);

router.get('/search', galleryCtrl.getSearch);

export default router;
