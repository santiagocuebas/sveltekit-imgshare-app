import dotenv from 'dotenv';
dotenv.config();

export const PORT = process.env.PORT ?? 4200;

export const JWT = process.env.JWT as string;

export const ORIGIN = process.env.ORIGIN as string;

export const CLOUDINARY_NAME = process.env.CLOUDINARY_NAME;

export const CLOUDINARY_KEY = process.env.CLOUDINARY_KEY;

export const CLOUDINARY_SECRET = process.env.CLOUDINARY_SECRET;

export const DB_URI = process.env.DB_URI;
