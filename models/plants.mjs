import mongoose from 'mongoose';

const plantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    readyToPick: Boolean
});

const Plant = mongoose.model('Plant', plantSchema);

export default Plant;