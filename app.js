const express = require("express");
const app = express();
require("dotenv").config({});
const boardRouter = require("./routes/board");
const account = require("./routes/account");
const port = process.env.PORT || 5000;
app.use(express.json());
//root for main page

app.use("/", boardRouter);
app.use("/account", account);

const start = async () => {
  try {
    app.listen(port, console.log(`Server is listening port ${port}....`));
  } catch (error) {
    console.log(error);
  }
};

start();
