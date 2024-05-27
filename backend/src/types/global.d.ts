import { Request, Response, NextFunction } from 'express';
import { UserRole } from './enums.js';

declare global {
	namespace Express {
		interface Request {
			user: IUser;
			foreignUser: IUser;
		}
	}
}

export type Direction = (req: Request, res: Response, next: NextFunction) => void;

export interface IKeys<T> {
	[index: string]: T;
}

export interface IUser {
	username: string;
	email: string;
	password: string;
	avatar: string;
	description: string;
	role: UserRole;
	totalViews: number;
	links: ILink[];
	createdAt: Date;
}

export interface IContent {
	id: string;
	author: string;
	avatar: string;
	likes: string[];
	dislikes: string[];
	createdAt: Date;
}

export interface IImage extends IContent {
	filename: string;
	title: string;
	description: string;
	isPublic: boolean;
	views: number;
	totalComments: string[];
	favorites: string[];
}

export interface IComment extends IContent {
	imageId: string;
	imageDir: string;
	receiver: string;
	comment: string;
	edit: boolean;
}

export interface ILink {
	title: string;
	url: string;
}
