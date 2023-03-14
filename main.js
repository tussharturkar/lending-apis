import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import * as dotenv from 'dotenv';
import routes from "./routes/index.js"

const app = express();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/api/v1", routes);

dotenv.config()
const DATABASE_URL = process.env.DATABASE_URL;
const PORT = process.env.PORT || 8080;

mongoose.connect(DATABASE_URL)
    .then(() => app.listen(PORT, () => console.log(`Server is runnig on ${PORT}`)))
    .catch((error) => console.log(error));