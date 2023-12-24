import type { FindOptionsOrder } from 'typeorm';
import type { IKeys } from './global';
import { Image } from './models/Image';

export const orderGallery: IKeys<FindOptionsOrder<Image>> = {
	'NEWEST': { createdAt: 'DESC', views: 'DESC' },
	'OLDEST': { createdAt: 'ASC', views: 'DESC' },
	'VIEWED': { views: 'DESC', createdAt: 'DESC' }
};