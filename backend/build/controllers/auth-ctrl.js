import { encryptPassword, getSerializedCookie } from '../libs/index.js';
import { User } from '../models/index.js';
export const postSignup = async (req, res) => {
    // Create a new user
    const user = await User.create({
        username: req.body.username,
        email: req.body.email,
        password: await encryptPassword(req.body.password),
        description: '',
        links: '[]'
    }).save();
    // Create a cookie of authentication
    const token = getSerializedCookie(user);
    res.set('Set-Cookie', token);
    return res.json({ url: '/' + user.username });
};
export const postSignin = async (req, res) => {
    // Find user by username or email
    const user = await User.findOne({
        where: [
            { username: req.body.username },
            { email: req.body.username }
        ]
    });
    // Create a cookie of authentication
    const token = getSerializedCookie(user);
    res.set('Set-Cookie', token);
    return res.json({ url: '/' + user.username });
};
