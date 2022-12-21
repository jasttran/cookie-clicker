import express from 'express';
import { register, login } from './helpers.js';
import Users from '../usersDB.js';

const router = express.Router();


/**
 * Increments MoneyStatus attribute of the given user in the database by 1.
 * Assumes username is valid.
 * Arguments:
 *      username: String
 * 
 * Returns {error: string} on any conditions: 
 *      - username not given
 *      - username does not exist
 */
 router.put('/updateMoneyStatus', async (req, res) => {
    const { username } = req.body;
    if (!username) res.status(400).send({ error: "username not given"})

    Users.updateOne({username: username}, {$inc:{moneyStatus: 1}}).exec()

    res.status(200).send({ success: "incremented money status by 1" });
});

export default router;