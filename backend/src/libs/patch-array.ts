import { IKeys } from '../types/global.js';

export const patchArray = (values: string[]) => {
	const objectQuery: IKeys<boolean> = {};

	for (const value of values) {
		objectQuery[value] = true;
	}

	return objectQuery;
};
