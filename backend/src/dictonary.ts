import type { FindOptionsOrder, FindOptionsSelect } from 'typeorm';
import type { IKeys } from './types/global.js';
import { patchArray } from './libs/index.js';
import { Image, User, Comment } from './models/index.js';

export const orderGallery: IKeys<FindOptionsOrder<User | Image | Comment>> = {
	NEWEST: { createdAt: 'DESC', views: 'DESC' },
	OLDEST: { createdAt: 'ASC', views: 'DESC' },
	VIEWED: { views: 'DESC', createdAt: 'DESC' },
	COMMENT: { createdAt: 'DESC' },
	USER: { createdAt: 'DESC' }
};

export const AvailableExts: IKeys<string> = {
	'image/apng': '.apng',
	'image/avif': '.avif',
	'image/gif': '.gif',
	'image/jpeg': '.jpg',
	'image/png': '.png',
	'image/svg+xml': '.svg',
	'image/webp': '.webp'
};

export const SelectOption: IKeys<FindOptionsSelect<Image>> = {
	User: patchArray([
		'username', 'email', 'avatar', 'description', 'links', 'createdAt', 'totalViews'
	]),
	Users: patchArray([
		'username', 'email', 'avatar', 'description', 'role', 'links', 'createdAt'
	]),
	Images: patchArray([
		'id', 'filename', 'title', 'likes', 'dislikes', 'views', 'totalComments'
	]),
	RecentImages: patchArray([
		'id', 'filename'
	]),
	UnscoredImages: patchArray([
		'id', 'filename', 'title', 'author', 'views', 'createdAt'
	]),
	FavoriteImages: patchArray([
		'id', 'filename', 'title', 'likes', 'dislikes', 'favorites', 'views', 'totalComments'
	]),
	PartialComments: patchArray([
		'imageId', 'comment', 'createdAt'
	])
};
