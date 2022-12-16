import express from 'express';
import cors from 'cors';
import auth from './routes/auth.js';
import mongoose, { connect } from 'mongoose';
import connectDB from './dbConn.js';
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 5001;
const app = express();

connectDB(); // Connect to MongoDB

app.use(express.json()); // built-in middleware for json
app.use(cors()); // cross origin resource sharing

// route any request coming for the /login to the router, instead of the 
// other routes below. require the router we have created
app.use('/auth', auth);

app.listen(PORT, () => console.log(`API is running on http://localhost:${PORT}`));