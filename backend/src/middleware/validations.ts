import { Request, Response, NextFunction } from 'express';
import {
	Result,
	ValidationError,
	validationResult,
	ValidationChain
} from 'express-validator';
import fs from 'fs-extra';
import { MessageData } from '../global.js';
import { getErrorMessage } from '../libs/error-messages.js';

export const validate = (validations: ValidationChain[]) => {
	return async (req: Request, res: Response, next: NextFunction) => {
		await Promise.all(validations.map(validation => validation.run(req)));
		
		const errs: Result<ValidationError> = validationResult(req);

		if (!errs.isEmpty()) {
			if (req.file !== undefined) {
				fs.unlink(req.file.path);
			}
			
			const errors: MessageData = getErrorMessage(errs.array());
			return res.json({ errors });
		}

		return next();
	};
};

export const validateSettings = (validations: ValidationChain[]) => {
	return async (req: Request, res: Response, next: NextFunction) => {
		await Promise.all(validations.map(validation => validation.run(req)));

		const errs: Result<ValidationError> = validationResult(req);

		if (!errs.isEmpty()) {
			if (req.file !== undefined) {
				fs.unlink(req.file.path);
			}
			
			const errors: MessageData = getErrorMessage(errs.array());

			return res.json({
				class: 'errors-settings',
				message: errors
			});
		}

		return next();
	};
};
