import { body } from 'express-validator';
import { isValidUsername, isValidEmail, confirmPassword, isRegisterUser, isCorrectPassword, isUndefinedImage, isValidExtension, isCorrectCurrentPassword, isValidTitle, isValidURL, limitLinks, isValidImageSize, isValidAvatarSize } from './customValidators.js';
export const Signup = [
    body('username', 'Enter a valid username')
        .exists({ checkFalsy: true }).bail()
        .isString().bail()
        .isLength({ min: 5, max: 40 }).bail()
        .matches(/^[^/",]+$/).withMessage('Invalid character').bail()
        .custom(isValidUsername),
    body('email', 'Enter a valid e-mail')
        .exists({ checkFalsy: true }).bail()
        .isLength({ max: 100 }).bail()
        .normalizeEmail()
        .isEmail().bail()
        .custom(isValidEmail),
    body('password', 'Enter a valid password')
        .exists({ checkFalsy: true }).bail()
        .isString().bail()
        .matches(/[0-9]/).withMessage('Password must contain a number').bail()
        .isLength({ min: 5, max: 40 }).withMessage('Password must contain at least 5 characters'),
    body('confirmPassword')
        .custom(confirmPassword)
];
export const Signin = [
    body('username', 'Enter a valid username')
        .exists({ checkFalsy: true }).bail()
        .isLength({ max: 40 }).bail()
        .custom(isRegisterUser),
    body('password', 'Enter a valid password')
        .exists({ checkFalsy: true }).bail()
        .isLength({ min: 5, max: 40 }).bail()
        .custom(isCorrectPassword)
];
export const Upload = [
    body('image', 'Enter a valid image archive')
        .custom(isUndefinedImage).bail()
        .custom(isValidExtension).bail()
        .custom(isValidImageSize),
    body('title', 'Enter a valid title')
        .isString().bail()
        .isLength({ min: 5, max: 60 }).withMessage('The title must contain between 5 and 60 characters'),
    body('description', 'Enter a valid description')
        .isString().bail()
        .isLength({ max: 4200 }).withMessage('Have exceeded the max number of characters allowed')
];
export const Avatar = [
    body('image', 'Enter a valid image archive')
        .custom(isUndefinedImage).bail()
        .custom(isValidExtension).bail()
        .custom(isValidAvatarSize)
];
export const Password = [
    body('actPassword')
        .custom(isCorrectCurrentPassword),
    body('password', 'Enter a valid password')
        .exists({ checkFalsy: true }).bail()
        .matches(/[0-9]/).withMessage('Password must contain a number').bail()
        .isLength({ min: 5, max: 255 }).withMessage('Password must contain at least 5 characters'),
    body('confirmPassword')
        .custom(confirmPassword)
];
export const Link = [
    body('title', 'Insert a valid title')
        .exists({ checkFalsy: true }).bail()
        .customSanitizer((value) => {
        value = value.toLowerCase();
        const firstLetter = value.at(0);
        return value.replace(firstLetter, firstLetter.toUpperCase());
    })
        .custom(isValidTitle),
    body('url', 'Insert a valid URL')
        .exists({ checkFalsy: true }).bail()
        .isURL().withMessage('Not is a URL').bail()
        .toLowerCase()
        .custom(isValidURL).bail()
        .custom(limitLinks)
];
