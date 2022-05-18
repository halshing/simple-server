import express from "express";
import { urlencoded, json } from "body-parser";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import api from "./api";

dotenv.config();

// server
const app = express();
const port = process.env.PORT || 3000;

// middleware
app.use(cors());
app.use(morgan("dev"));
app.use(urlencoded({ extended: false }));
app.use(json());

// routes
app.use("/api", api);

// start up server
app.listen(port, () => {
  console.log(`Server is up! http://localhost:${port}`);
});
