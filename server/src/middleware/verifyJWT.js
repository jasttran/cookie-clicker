import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

/**
 * Used to protect routes by verifying if the user has a valid access token
 */
const verifyJWT = (req, res, next) => {
    // authHeader = "Bearer token"
    const authHeader = req.headers['authorization'];
    if (!authHeader) return res.sendStatus(401);
    const token = authHeader.split(' ')[1];
    jwt.verify(
        token,
        process.env.ACCESS_TOKEN_SECRET,
        (err, decoded) => {
            if (err) return res.sendStatus(403); //err means an invalid token
            req.username = decoded.username;
            next();
        }
    )
}

export default verifyJWT;