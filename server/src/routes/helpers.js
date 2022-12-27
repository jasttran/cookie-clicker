import Users from '../usersDB.js';
import cryto from 'crypto';
import dotenv from 'dotenv';
dotenv.config();


/**
 * If valid username, email and password is given, adds the new user to the DB.
 * Assumes moneyStatus >= 0.
 *
 * @param {string} username
 * @param {string} email
 * @param {string} password
 * @param {number} moneyStatus
 * 
 * @returns {error: string} on any conditions: 
 *      - username, email or password not given
 *      - email or username already registered
 * @returns {success: string} on success
 */
export async function register(username, emailAdd, password, moneyStatus) {
    if (!username || !emailAdd || !password) return { error: "username, email or password not given"};

    const duplicateEmail = await Users.findOne({ email: emailAdd }).exec();
    if (duplicateEmail) return { error: "email already exists "};

    const duplicateUsername = await Users.findOne({ username: username }).exec();
    if (duplicateUsername) return { error: "username already exists "};

    const res = await Users.create ({
        "username": username,
        "email": emailAdd,
        "password": getHash(password),
        "moneyStatus": moneyStatus,
    });

    return { success: "You have Successfully Registered!" }
}


/**
 * If email/username and matching password is given, loads the saved money status
 *
 * @param {string} emailOrUsername
 * @param {string} password
 * 
 * Returns {error: string} on any conditions: 
 *      - no email/username or password given
 *      - email/username not registered
 *      - email/username registered but incorrect password
 * Returns { foundUser: foundUser } on success
 */
export async function login(emailOrUsername, password) {
    if (!emailOrUsername || !password) return { error: "email/username or password not given"};

    const foundUser = await Users.findOne({ email: emailOrUsername }).exec() || await Users.findOne({ username: emailOrUsername }).exec();

    if (!foundUser) return { error: "email/username not registered"};
    if (foundUser.password !== getHash(password)) return { error: "incorrect password" };

    return { foundUser: foundUser }

}

/**
 * Creates a hash of given string
 * @param   {string} plaintext 
 * @returns {string} hashed plaintext
 */
function getHash(plaintext) {
    return cryto.createHash('sha256').update(plaintext).digest('hex')
}