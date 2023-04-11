import { FindOptionsOrder } from 'typeorm';
import { OrderGallery } from '../enums.js';
import { Image } from '../models/index.js';

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
