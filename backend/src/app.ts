import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import multer from 'multer';
import { ORIGIN } from './config.js';
import * as routes from './routes/index.js';

// Initializations
const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors({
	origin: ORIGIN,
	methods: 'GET, POST, PUT, DELETE, OPTIONS',
	allowedHeaders: 'Origin, Authorization, X-Requested-With, Content-Type, Accept',
	credentials: true
}));

// Uploads Directory
app.use(multer({ dest: 'uploads/temp' }).single('image'));

// Public Directory
app.use('/uploads', express.static('uploads'));

// Express Routes
app.use('/api/admin', routes.Admin);
app.use('/api/auth', routes.Auth);
app.use('/api/comment', routes.Comment);
app.use('/api/gallery', routes.Gallery);
app.use('/api/image', routes.Image);
app.use('/api/search', routes.Search);
app.use('/api/settings', routes.Settings);
app.use('/api/user', routes.User);

export default app;
