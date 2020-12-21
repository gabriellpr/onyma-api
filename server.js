const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

mongoose.connect(
  "mongodb+srv://gabriellpr:32614930@cluster0.vzwdr.mongodb.net/clinicas?retryWrites=true&w=majority/clinicas",
  {
    useNewUrlParser: true,
  }
);

requireDir("./src/models/");

const Product = mongoose.model("Product");

app.use("/api", require("./src/routes"));

app.listen(3001);
