const restaurantDAO = require("../models/restaurantModel");
const userDao = require("../models/userModel.js");

exports.error404 = function (req, res) {
    res.render("errors/404", {
        title: "Error: 404"
    });
};

exports.error404LoggedIn = function (req, res) {
    res.render("errors/404", {
        title: "Error: 404",
        staff: "staff"
    });
};

exports.error500 = function (req, res) {
    res.render("errors/500", {
        title: "Error: 500"
    });
};

exports.error500LoggedIn = function (req, res) {
    res.render("errors/500", {
        title: "Error: 500",
        staff: "staff"
    });
};
