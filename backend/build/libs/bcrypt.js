import bcrypt from 'bcrypt';
export const encryptPassword = async (pass) => {
    const salt = await bcrypt.genSalt(10);
    const hashPass = await bcrypt.hash(pass, salt);
    return hashPass;
};
export const matchPassword = async (pass, savedPass) => {
    return await bcrypt.compare(pass, savedPass);
};
