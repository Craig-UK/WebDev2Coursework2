const restaurantDAO = require("../models/restaurantModel");
const userDao = require("../models/userModel.js");

/*
FUNCTIONS TO HANDLE LOGIN/LOGOUT FUNCTIONS
*/
exports.handle_login = function (req, res) {
    res.redirect("/home")
};

exports.logout = function (req, res) {
    res.clearCookie("jwt").status(200).redirect("/");
};