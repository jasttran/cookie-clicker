import express from 'express';
import { register, login } from './helpers.js';
import Users from '../usersDB.js';

const router = express.Router();


/**
 * Increments MoneyStatus attribute of the given user in the database by 1.
 * Assumes username is valid.
 * Arguments:
 *      username: String
 */
 router.put('/updateMoneyStatus', async (req, res) => {
    /*const { username } = req.body;
    const duplicateEmail = await Users.updateOne({ username: emailAdd }).exec();

    if (result.error !== undefined) {
        console.log(result.error);
        res.status(400).send({ error: result.error });
    } else {
        console.log(result.success);
        res.status(200).send({ success: result.success });
    }*/
});

export default router;