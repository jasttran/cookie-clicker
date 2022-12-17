import express from 'express';
import { register } from './helpers.js'

const router = express.Router();

/*
< Registers a new user with given email and password. >

Arguments:
{
    email: String,
    password: String,
}

Return Value:
    Throws < 400 ERROR > on
        - email is already used
        - the length of email and password is not at least 1 character
    Returns < token >
*/
router.post('/register', async (req, res) => {
    const result = await register(req.body.email, req.body.password);

    if (result.error !== undefined) {
        console.log(result.error);
        res.status(400).send({ error: result.error });
    } else {
        console.log(result.success);
        res.status(200).send({ success: result.success });
    }
});

/*
< Finds matching login and password. If none found, does nothing. >
Assumptions:
    - email and password is not null
Arguments:
{
    email: String,
    password: String,
}
*/
router.post('/login', (req, res) => {
    const { email, password } = req.body;
    res.send();
})

export default router;