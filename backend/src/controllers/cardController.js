import Card from "../models/cardModel.js";

/** @type {import("express").RequestHandler} */
export const getCard = async (req, res) => {
    const cards = await Card.find();
    res.status(200).json(cards);
}

/** @type {import("express").RequestHandler} */
export const createCard = async (req, res) => {
    try {
        const newCard = new Card(req.body);
        const savedCard = await newCard.save();

        res.status(200).json({ message: "Add Success", id: savedCard["_id"] });
    }
    catch (err) {
        if (err.name === "ValidationError") {
            res.status(400).json({ error: "Bad Request" });
        } else {
            res.status(500).json({ error: "Internal server error." });
        }
    }
}

/** @type {import("express").RequestHandler} */
export const editCard = async (req, res) => {
    try {
        const updated = await Card.findByIdAndUpdate(req.params.id, req.body);

        if (updated) {
            res.status(200).json({ message: "Update sucess" });
        }
        else {
            res.status(404).json({ error: "Not Found" });
        }
    }
    catch (err) {
        if (err.name == "CastError") {
            res.status(400).json({ error: "Bad Request" });
        }
        else {
            res.status(500).json({ error: "Internal server error." });
        }
    }
}

/** @type {import("express").RequestHandler} */
export const deleteCard = async (req, res) => {
    try {
        const deleted = await Card.findByIdAndDelete(req.params.id);

        if (deleted) {
            res.status(200).json({ message: "Delete Success" });
        }
        else {
            res.status(404).json({ error: "Not Found" });
        }
    }
    catch (err) {
        if (err.name === "CastError") {
            res.status(400).json({ error: "Bad Request" });
        }
        else {
            res.status(500).json({ error: "Internal server error." });
        }
    }
}