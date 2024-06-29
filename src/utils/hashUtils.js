// import bcrypt from 'bcryptjs'
// const SALT_ROUNDS=10;
import md5 from 'md5';

export const hashPassword = async (password) => {
    // const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
    const hashedPassword = md5(password);
    return hashedPassword;
    // return password;
}
  