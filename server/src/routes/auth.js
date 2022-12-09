import express from 'express';
const router = express.Router();
import path from 'path';

const data = {
    users: [],
}


router.post('/register', (req, res) => {
    res.send('Hello World !');
});

router.post('/login', (req, res) => {
    res.send('Login World !');
});

const newUser = async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({'message': 'Username and password required'})
    }

    // check duplicate usernames
    const duplicate = usersDB.users.find(person => person.username === user);
    if (duplicate) return res.sendStatus(409);
}

export default router;