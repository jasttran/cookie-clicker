import express from 'express';
import { register, login } from './helpers.js'

const router = express.Router();

/**
 * Registers a new user with given email and password.
 * Arguments:
 *      email: String,
 *      password: String,
 *      moneyStatus: Integer,
 */
router.post('/register', async (req, res) => {
    const result = await register(req.body.email, req.body.password, req.body.moneyStatus);

    if (result.error !== undefined) {
        console.log(result.error);
        res.status(400).send({ error: result.error });
    } else {
        console.log(result.success);
        res.status(200).send({ success: result.success });
    }
});

/**
 * If matching login and password found, loads the current CookieClicker status.
 * Otherwise, does nothing.
 * Arguments:
 *      email: String,
 *      password: String
*/
router.post('/login', async (req, res) => {
    const result = await login(req.body.email, req.body.password);

    if (result.error !== undefined) {
        console.log(result.error);
        res.status(400).send({ error: result.error });
    } else {
        console.log(result.success);
        res.status(200).send({ success: result.success });
    }
})

export default router;