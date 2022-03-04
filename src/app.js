"use strict";

//모듈
const express = require("express");
const app = express();

//라우팅
const home = require("./routes/home/")

//App Setting
app.set("views", "./views");
app.set("view engine", "ejs");

app.use("/", home); // middleware 등록하는 method

module.exports = app;

