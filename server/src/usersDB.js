import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const userSchema = new Schema({
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