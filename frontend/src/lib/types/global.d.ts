export interface IKeys<T> {
	[index: string]: T;
}

export interface IUser {
	username: string;
  avatar: string;
  description: string;
	email: string;
  role: string;
  links: ILink[];
}

export interface IUserExtended extends IUser {
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

export interface IResProps {
	success: boolean;
	message: string | IKeys<string>;
	filename?: string;
}

export interface ResponseSubmit {
	url: string;
	errors: IKeys<string>;
	user: RawUser & { links: string } | undefined;
	token: string;
}

export interface ResponseForeign {
	foreignUser: IUserForeign;
	images: IImage[];
	comments: IComment[];
	favorites: IImage[];
}

export interface ResponseImage {
	image: IImage;
	comments: IComment[];
	sidebarImages: IImage[];
}

export interface SettingsProps {
	[index: string]: string | IKeys<boolean> | ILink;
	avatar: string;
	description: string;
	password: IKeys<boolean>;
	link: ILink;
}

export interface DisabledButton {
	[index: string]: ((value: string) => boolean) | ((pass: IKeys<boolean>) => boolean) | ((value: ILink) => boolean);
	avatar: (value: any) => boolean;
	description: (value: any) => boolean;
	password: (value: any) => boolean;
	link: (value: any) => boolean;
	deleteuser: () => boolean;
}
