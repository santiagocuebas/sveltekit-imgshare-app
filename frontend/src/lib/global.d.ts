export interface IUser {
  username: string;
	email: string;
  avatar: string;
  role: string;
}

export interface IUserExtended extends IUser {
	description: string;
	links: string;
	createdAt: Date;
}

export interface IUserForeign extends IUser {
  description: string;
	links: ILink[];
	totalViews: number;
	createdAt: Date;
}

interface IContent {
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
	totalComments: number;
	favorites: string[];
}

export interface IComment extends IContent {
	imageId: string;
	imageDir: string;
	receiver: string;
	comment: string;
	edit: boolean;
}

export interface IMessage {
	[index: string]: string;
}

export interface ILink {
	title: string;
	url: string;
}
