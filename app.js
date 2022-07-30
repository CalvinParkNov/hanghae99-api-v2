const express = require("express");
const app = express();
require("dotenv").config({});
const boardRouter = require("./routes/board");
//root for main page
app.get("/", boardRouter);
const port = process.env.PORT || 5000;

const start = async () => {
  try {
    app.listen(port, console.log(`Server is listening port ${port}....`));
  } catch (error) {
    console.log(error);
  }
};

start();
