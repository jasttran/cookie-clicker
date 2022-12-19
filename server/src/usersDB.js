import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
    },
    moneyStatus: {
        type: Number,
        required: true,
    },
    refreshToken: String
});

export default mongoose.model('Users', userSchema);