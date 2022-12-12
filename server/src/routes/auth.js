import express from 'express';
import cryto from 'crypto';
import fsPromises from 'fs';
import path from 'path';
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
router.post('/register', (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ 'msg': "email or password not given"});

    const hash = cryto.createHash('sha256').update(password).digest('hex');
    res.send("hi");
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