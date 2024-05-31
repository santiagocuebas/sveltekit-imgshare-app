import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import multer from 'multer';
import { cloudinaryConfig } from './cloudinary.js';
import { ORIGIN } from './config.js';
import * as routes from './routes/index.js';

// Initializations
const app = express();
const storage = multer.memoryStorage();

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({
	origin: ORIGIN,
	methods: ['GET', 'HEAD', 'POST', 'PUT', 'PATCH', 'DELETE'],
	allowedHeaders: ['origin', 'authorization', 'x-requested-with', 'content-type', 'accept'],
	credentials: true
}));
app.use('*', cloudinaryConfig);

// Uploads Directory
app.use(multer({ storage }).single('image'));

// Express Routes
app.use('/api/admin', routes.Admin);
app.use('/api/auth', routes.Auth);
app.use('/api/contact', routes.Contact);
app.use('/api/comment', routes.Comment);
app.use('/api/gallery', routes.Gallery);
app.use('/api/image', routes.Image);
app.use('/api/settings', routes.Settings);
app.use('/api/user', routes.User);

export default app;
