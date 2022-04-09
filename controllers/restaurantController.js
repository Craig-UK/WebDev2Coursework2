const restaurantDAO = require("../models/restaurantModel");
const userDao = require("../models/userModel.js");

const db = new restaurantDAO();

exports.homePage = function (req, res) {
    res.render("home", {
        title: "Restaurant - Home"
    });
};

exports.aboutPage = function (req, res) {
    res.render("about", {
        title: "Restaurant - About"
    });
};

exports.dinnerMenu = function (req, res) {
    res.render("dinnerMenu", {
        title: "Restaurant - Dinner Menu"
    });
};

exports.lunchMenu = function (req, res) {
    res.render("LunchMenu", {
        title: "Restaurant - Lunch Menu"
    });
};

exports.loginPage = function (req, res) {
    res.render("staff/login", {
        title: "Restaurant - Staff Login"
    });
};

exports.handle_login = function (req, res) {
    res.render("home", {
        title: "Restaurant - Home",
        staff: "staff"
    });
};

exports.logout = function (req, res) {
    res.clearCookie("jwt").status(200).redirect("/");
};