import mongoose from 'mongoose';

let Task = new mongoose.Schema({
<<<<<<< HEAD
    title: String,
    owner: String,
=======
    title: {
        type: String,
        required: [true, 'Oops! Title is required.'],
        unique: true
    },
    owner: {
        type: String,
        required: [true, 'Oops! Owner is required.']
    },
>>>>>>> a6c551d (primeiro commit)
    done: Boolean
});

export default mongoose.model('Task', Task);