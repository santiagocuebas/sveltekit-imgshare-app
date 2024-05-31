import type {
	QueryPartialEntity
} from 'typeorm/query-builder/QueryPartialEntity.js';
import type { IImage } from '../types/global.js';
import { Score } from '../types/enums.js';

export const queryOption = (score: string, username: string) => {
	const queryParams: QueryPartialEntity<IImage> = {};
	const [firstScore, secondScore] = score === Score.LIKE
		? Object.values(Score)
		: Object.values(Score).reverse();

	queryParams[firstScore] = () => `
		CASE WHEN '${username}' = ANY(${firstScore})
			THEN array_remove(${firstScore}, '${username}')
			ELSE array_append(${firstScore}, '${username}')
		END
	`;

	queryParams[secondScore] = () => `array_remove(${secondScore}, '${username}')`;

	return queryParams;
};
