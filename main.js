import express from "express";
import config from "./config.js"
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import routes from "./routes/index.js"
// import { errorHandler } from "./middlewares/headerHandler.js";
import { verify } from "./middlewares/headerHandler.js";
const app = express();
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use(verify);
// app.use(errorHandler);
app.use("/api", routes);
mongoose.connect(config.dbUrl)
    .then(() => app.listen(config.port, () => console.log(`Server is runnig on ${config.port}`)))
    .catch((error) => console.log(error));