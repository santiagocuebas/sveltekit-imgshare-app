import { createTransport, createTestAccount } from 'nodemailer';

export const account = await createTestAccount();

export const transporter = createTransport({
	host: account.smtp.host,
	port: account.smtp.port,
	secure: account.smtp.secure,
	auth: {
		user: account.user,
		pass: account.pass,
	},
});
