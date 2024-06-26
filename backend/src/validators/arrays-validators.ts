import { body, query, ValidationChain } from 'express-validator';
import {
	isValidUsername,
	isValidEmail,
	confirmPassword,
	isRegisterUser,
	isCorrectPassword,
	isUndefinedImage,
	isValidExtension,
	isCorrectCurrentPassword,
	isValidTitle,
	isValidURL,
	limitLinks,
	isValidImageSize,
	isValidAvatarSize,
	existsRole,
	validPermissions,
	existsLink,
	existsForeignLink,
	isValidScore
} from './custom-validators.js';

export const Signup: ValidationChain[] = [
	body('username', 'Enter a valid username')
		.exists({ values: 'falsy' }).bail()
		.isString().bail()
		.isLength({ min: 3, max: 40 }).bail()
		.matches(/^[^/",]+$/).withMessage('Invalid character').bail()
		.custom(isValidUsername),
	body('email', 'Enter a valid e-mail')
		.exists({ values: 'falsy' }).bail()
		.isLength({ max: 100 }).bail()
		.normalizeEmail()
		.isEmail().bail()
		.custom(isValidEmail),
	body('password', 'Enter a valid password')
		.exists({ values: 'falsy' }).bail()
		.isString().bail()
		.isStrongPassword().withMessage('The password must contains at least a lowercase, a uppercase, a number and a special character').bail()
		.isLength({ max: 40 }).withMessage('Password must not haven\'t more than 40 characters'),
	body('confirmPassword')
		.custom(confirmPassword)
];

export const Signin: ValidationChain[] = [
	body('username', 'Enter a valid username')
		.exists({ values: 'falsy' }).bail()
		.isLength({ max: 40 }).bail()
		.custom(isRegisterUser),
	body('password', 'Enter a valid password')
		.exists({ values: 'falsy' }).bail()
		.isLength({ min: 8, max: 40 }).bail()
		.custom(isCorrectPassword)
];

export const Upload: ValidationChain[] = [
	body('image', 'Enter a valid image archive')
		.custom(isUndefinedImage).bail()
		.custom(isValidExtension).bail()
		.custom(isValidImageSize),
	body('title', 'Enter a valid title')
		.isString().bail()
		.isLength({ min: 3, max: 60 }).withMessage('The title must contain between 3 and 60 characters'),
	body('description', 'Enter a valid description')
		.isString().bail()
		.isLength({ max: 4200 }).withMessage('Have exceeded the max number of characters allowed')
];

export const ImageDescription: ValidationChain[] = [
	body('description', 'Enter a valid description')
		.isString().bail()
		.isLength({ max: 4200 }).withMessage('Have exceeded the max number of characters allowed')
];

export const Score: ValidationChain[] = [
	query('score')
		.exists({ values: 'falsy' }).bail()
		.isString().bail()
		.custom(isValidScore)
];

export const CommentEdit: ValidationChain[] = [
	body('comment', 'Enter a valid comment')
		.isString().bail()
		.isLength({ min: 1, max: 4200 }).withMessage('Have exceeded the max number of characters allowed')
];

export const Avatar: ValidationChain[] = [
	body('image', 'Enter a valid image archive')
		.custom(isUndefinedImage).bail()
		.custom(isValidExtension).bail()
		.custom(isValidAvatarSize)
];

export const UserDescription: ValidationChain[] = [
	body('description', 'Enter a valid description')
		.isString().bail()
		.isLength({ max: 8400 }).withMessage('Have exceeded the character limit')
];

export const Password: ValidationChain[] = [
	body('actPassword')
		.custom(isCorrectCurrentPassword),
	body('password', 'Enter a valid password')
		.exists({ values: 'falsy' }).bail()
		.isStrongPassword().withMessage('The password must contains at least a lowercase, a uppercase, a number and a special character').bail()
		.isLength({ max: 40 }).withMessage('Password must not haven\'t more than 40 characters'),
	body('confirmPassword')
		.custom(confirmPassword)
];

export const Link: ValidationChain[] = [
	body('title', 'Insert a valid title')
		.exists({ values: 'falsy' }).bail()
		.isString().bail()
		.isLength({ min: 1, max: 200 }).bail()
		.customSanitizer((value) => {
			value = value.toLowerCase();
			const firstLetter = value.at(0);
			return value.replace(firstLetter, firstLetter.toUpperCase());
		})
		.custom(isValidTitle),
	body('url', 'Insert a valid URL')
		.exists({ values: 'falsy' }).bail()
		.isURL().withMessage('Not is a URL').bail()
		.isLength({ max: 4000 }).bail()
		.toLowerCase()
		.custom(isValidURL).bail()
		.custom(limitLinks)
];

export const DeleteLink: ValidationChain[] = [
	body('title', 'The link you are trying to delete not exist')
		.exists({ values: 'falsy' }).bail()
		.isString().bail()
		.custom(existsLink)
];

export const DeleteForeignLink: ValidationChain[] = [
	body('title', 'The link you are trying to delete not exist')
		.exists({ values: 'falsy' }).bail()
		.isString().bail()
		.custom(existsForeignLink)
];

export const Role: ValidationChain[] = [
	body('role', 'Enter a valid role')
		.exists({ values: 'falsy' }).bail()
		.isString().bail()
		.custom(existsRole).bail()
		.custom(validPermissions).withMessage('You haven\'t the necessary permissions to do this operation')
];

export const Contact: ValidationChain[] = [
	body('subject', 'Enter a valid subject')
		.isString().bail()
		.isLength({ min: 5, max: 40 }).withMessage('Have exceeded the max number of characters allowed'),
	body('email', 'Enter a valid e-mail')
		.exists({ values: 'falsy' }).bail()
		.isLength({ max: 100 }).bail()
		.normalizeEmail()
		.isEmail(),
	body('message', 'Enter a valid message')
		.isString().bail()
		.isLength({ min: 5, max: 4200 }).withMessage('Have exceeded the max number of characters allowed')
];
