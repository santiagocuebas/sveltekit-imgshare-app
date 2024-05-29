import dotenv from 'dotenv';
dotenv.config();

export const PORT = process.env.PORT ?? 4200;

export const JWT = process.env.JWT as string;

export const ORIGIN = process.env.ORIGIN as string;

export const DB_HOST = process.env.DB_HOST;

export const DB_PORT = process.env.DB_PORT ?? 5432;

export const DB_USER = process.env.DB_USER;

export const DB_PASS = process.env.DB_PASS;

export const DB_DATABASE = process.env.DB_DATABASE;
