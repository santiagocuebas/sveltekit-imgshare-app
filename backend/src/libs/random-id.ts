import { Image, Comment, User } from '../models/index.js';

export const getImageId = async (): Promise<string> => {
	const validChar = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
	let id = '';

	for (let i = 0; i < 8; i++) {
		id += validChar.charAt(Math.floor(Math.random() * validChar.length));
	}

	const image = await Image.findOneBy({ id });

	if (image !== null) getImageId();

	return id;
};

export const getCommentId = async (): Promise<string> => {
	const validChar = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
	let id = '';

	for (let i = 0; i < 16; i++) {
		id += validChar.charAt(Math.floor(Math.random() * validChar.length));
	}

	const comment = await Comment.findOneBy({ id });

	if (comment !== null) getCommentId();

	return id;
};

export const getAvatarId = async (): Promise<string> => {
	const validChar = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
	let id = '';

	for (let i = 0; i < 8; i++) {
		id += validChar.charAt(Math.floor(Math.random() * validChar.length));
	}

	const user = await User.findOneBy({ avatar: id });

	if (user !== null) getAvatarId();

	return id;
};
