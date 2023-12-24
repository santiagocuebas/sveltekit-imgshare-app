export interface IKeys<T> {
	[index: string]: T;
}

export interface IUser {
  username: string;
	email: string;
  avatar: string;
  role: string;
}

export interface IUserExtended extends IUser {
	description: string;
	links: ILink[];
	createdAt: Date;
}

export interface IUserForeign extends IUserExtended {
	totalViews: number;
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

export interface ResponseData {
	[index: string]: IUser | IUserExtended | IUserForeign | IImage | IComment | undefined;
	user: IUser | undefined;
	users: IUserExtended[];
	extendedUser: IUserExtended;
	foreignUser: IUserForeign;
	image: IImage;
	images: IImage[];
	favorites: IImage[];
	sidebarImages: IImage[];
	comments: IComment[];
	change: boolean;
	errors: IKeys<string>;
	redirect: boolean;
	url: string;
	likes: string[];
	dislikes: string[];
	favorite: string[];
}

export interface ResponseForeign {
	foreignUser: IUserForeign | null;
	images: IImage[];
	comments: IComment[];
	favorites: IImage[];
}

export interface ResponseImage {
	image: IImage | null;
	comments: IComment[];
	sidebarImages: IImage[];
}
