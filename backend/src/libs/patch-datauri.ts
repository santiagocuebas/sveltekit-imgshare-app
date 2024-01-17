import type { Request } from 'express';
import DatauriParser from 'datauri/parser.js';
import { extname } from 'path';

const parser = new DatauriParser();

export const dataUri = (req: Request) => {
	if (req.file) {
		const data = parser.format(extname(req.file.originalname).toString(), req.file.buffer);

		return data.content;
	}

	return null;
};
