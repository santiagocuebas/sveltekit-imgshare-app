import type { Request, Response, NextFunction } from 'express';
import { validationResult, type ValidationChain } from 'express-validator';
import fs from 'fs/promises';
import { getErrorMessage } from '../libs/index.js';

export const validate = (validations: ValidationChain[]) => {
	return async (req: Request, res: Response, next: NextFunction) => {
		await Promise.all(validations.map(validation => validation.run(req)));

		const errs = validationResult(req);

		if (errs.isEmpty()) return next();

		const errors = getErrorMessage(errs.array());
		let message: unknown = { };

		if (req.file) await fs
			.unlink(req.file.path)
			.catch(err => console.error(err));

		if (req.baseUrl === '/api/auth') message = { errors };
		else if (req.baseUrl === '/api/admin') message = { change: false };
		else if (req.baseUrl === '/api/settings') {
			message = { success: false, message: errors };
		}

		return res.status(401).json(message);
	};
};
