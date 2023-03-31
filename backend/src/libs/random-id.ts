import { Like } from 'typeorm';
import { Image, Comment, User } from '../models/index.js';

export const getId = async (identifier = '', num = 8): Promise<string> => {
	const validChar = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
	let id = '';

	for (let i = 0; i < num; i++) {
		id += validChar.charAt(Math.floor(Math.random() * validChar.length));
	}

	if (identifier === 'Image') {
		const image = await Image.findOneBy({ id });
		if (image !== null) getId(identifier, num);
	} else if (identifier === 'Comment') {
		const comment = await Comment.findOneBy({ id });
		if (comment !== null) getId(identifier, num);
	} else {
		const user = await User.findOneBy({ avatar: Like(`${id}%`) });
		if (user !== null) getId(identifier, num);
	}

	return id;
};
