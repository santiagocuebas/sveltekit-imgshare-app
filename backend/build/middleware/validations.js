import { validationResult } from 'express-validator';
import fs from 'fs-extra';
import { getErrorMessage } from '../libs/index.js';
export const validate = (validations) => {
    return async (req, res, next) => {
        await Promise.all(validations.map(validation => validation.run(req)));
        const errs = validationResult(req);
        if (!errs.isEmpty()) {
            if (req.file !== undefined) {
                fs.unlink(req.file.path);
            }
            const errors = getErrorMessage(errs.array());
            if (req.baseUrl === '/api/settings') {
                return res.json({ message: errors });
            }
            return res.json({ errors });
        }
        return next();
    };
};
