import { DIR } from '$lib/config';
import axios from 'axios';
import isStrongPassword from 'validator/lib/isStrongPassword';

export const checkOldPassword = (
	pass: string,
	newPass: string,
	confirmPass: string
) => {
	const options = {
		method: 'POST',
		url: `${DIR}/api/auth/password`,
		withCredentials: true,
		data: { password: pass }
	};

	return pass.length >= 8 &&
		isStrongPassword(newPass) &&
		newPass === confirmPass &&
		axios(options)
			.then(res => res.data)
			.catch(() => false);
};

export const checkNewPassword = (pass: string) => {
	return typeof pass === 'string' && isStrongPassword(pass);
};

export const checkConfirmPassword = (pass: string, newPass: string) => {
	return pass === newPass;
};
