import type { IComment, IImage, IUser } from '../types/global.js';
import { Like } from 'typeorm';
import { Image, Comment, User } from '../models/index.js';
import { TypeId } from '../types/enums.js';

export const getId = async (identifier = '', num = 8): Promise<string> => {
	const validChar = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
	let id = '';

	for (let i = 0; i < num; i++) {
		id += validChar.charAt(Math.floor(Math.random() * validChar.length));
	}

	let data: IImage | IComment | IUser | null = null;

	if (identifier === TypeId.IMAGE) {
		data = await Image.findOneBy({ id });
	} else if (identifier === TypeId.COMMENT) {
		data = await Comment.findOneBy({ id });
	} else {
		data = await User.findOneBy({ avatar: Like(`%${id}`) });
	}

	if (data !== null) getId(identifier, num);

	return id;
};
