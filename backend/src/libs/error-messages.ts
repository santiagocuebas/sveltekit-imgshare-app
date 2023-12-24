import type { MessageData } from '../global.js';
import { ValidationError } from 'express-validator';

export const getErrorMessage = (errors: ValidationError[]): MessageData => {
	const message: MessageData = {};

	for (const e of errors) {
		if (e.type === 'field') message[e.path] = e.msg;
	}

	return message;
};
