const restaurantDAO = require("../models/restaurantModel");
const userDao = require("../models/userModel.js");

const db = new restaurantDAO();

/* 
NOT LOGGED IN STAFF
*/
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
    res.render("lunchMenu", {
        title: "Restaurant - Lunch Menu"
    });
};

/*
LOGGED IN STAFF
*/
exports.homePageLoggedIn = function (req, res) {
    res.render("home", {
        title: "Restaurant - Home",
        staff: "staff"
    });
};

exports.aboutPageLoggedIn = function (req, res) {
    res.render("about", {
        title: "Restaurant - About",
        staff: "staff"
    });
};

exports.dinnerMenuLoggedIn = function (req, res) {
    res.render("dinnerMenu", {
        title: "Restaurant - Dinner Menu",
        staff: "staff"
    });
};

exports.lunchMenuLoggedIn = function (req, res) {
    res.render("lunchMenu", {
        title: "Restaurant - Lunch Menu",
        staff: "staff"
    });
};

exports.editDinner = function (req, res) {
    res.render("staff/editDinner", {
        title: "Restaurant - Edit Dinner Menu",
        staff: "staff"
    });
}

exports.editLunch = function (req, res) {
    res.render("staff/editLunch", {
        title: "Restaurant - Edit Lunch Menu",
        staff: "staff"
    });
}

exports.addNewDish = function (req, res) {
    res.render("staff/addNewDish", {
        title: "Restaurant - Add New Dish",
        staff: "staff"
    });
}

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