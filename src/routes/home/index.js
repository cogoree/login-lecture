"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.home);      //Root에서 수행해야하는 작업
router.get("/login", ctrl.login);

module.exports = router;