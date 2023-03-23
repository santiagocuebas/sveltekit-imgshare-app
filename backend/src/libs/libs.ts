import { FindOptionsOrder } from 'typeorm';
import { OrderGallery } from '../enums.js';
import { Image } from '../models/index.js';

export const getLike = (
	optOne: string[],
	optTwo: string[],
	username: string
) => {
	if (!optOne.includes(username)) {
		optOne.push(username);
		optTwo = optTwo.filter(opt => opt !== username);
	} else {
		optOne = optOne.filter(opt => opt !== username);
	}

	return [ optOne, optTwo ];
};

export const getOrderGallery = (order: string): FindOptionsOrder<Image> => {
	if (order === OrderGallery.NEWEST) {
		return { createdAt: 'DESC', views: 'DESC' };
	}
	else if (order === OrderGallery.OLDEST) {
		return { createdAt: 'ASC', views: 'DESC' };
	}
	else if (order === OrderGallery.VIEWED) {
		return { views: 'DESC', createdAt: 'DESC' };
	}
	else return { createdAt: 'DESC', views: 'DESC' };
};