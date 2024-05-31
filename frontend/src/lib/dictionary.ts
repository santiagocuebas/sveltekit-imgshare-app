import type { IKeys } from './types/global';

export const ClassName: IKeys<string> = {
	accept: 'fa-check',
	error: 'fa-xmark'
};

export const TextData: IKeys<string> = {
	accept: 'The changes have been applied successfully',
	error: 'An error occurred while trying to apply the changes'
};

export const SelectIcon: IKeys<string> = {
	like: 'fa-thumbs-up',
	dislike: 'fa-thumbs-down',
	fav: 'fa-star',
	public: 'fa-image',
	favorites: 'fa-star',
	comments: 'fa-message',
	about: 'fa-file'
};

export const SettingText: IKeys<string> = {
	avatar: 'Set Avatar',
	description: 'Set Description',
	password: 'Change Password',
	link: 'Register Link',
	deleteuser: 'Delete User'
};

export const ButtonText: IKeys<string> = {
	avatar: 'Send',
	description: 'Accept',
	password: 'Send',
	link: 'Send',
	deleteuser: 'Delete User'
};
