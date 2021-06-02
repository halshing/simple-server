// environment
require("dotenv").config();

// imports
const express = require("express");
const { urlencoded, json } = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");

// server
const app = express();
const port = process.env.PORT || 3000;

// middleware
app.use(cors());
app.use(morgan("tiny"));
app.use(urlencoded({ extended: false }));
app.use(json());

// routes
const api = require("./api");
app.use("/api", api);

// start up server
app.listen(port, () => {
  console.log(`Server is up! http://localhost:${port}`);
});
