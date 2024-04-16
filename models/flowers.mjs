import mongoose from "mongoose";

const flowerSchema = new mongoose.Schema({
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

const Flower = mongoose.model('Flower', flowerSchema);

export default Flower;