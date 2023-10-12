import mongoose from "mongoose";

const CardSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    question: {
        type: String,
        required: true
    },
    answer: {
        type: String,
        required: true
    },

})

const Card = mongoose.model("Card", CardSchema);
// console.log(Card.collection.name)

export default Card;