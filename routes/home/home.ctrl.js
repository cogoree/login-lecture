"use strict";

const home = (req, res) => {
    response.render("home/index");
};

const login = (req, res) => {
    response.render("home/login");
};

module.exports = {
    home,
    login,
};