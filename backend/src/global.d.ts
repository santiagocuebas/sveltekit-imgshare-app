import { Request, Response, NextFunction } from 'express';
import { UserRole } from './enums.js';
import { User } from './models/index.js';

declare global {
	namespace Express {
		interface Request {
			user: User;
			foreignUser: User;
		}
	}
}

export interface IUser {
	username: string;
	email: string;
	password: string;
	avatar: string;
	description: string;
	role: UserRole;
	totalViews: number;
	links: string;
	createdAt: Date;
}

export interface IContent {
	id: string;
	author: string;
	avatar: string;
	like: string[];
	dislike: string[];
	createdAt: Date;
}

export interface IImage extends IContent {
	filename: string;
	title: string;
	description: string;
	isPublic: boolean;
	views: number;
	totalComments: number;
	favorite: string[];
}

export interface IComment extends IContent {
	imageId: string;
	imageDir: string;
	receiver: string;
	comment: string;
	edit: boolean;
}

export interface ILink {
	title: string,
	url: string
}

export type Direction = (req: Request, res: Response, next: NextFunction) => void;

export interface MessageData {
	[index: string]: string;
}
