const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

mongoose.connect(process.env.mongo).then(() => {
  console.log("mongoose connected");
});
var app = express();
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3001"],
  })
);
app.use("/", require("./routes/api"));

app.listen(3003, () => {
  console.log("express sever listening on http://localhost:3003");
});
