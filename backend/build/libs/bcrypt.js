import bcrypt from 'bcrypt';
export const encryptPassword = async (pass) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(pass, salt);
};
export const matchPassword = async (pass, savedPass) => {
    return await bcrypt.compare(pass, savedPass);
};
