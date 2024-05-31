import { v2 as cloudinary } from 'cloudinary';
import DatauriParser from 'datauri/parser.js';
import { getId } from './index.js';
import { AvailableExts } from '../dictonary.js';
import { TypeId } from '../types/enums.js';

const parser = new DatauriParser();

export const uploadFile = async (
	file: Express.Multer.File | undefined,
	folder: string,
	avatar?: string
) => {
	const fileString = file
		? parser.format(AvailableExts[file.mimetype], file.buffer).content
		: undefined;

	if (fileString === undefined) throw undefined;

	const public_id = avatar && !avatar.includes('default')
		? avatar.split('/').at(-1)?.split('.').at(0)
		: await getId(avatar ?? TypeId.IMAGE);

	const data = await cloudinary
		.uploader
		.upload(fileString, { public_id, folder });

	return { id: public_id, filename: data.secure_url };
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
