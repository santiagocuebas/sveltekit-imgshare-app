import dotenv from 'dotenv';
dotenv.config();

export const PORT = process.env.PORT;

export const DB_HOST = process.env.DB_HOST;

export const DB_PORT = process.env.DB_PORT || 3306 as number;

export const DB_USER = process.env.DB_USER;

export const DB_PASS = process.env.DB_PASS;

export const DB_DATABASE = process.env.DB_DATABASE;

export const JWT = process.env.JWT as string;

export const ORIGIN = process.env.ORIGIN as string;
