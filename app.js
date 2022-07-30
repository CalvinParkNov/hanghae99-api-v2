const express = require("express");
const app = express();
require("dotenv").config({});
//root for main page
app.get("/", (req, res) => {
  res.send("welcome to this blah blah blah calvin");
});

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    app.listen(port, console.log(`Server is listening port ${port}....`));
  } catch (error) {
    console.log(error);
  }
};

start();
