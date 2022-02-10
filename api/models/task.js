import mongoose from 'mongoose';

let Task = new mongoose.Schema({
    title: String,
    owner: String,
    title: {
        type: String,
        required: [true, 'Oops! Title is required.'],
        unique: true
    },
    owner: {
        type: String,
        required: [true, 'Oops! Owner is required.']
    },
    done: Boolean
});

export default mongoose.model('Task', Task);
