const restaurantDAO = require("../models/restaurantModel");
const userDao = require("../models/userModel.js");
const fs = require('fs');
const multer = require('multer');
const path = require('path');

const db = new restaurantDAO('dish.db');
// db.init();

const imageDirPath = path.join(__dirname, "../public/images");

/* 
NOT LOGGED IN STAFF
*/
exports.homePage = function (req, res) {
    db.getChefSpecials()
      .then((chefSpecial) => {
        console.log("Featured dish: ", chefSpecial);
        res.render("home", {
            title: "Restaurant - Home",
            chefSpecial: chefSpecial
        });
      })
      .catch((err) => {
        console.log("Error: ");
        console.log(JSON.stringify(err));
    });
};

exports.aboutPage = function (req, res) {
    res.render("about", {
        title: "Restaurant - About"
    });
};

exports.dinnerMenu = function (req, res) {
    let files = fs.readdirSync(imageDirPath);
    db.db.find({'menu':'Dinner'}, function(err,dish) {
        const types = {
            starter: [],
            main: [],
            dessert: [],
            coldDrink: [],
            warmDrink: []
        }
        if (err) {
            console.log(err);
        } else {
            dish.forEach(function(dish) {
                if(dish.dishType === 'Starter') {
                    console.log("Starters: ", dish);
                    return types.starter.push(dish)
                } else if(dish.dishType === 'Main Course') {
                    console.log("Main Courses: ", dish);
                    return types.main.push(dish);
                } else if(dish.dishType === 'Dessert') {
                    console.log("Desserts: ", dish);
                    return types.dessert.push(dish);
                } else if(dish.dishType === 'Cold Drink') {
                    console.log("Cold Drinks: ", dish);
                    return types.coldDrink.push(dish);
                } else if(dish.dishType === 'Warm Drink') {
                    console.log("Warm Drinks: ", dish);
                    return types.warmDrink.push(dish);
                }
            });
            res.render('dinnerMenu', {
                title: "Restaurant - Dinner Menu",
                types: types,
                images: files
            });
        }
    });
};

exports.getSingleDish = function (req, res) {
    let files = fs.readdirSync(imageDirPath);
    let dish = req.params._id;
    db.getSingleDish(dish)
        .then((dishes) => {
            console.log("Processing", dish);
            res.render("singleDish", {
                title: "Restaurant - Dish Details",
                dish: "dish",
                dishes: dishes,
                images: files
            });
        })
        .catch((err) => {
            console.log("Error: ");
            console.log(JSON.stringify(err));
        });
};

exports.lunchMenu = function (req, res) {
    let files = fs.readdirSync(imageDirPath);
    db.db.find({'menu':'Lunch'}, function(err,dish) {
        const types = {
            starter: [],
            main: [],
            dessert: [],
            coldDrink: [],
            warmDrink: []
        }
        if (err) {
            console.log(err);
        } else {
            dish.forEach(function(dish) {
                if(dish.dishType === 'Starter') {
                    console.log("Starters: ", dish);
                    return types.starter.push(dish)
                } else if(dish.dishType === 'Main Course') {
                    console.log("Main Courses: ", dish);
                    return types.main.push(dish);
                } else if(dish.dishType === 'Dessert') {
                    console.log("Desserts: ", dish);
                    return types.dessert.push(dish);
                } else if(dish.dishType === 'Cold Drink') {
                    console.log("Cold Drinks: ", dish);
                    return types.coldDrink.push(dish);
                } else if(dish.dishType === 'Warm Drink') {
                    console.log("Warm Drinks: ", dish);
                    return types.warmDrink.push(dish);
                }
            });
            res.render('lunchMenu', {
                title: "Restaurant - Lunch Menu",
                types: types,
                images: files
            });
        }
    });
};

/*
LOGGED IN STAFF
*/
exports.homePageLoggedIn = function (req, res) {
    db.getChefSpecials()
      .then((chefSpecial) => {
        console.log("Featured dish: ", chefSpecial);
        res.render("home", {
            title: "Restaurant - Home",
            chefSpecial: chefSpecial,
            staff: "staff"
        });
      })
      .catch((err) => {
        console.log("Error: ");
        console.log(JSON.stringify(err));
    });
};

exports.aboutPageLoggedIn = function (req, res) {
    res.render("about", {
        title: "Restaurant - About",
        staff: "staff"
    });
};

exports.getSingleDishLoggedIn = function (req, res) {
    let files = fs.readdirSync(imageDirPath);
    let dish = req.params._id;
    db.getSingleDish(dish)
        .then((dishes) => {
            console.log("Processing", dish);
            res.render("singleDish", {
                title: "Restaurant - Dish Details",
                dish: "dish",
                dishes: dishes,
                staff: "staff",
                images: files
            });
        })
        .catch((err) => {
            console.log("Error: ");
            console.log(JSON.stringify(err));
        });
};

