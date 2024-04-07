import bcrypt from "bcrypt"

class PasswordManager {
    SALT_ROUNDS = 10;

    hashPassword(plainTextPassword: string) {
        const hashedPassword = bcrypt.hashSync(plainTextPassword, this.SALT_ROUNDS);
        return hashedPassword;
    }

    isHashSame(plainTextPassword: string, hashedPassword: string) {
        const isSame = bcrypt.compareSync(plainTextPassword, hashedPassword);
        return isSame;
    }
}

const passwordManager = new PasswordManager();
export default passwordManager;


