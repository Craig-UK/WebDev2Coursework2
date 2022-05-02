const userDao = require("../models/userModel.js");

exports.error400 = function (req, res) {
    res.render("errors/400", {
        title: "Error: 400"
    });
};

exports.error400LoggedIn = function (req, res) {
    res.render("errors/400", {
        title: "Error: 400",
        staff: "staff"
    });
};

exports.error401 = function (req, res) {
    res.render("errors/401", {
        title: "Error: 401"
    });
};

exports.error401LoggedIn = function (req, res) {
    res.render("errors/401", {
        title: "Error: 401",
        staff: "staff"
    });
};

exports.error403 = function (req, res) {
    res.render("errors/403", {
        title: "Error: 403"
    });
};

exports.error403LoggedIn = function (req, res) {
    res.render("errors/403", {
        title: "Error: 403",
        staff: "staff"
    });
};

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
