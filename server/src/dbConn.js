import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URI), {
            useUnifiedTopology: true,
            useNewUrlParser: true
        }
    } catch(err) {
        console.log("******************");
        console.log(process.env.DB_URI);
        console.log(err);
    }
}

export default connectDB;