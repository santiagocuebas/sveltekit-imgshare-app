import { ValidationError } from 'express-validator';
import { MessageData } from '../global.js';

export const getErrorMessage = (errors: ValidationError[]): MessageData => {
	const message: MessageData = {};

	for (const e of errors) {
		if (e.type === 'field') message[e.path] = e.msg;
	}

	return message;
};