exports.dinnerMenuLoggedIn = function (req, res) {
    let files = fs.readdirSync(imageDirPath);
    db.db.find({'menu':'Dinner'}, function(err,dish) {
        const types = {
            starter: [],
            main: [],
            dessert: [],
            coldDrink: [],
            warmDrink: []
        }
        if (err) {
            console.log(err);
        } else {
            dish.forEach(function(dish) {
                if(dish.dishType === 'Starter') {
                    console.log("Starters: ", dish);
                    return types.starter.push(dish)
                } else if(dish.dishType === 'Main Course') {
                    console.log("Main Courses: ", dish);
                    return types.main.push(dish);
                } else if(dish.dishType === 'Dessert') {
                    console.log("Desserts: ", dish);
                    return types.dessert.push(dish);
                } else if(dish.dishType === 'Cold Drink') {
                    console.log("Cold Drinks: ", dish);
                    return types.coldDrink.push(dish);
                } else if(dish.dishType === 'Warm Drink') {
                    console.log("Warm Drinks: ", dish);
                    return types.warmDrink.push(dish);
                }
            });
            res.render('dinnerMenu', {
                title: "Restaurant - Dinner Menu",
                types: types,
                staff: "staff",
                images: files
            });
        }
    });
};

exports.lunchMenuLoggedIn = function (req, res) {
    let files = fs.readdirSync(imageDirPath);
    db.db.find({'menu':'Lunch'}, function(err,dish) {
        const types = {
            starter: [],
            main: [],
            dessert: [],
            coldDrink: [],
            warmDrink: []
        }
        if (err) {
            console.log(err);
        } else {
            dish.forEach(function(dish) {
                if(dish.dishType === 'Starter') {
                    console.log("Starters: ", dish);
                    return types.starter.push(dish)
                } else if(dish.dishType === 'Main Course') {
                    console.log("Main Courses: ", dish);
                    return types.main.push(dish);
                } else if(dish.dishType === 'Dessert') {
                    console.log("Desserts: ", dish);
                    return types.dessert.push(dish);
                } else if(dish.dishType === 'Cold Drink') {
                    console.log("Cold Drinks: ", dish);
                    return types.coldDrink.push(dish);
                } else if(dish.dishType === 'Warm Drink') {
                    console.log("Warm Drinks: ", dish);
                    return types.warmDrink.push(dish);
                }
            });
            res.render('lunchMenu', {
                title: "Restaurant - Lunch Menu",
                types: types,
                staff: "staff",
                images: files
            });
        }
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
            res.render("staff/editLunch", {
                title: "Restaurant - Lunch Menu",
                dishes: dishes,
                staff: "staff"
            });
            console.log("Returned in editLunch ", dishes)
        })
        .catch((err) => {
            console.log("An Error Occurred: ");
            console.log(JSON.stringify(err));
        });
}

exports.editDish = function (req, res) {
    let dish = req.params._id;
    db.editDishPage(dish)
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


const upload = multer({
    dest: path.join(__dirname, "../temp"),
});

exports.post_new_dish = function (req, res) {
    console.log("Processing new dish.");

    let chefSpecial = req.body['chefSpecial'];
    if(chefSpecial) {
        chefSpecial = true;
    } else {
        chefSpecial = false;
    }

    console.log("Name: ", req.body.name)
    console.log("Ingredients: ", req.body.ingredients)
    console.log("Allergy: ", req.body.allergyInfo)
    console.log("Type: ", req.body.dishType)
    console.log("Image: ", req.file)
    console.log("Menu: ", req.body.menu)
    console.log("Price: ", req.body.price)
    console.log("Description: ", req.body.description)
    console.log("Chef Special?: ", chefSpecial)

    if (!req.body.name || !req.body.ingredients || !req.body.allergyInfo || !req.body.dishType ||
        !req.file || !req.body.menu || !req.body.price || !req.body.description) {
        res.status(400).render("errors/400", {
            title: "Error: 400",
            content: "All fields are Required!"
        });
        return;
    }

    db.addNewDish(req.body.name, req.body.ingredients, req.body.allergyInfo, req.body.dishType, req.file.originalname,
                            req.body.menu, req.body.price, req.body.description, chefSpecial);

    res.redirect("/home");
}

exports.post_edit_dish = function (req, res) {
    console.log("Processing edit dish.");
    
    let id = req.params._id;

    let chefSpecial = req.body['chefSpecial'];
    if(chefSpecial) {
        chefSpecial = true;
    } else {
        chefSpecial = false;
    }

    console.log("Name: ", req.body.name)
    console.log("Ingredients: ", req.body.ingredients)
    console.log("Allergy: ", req.body.allergyInfo)
    console.log("Type: ", req.body.dishType)
    // console.log("Image: ", req.file)
    console.log("Menu: ", req.body.menu)
    console.log("Price: ", req.body.price)
    console.log("Description: ", req.body.description)
    console.log("Chef Special?: ", chefSpecial)
    
    if (!req.body.name || !req.body.ingredients || !req.body.allergyInfo || !req.body.dishType ||
        !req.body.output || !req.body.menu || !req.body.price || !req.body.description) {
            res.status(400).render("errors/400", {
                title: "Error: 400",
                content: "All fields are Required!"
            });
        return;
    }
    
    if (req.file) {
        console.log("Image Detected! Uploading: ", req.file);
        db.editDish(id, req.body.name, req.body.ingredients, req.body.allergyInfo, req.body.dishType, req.file.originalname,
            req.body.menu, req.body.price, req.body.description, chefSpecial);
    } else {
        console.log("No Image Detected! Updating dish: ", req.body.name);
        db.editDish(id, req.body.name, req.body.ingredients, req.body.allergyInfo, req.body.dishType, req.body.output,
            req.body.menu, req.body.price, req.body.description, chefSpecial);
    }

    res.redirect("/home");
}

exports.deleteDish = function (req, res) {
    let id = req.params._id;
    db.deleteDish(id);
    res.redirect("/home")
}
