import express from 'express';
import { register, login } from './helpers.js'
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const router = express.Router();

/**
 * Registers a new user with given email and password.
 * Arguments:
 *      username: String,
 *      email: String,
 *      password: String,
 *      moneyStatus: Integer,
 * Returns on failure:
 *      error: String
 * Returns on success:
 *      success: String
 */
router.post('/register', async (req, res) => {
    const { username, email, password, moneyStatus } = req.body;
    const result = await register(username, email, password, moneyStatus);

    if (result.error !== undefined) {
        console.log(result.error);
        res.status(400).send({ error: result.error });
    } else {
        console.log(result.success);
        res.status(200).send({ success: result.success });
    }
});

/**
 * If matching email/username and password found, loads the current CookieClicker status.
 * Also, stores the refreshtoken in the found User and returns it in a httpOnly cookie.
 * Otherwise, does nothing.
 * Arguments:
 *      emailOrUsername: String,
 *      password: String
 * Returns on failure:
 *      error: String
 * Returns on success:
 *      accessToken: String,
 *      moneyStatus: String,
 *      username: String
 *      cookie: with a refreshToken
*/
router.post('/login', async (req, res) => {
    const result = await login(req.body.emailOrUsername, req.body.password);

    if (result.error !== undefined) {
        console.log(result.error);
        res.status(400).send({ error: result.error });
    } else {
        const foundUser = result.foundUser;
        const accessToken = jwt.sign(
            { "username": foundUser.username },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: '30s' }
        );
    
        const refreshToken = jwt.sign(
            { "username": foundUser.username },
            process.env.REFRESH_TOKEN_SECRET,
            { expiresIn: '1d' }
        );
        
        foundUser.refreshToken = refreshToken;
        const result2 = await foundUser.save()
    
        // name the cookie 'jwt', maxAge = 1 day.
        // send refresh cookie and access token to the User
        res.cookie('jwt', refreshToken, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000});
        res.json({ accessToken: accessToken, moneyStatus: foundUser.moneyStatus, username: foundUser.username })
        console.log("success money status: " + foundUser.moneyStatus);
    }
})

export default router;