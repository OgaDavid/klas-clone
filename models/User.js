import mongoose from "mongoose";

const { ObjectId } = mongoose.Schema;

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: 'please enter '
    },
    email: {
        type: String,
        required: "Please enter your email address.",
        trim: true,
        unique: true,
    },
    password: {
        type: String,
        required: '"Please enter a password.',
    }
})