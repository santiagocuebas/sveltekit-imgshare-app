import type { IKeys } from '../global.js';
import { ValidationError } from 'express-validator';

export const getErrorMessage = (errors: ValidationError[]) => {
	const message: IKeys<string> = {};

	for (const e of errors) {
		if (e.type === 'field') message[e.path] = e.msg;
	}

	return message;
};
