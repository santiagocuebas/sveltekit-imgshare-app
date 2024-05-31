import { DataSource } from 'typeorm';
import { DB_HOST, DB_PORT, DB_USER, DB_PASS, DB_DATABASE } from './config.js';
import { Comment, Image, User } from './models/index.js';

export const AppDatabase = new DataSource({
	type: 'postgres',
	host: DB_HOST,
	port: Number(DB_PORT),
	username: DB_USER,
	password: DB_PASS,
	database: DB_DATABASE,
	synchronize: false,
	logging: false,
	entities: [Comment, Image, User]
});
