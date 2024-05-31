import fs from 'fs/promises';
import { resolve } from 'path';
import { getId } from './index.js';
import { AvailableExts } from '../dictonary.js';

export const uploadFile = async (
	file: Express.Multer.File | undefined,
	folder: string,
	type?: string
) => {
	if (file === undefined) throw undefined;

	const id = await getId(type);
	const filename = folder + id + AvailableExts[file.mimetype];
	const targetPath = resolve(filename);

	await fs.rename(file.path, targetPath);

	return { id, filename };
};

export const deleteFile = async (fileURL: string) => {
	const path = resolve(fileURL);

	await fs
		.unlink(path)
		.catch(err => console.error(err));
};
