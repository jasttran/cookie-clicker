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
 * Returns {success: string} on success
 */
export async function register(emailAdd, password, moneyStatus) {
    if (!emailAdd || !password) return { error: "email or password not given"};

    const duplicate = await Users.findOne({ email: emailAdd }).exec();
    if (duplicate) return { error: "email already exists "};

    const res = await Users.create ({
        "email": emailAdd,
        "password": getHash(password),
        "moneyStatus": moneyStatus,
    });

    return { success: "New User created" }

}


/**
 * If email and matching password is given, loads the saved money status
 *
 * @param {string} username
 * @param {string} password
 * 
 * Returns {error: string} on any conditions: 
 *      - no email or password given
 *      - email not registered
 *      - email registered but incorrect password
 * Returns {success: moneyStatus} on success
 */
 export async function login(emailAdd, password) {
    if (!emailAdd || !password) return { error: "email or password not given"};

    const foundEmail = await Users.findOne({ email: emailAdd }).exec();

    if (!foundEmail) return { error: "email not registered"};
    if (foundEmail.password !== getHash(password)) return { error: "password does not match" }

    return { success: foundEmail.moneyStatus }

}

function getHash(plaintext) {
    return cryto.createHash('sha256').update(plaintext).digest('hex')
}