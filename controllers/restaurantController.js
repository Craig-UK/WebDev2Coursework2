const restaurantDAO = require("../models/restaurantModel");
const userDao = require("../models/userModel.js");

const db = new restaurantDAO();
db.init();

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

exports.post_new_dish = function (req, res) {
    console.log("Processing new dish.");
    if (!req.body.name || !req.body.ingredients || !req.body.allergyInfo || !req.body.dishType || 
        !req.body.menu || !req.body.price || !req.body.description) {
        response.status(400).send("All fields are required.");
        return;
    }
    db.addNewDish(req.body.name, req.body.ingredients, req.body.allergyInfo, req.body.dishType, req.body.menu,
        req.body.price, req.body.description);
    res.redirect("/home");
}

/*
FUNCTIONS TO HANDLE LOGIN/LOGOUT FUNCTIONS
*/
exports.handle_login = function (req, res) {
    res.render("home", {
        title: "Restaurant - Home",
        staff: "staff"
    });
};

exports.logout = function (req, res) {
    res.clearCookie("jwt").status(200).redirect("/");
};