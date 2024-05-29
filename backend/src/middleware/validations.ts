import type { Request, Response, NextFunction } from 'express';
import { validationResult, type ValidationChain } from 'express-validator';
import fs from 'fs/promises';
import { getErrorMessage } from '../libs/index.js';

export const validate = (validations: ValidationChain[]) => {
	return async (req: Request, res: Response, next: NextFunction) => {
		await Promise.all(validations.map(validation => validation.run(req)));

		const errs = validationResult(req);

		if (!errs.isEmpty()) {
			const errors = getErrorMessage(errs.array());

			if (req.file) {
				await fs
					.unlink(req.file.path)
					.catch(err => console.error(err));
			}

			if (req.baseUrl === '/api/settings') {
				return res.status(401).json({ success: false, message: errors });
			}

			if (req.baseUrl === '/api/admin') {
				return res.status(401).json({ change: false });
			}

			return res.status(401).json({ errors });
		}

		return next();
	};
};
