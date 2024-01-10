import { IUser } from '../global.js';

export const getPartialUser = (user: IUser) => {
	return {
		username: user.username,
		avatar: user.avatar,
		description: user.description,
		links: user.links,
		email: user.email,
		role: user.role
	};
};
