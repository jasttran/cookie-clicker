import express from 'express';
import { register, login } from './helpers.js'

const router = express.Router();

/**
 * Registers a new user with given email and password.
 * Arguments:
 *      username: String,
 *      email: String,
 *      password: String,
 *      moneyStatus: Integer,
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
 * Otherwise, does nothing.
 * Arguments:
 *      emailOrUsername: String,
 *      password: String
 * Returns:
 *      success: String,
 *      username: String
*/
router.post('/login', async (req, res) => {
    const result = await login(req.body.emailOrUsername, req.body.password);

    if (result.error !== undefined) {
        console.log(result.error);
        res.status(400).send({ error: result.error });
    } else {
        console.log("success money status: " + result.success);
        res.status(200).send({ success: result.success, username: result.username });
    }
})

export default router;