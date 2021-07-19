const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const statesData = require("./api/routes/statesData");
const mongoose = require("mongoose");


app.use(express.json());
app.use(cors());

app.use("/", statesData);

const port =  8080;
app.listen(port, () => {
  const url = `localhost:${port}`;
  console.log(`SERVER IS STARTED VISIT AT ${url}`);
});
