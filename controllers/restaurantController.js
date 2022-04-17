const restaurantDAO = require("../models/restaurantModel");
const userDao = require("../models/userModel.js");
// const puppeteer = require('puppeteer');
const jsdom = require("jsdom");
const {
    JSDOM
} = jsdom;
const {
    document
} = jsdom;
// var http = require('http');
const fs = require('fs');
// const cheerio = require('cheerio');

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
    // const dom = new JSDOM('dinnerMenu.mustache').window
    // let dishType = document.querySelector('#dishType');
    // console.log(dishType.html());
    // if (dishType == 'Starter') {
    //     dishType = 'Starter';
    //     console.log(dishType);
    // }
    // if (dishType == 'Main Course') {
    //     dishType = 'Main Course';
    // }
    // let dishType = req.body.dishType;
    // db.getDinnerDishes(dishType)
    //     .then((dishes) => {
    //         res.render("dinnerMenu", {
    //             title: "Restaurant - Dinner Menu",
    //             dishes: dishes,
    //         });
    //     })
    //     .catch((err) => {
    //         console.log("An Error Occurred: ");
    //         console.log(JSON.stringify(err));
    //     });
    // let dishType = {
    //     dishType: "Starter",
    //     dishType: "Main Course"
    // };
    let dishType = "Starter";
    // let dishType = "Main Course";
    db.getDinnerDishes(dishType)
        .then((starter) => {
            res.render("dinnerMenu", {
                title: "Restaurant - Dinner Menu",
                starter: starter,
            });
        })
        .catch((err) => {
            console.log("An Error Occurred: ");
            console.log(JSON.stringify(err));
        });
    // db.getDinnerDishes(dishType)
    //     .then((main) => {
    //         res.render("dinnerMenu", {
    //             title: "Restaurant - Dinner Menu",
    //             main: main,
    //         });
    //     })
    //     .catch((err) => {
    //         console.log("An Error Occurred: ");
    //         console.log(JSON.stringify(err));
    //     });
    // db.getDinnerDishes(dishType)
    //     .then((starter, main) => {
    //         res.render("dinnerMenu", {
    //             title: "Restaurant - Dinner Menu",
    //             starter: starter,
    //             main: main
    //         });
    //     })
    //     .catch((err) => {
    //         console.log("An Error Occurred: ");
    //         console.log(JSON.stringify(err));
    //     });
};

// exports.starterDinner = function (req, res) {
//     db.getStarterDinnerDishes()
//       .then((starter) => {
//         res.render("dinnerMenu", {
//             title: "Restaurant - Dinner Menu",
//             starter: starter,
//         });
//       })
//       .catch((err) => {
//         console.log("An Error Occurred: ");
//         console.log(JSON.stringify(err));
//     });
// }

exports.getSingleDish = function (req, res) {
    let dish = req.params.name;
    db.getSingleDish(dish)
        .then((dishes) => {
            console.log("Processing", dish);
            res.render("singleDish", {
                title: "Restaurant - Dish Details",
                dish: "dish",
                dishes: dishes,
            });
        })
        .catch((err) => {
            console.log("Error: ");
            console.log(JSON.stringify(err));
        });
};

exports.lunchMenu = function (req, res) {
    db.getLunchDishes()
        .then((dishes) => {
            res.render("LunchMenu", {
                title: "Restaurant - Lunch Menu",
                dishes: dishes,
            });
        })
        .catch((err) => {
            console.log("An Error Occurred: ");
            console.log(JSON.stringify(err));
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
    db.getDinnerDishes()
        .then((dishes) => {
            res.render("dinnerMenu", {
                title: "Restaurant - Dinner Menu",
                dishes: dishes,
                staff: "staff"
            });
        })
        .catch((err) => {
            console.log("An Error Occurred: ", err);
            console.log(JSON.stringify(err));
        });
};

exports.lunchMenuLoggedIn = function (req, res) {
    db.getLunchDishes()
        .then((dishes) => {
            res.render("LunchMenu", {
                title: "Restaurant - Lunch Menu",
                dishes: dishes,
                staff: "staff"
            });
        })
        .catch((err) => {
            console.log("An Error Occurred: ");
            console.log(JSON.stringify(err));
        });
};

exports.editDinner = function (req, res) {
    db.getAllDinnerDishes()
        .then((dishes) => {
            res.render("staff/editDinner", {
                title: "Restaurant - Lunch Menu",
                dishes: dishes,
                staff: "staff"
            });
            console.log("Returned in editDinner ", dishes)
        })
        .catch((err) => {
            console.log("An Error Occurred: ");
            console.log(JSON.stringify(err));
        });
}

exports.editLunch = function (req, res) {
    db.getAllLunchDishes()
        .then((dishes) => {
            res.render("staff/editDinner", {
                title: "Restaurant - Lunch Menu",
                dishes: dishes,
                staff: "staff"
            });
            console.log("Returned in editDinner ", dishes)
        })
        .catch((err) => {
            console.log("An Error Occurred: ");
            console.log(JSON.stringify(err));
        });
}

exports.editDish = function (req, res) {
    let dish = req.params.name;
    db.editDish(dish)
        .then((dishes) => {
            console.log("Processing", dish);
            res.render("staff/editDish", {
                title: "Restaurant - Dish Details",
                dish: "dish",
                staff: "staff",
                dishes: dishes,
            });
        })
        .catch((err) => {
            console.log("Error: ");
            console.log(JSON.stringify(err));
        });
};

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
        !req.body.image || !req.body.menu || !req.body.price || !req.body.description) {
        res.status(400).send("All fields are required.");
        return;
    }
    db.addNewDish(req.body.name, req.body.ingredients, req.body.allergyInfo, req.body.dishType, req.body.image,
        req.body.menu, req.body.price, req.body.description);
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