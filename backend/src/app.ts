import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import multer from 'multer';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { ORIGIN } from './config.js';
import * as routes from './routes/index.js';

// Initializations
const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

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

// Uploads Directory
app.use(multer({ dest: join(__dirname, '../uploads/temp') }).single('image'));
app.use('/uploads', express.static(join(__dirname, '../uploads')));

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
