const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));

const routes = require("./routes/routes");

const cors = require("cors");
const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use("/api/v1", routes);

module.exports = app;
