import express from 'express';
import cors from 'cors';
import auth from './routes/auth.js'
const app = express();


app.use(cors()); // cross origin resource sharing
app.use(express.json()); // built-in middleware for json

// route any request coming for the /login to the router, instead of the 
// other routes below. require the router we have created
app.use('/auth', auth);

app.listen(5002, () => console.log('API is running on http://localhost:3000/login'));