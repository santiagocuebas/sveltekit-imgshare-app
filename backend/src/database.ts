import { DataSource } from 'typeorm';
import { DB_URI } from './config.js';
import { Comment, Image, User } from './models/index.js';

export const AppDatabase = new DataSource({
	type: 'cockroachdb',
	url: DB_URI,
	ssl: true,
	synchronize: false,
	logging: false,
	timeTravelQueries: false,
	entities: [Comment, Image, User]
});
