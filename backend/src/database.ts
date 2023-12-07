import { DataSource } from 'typeorm';
import { DB_HOST, DB_PORT, DB_USER, DB_PASS, DB_DATABASE } from './config.js';
import { Comment, Image, User } from './models/index.js';

const DB_URL = `postgresql://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_DATABASE}?sslmode=verify-full`;

export const AppDatabase = new DataSource({
	type: 'cockroachdb',
	url: DB_URL,
	ssl: true,
	synchronize: false,
	logging: true,
	timeTravelQueries: false,
	entities: [Comment, Image, User]
});
