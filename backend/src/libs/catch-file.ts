import { v2 as cloudinary } from 'cloudinary';
import DatauriParser from 'datauri/parser.js';
import { getId } from './index.js';
import { AvailableExts } from '../dictonary.js';

const parser = new DatauriParser();

export const uploadFile = async (
	file: Express.Multer.File | undefined,
	folder: string,
	avatar: string | null,
	type?: string,
) => {
	const fileString = file
		? parser.format(AvailableExts[file.mimetype], file.buffer).content
		: undefined;

	if (fileString === undefined) return null;

	const public_id = avatar && !avatar.includes('default')
		? avatar.split('/').at(-1)?.split('.').at(0)
		: await getId(type);

	const data = await cloudinary
		.uploader
		.upload(fileString, { public_id, folder })
		.catch(() => {
			console.log('An error occurred while trying to uploaded the image');
			return null;
		});

	return data;
};

export const deleteFile = async (fileURL: string, folder: string) => {
	const [avatarFullFilename] = fileURL.split('/').reverse();
	const [avatarFilename] = avatarFullFilename.split('.');

	await cloudinary
		.uploader
		.destroy(folder + avatarFilename)
		.catch(() => {
			console.error('An error occurred while trying to delete the image');
		});
};
