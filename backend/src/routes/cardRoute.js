import express from "express";
import * as cardController from "../controllers/cardController.js";

const router = express.Router();


router.get("/", cardController.getCard);
router.post("/", cardController.createCard);
router.put("/:id", cardController.editCard);
router.delete("/:id", cardController.deleteCard);

export default router;