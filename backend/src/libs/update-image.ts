import type { FindOptionsWhere, TypeORMError } from 'typeorm';
import type {
	QueryPartialEntity
} from 'typeorm/query-builder/QueryPartialEntity.js';
import type { IUser } from '../types/global.js';
import { Image, Comment, User } from '../models/index.js';
import { UserRole } from '../types/enums.js';

export const updateUser = async (
	username: string,
	optionsQuery: QueryPartialEntity<User>
) => {
	return User
		.update({ username }, optionsQuery)
		.then((res) => {
			return res.affected
				? [true, 'Your user has been successfully updated']
				: [false, 'The user was not found'];
		})
		.catch((err: TypeORMError) => {
			console.error(err?.message);
			return [false, 'An error occurred wiht the database'];
		});
};

export const updateImage = async (
	findQuery: FindOptionsWhere<Image>,
	optionsQuery: QueryPartialEntity<Image>,
	user?: IUser
) => {
	if (user?.role === UserRole.EDITOR) findQuery['author'] = user.username;

	return Image
		.update(findQuery, optionsQuery)
		.then(res => Boolean(res.affected))
		.catch((err: TypeORMError) => {
			console.error(err?.message);
			return false;
		});
};

export const updateComment = async (
	findQuery: FindOptionsWhere<Comment>,
	optionsQuery: QueryPartialEntity<Comment>
) => {
	return Comment
		.update(findQuery, optionsQuery)
		.then(res => Boolean(res.affected))
		.catch((err: TypeORMError) => {
			console.error(err?.message);
			return false;
		});
};
