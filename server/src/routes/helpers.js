import Users from '../usersDB.js';
import cryto from 'crypto';

/**
 * If valid username and password is given, adds the new user to the DB.
 * Assumes moneyStatus >= 0.
 *
 * @param {string} username
 * @param {string} password
 * @param {number} moneyStatus
 * 
 * Returns {error: string} on any conditions: 
 *      - email or password not given
 *      - email already registered
 * Returns {} on success
 */
export async function register(emailAdd, password, moneyStatus) {
    if (!emailAdd || !password) return { error: "email or password not given"};

    const duplicate = await Users.findOne({ email: emailAdd }).exec();
    if (duplicate) return { error: "email already exists "};

    const res = await Users.create ({
        "email": emailAdd,
        "password": cryto.createHash('sha256').update(password).digest('hex'),
        "moneyStatus": moneyStatus,
    });

    return { success: "New User created" }

}