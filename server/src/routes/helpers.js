import Users from '../usersDB.js';
import cryto from 'crypto';
import fsPromises from 'fs';
import path from 'path';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
fsPromises.promises;


/**
 * If valid username, email and password is given, adds the new user to the DB.
 * Assumes moneyStatus >= 0.
 *
 * @param {string} username
 * @param {string} email
 * @param {string} password
 * @param {number} moneyStatus
 * 
 * Returns {error: string} on any conditions: 
 *      - username, email or password not given
 *      - email or username already registered
 * Returns {success: string} on success
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

    return { success: "New User created" }

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
 * Returns {success: moneyStatus, username: String} on success
 */
 export async function login(emailOrUsername, password) {
    if (!emailOrUsername || !password) return { error: "email/username or password not given"};

    const foundEmail = await Users.findOne({ email: emailOrUsername }).exec();
    const foundUsername = await Users.findOne({ username: emailOrUsername }).exec();

    if (!foundEmail && !foundUsername) return { error: "email/username not registered"};

    if ((foundEmail && foundEmail.password !== getHash(password)) || 
        (foundUsername && foundUsername.password !== getHash(password)))
        return { error: "password does not match" }

    return foundEmail 
        ? { success: foundEmail.moneyStatus, username: foundEmail.username } 
        : { success: foundUsername.moneyStatus, username: foundUsername.username }
}

function getHash(plaintext) {
    return cryto.createHash('sha256').update(plaintext).digest('hex')
}