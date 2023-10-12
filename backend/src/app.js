import express from "express";
import cors from "cors";

import cardRoute from "./routes/cardRoute.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use("/cards", cardRoute);

export default app;