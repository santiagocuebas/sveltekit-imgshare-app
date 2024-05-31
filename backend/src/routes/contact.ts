import { Router } from 'express';
import { getTestMessageUrl } from 'nodemailer';
import { account, transporter } from '../nodemailer.js';
import { validate } from '../middleware/validations.js';
import * as array from '../validators/arrays-validators.js';

const router = Router();

router.post('/', validate(array.Contact), async (req, res) => {
	const url = await transporter.sendMail({
		from: req.body.email,
		to: account.user,
		subject: req.body.subject,
		text: req.body.message
	}).then((info) => {
		console.log('Message sent: %s', info.messageId);
		return getTestMessageUrl(info);
	}).catch((err) => {
		console.log('Error occurred. ' + err.message);
		return process.exit(1);
	});

	return res.json({ url });
});

export default router;
