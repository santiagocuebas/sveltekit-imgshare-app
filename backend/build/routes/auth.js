import { Router } from 'express';
import { authCtrl } from '../controllers/index.js';
import { isValidToken, isNotValidToken } from '../middleware/logged.js';
import { validate } from '../middleware/validations.js';
import * as array from '../validators/arrays-validators.js';
const router = Router();
router.post('/signup', isNotValidToken, validate(array.Signup), authCtrl.postSignup);
router.post('/signin', isNotValidToken, validate(array.Signin), authCtrl.postSignin);
router.post('/logout', isValidToken, (_req, res) => {
    // Delete cookie authenticate
    res.clearCookie('authenticate');
    return res.json({ url: '/' });
});
export default router;
