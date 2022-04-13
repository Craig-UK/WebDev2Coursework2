const nedb = require('nedb');

class Restaurant {
    constructor(dbFilePath) {
        if (dbFilePath) {
            this.db = new nedb({
                filename: dbFilePath,
                autoload: true
            });
            console.log('Database connected to ' + dbFilePath);
        } else {
            this.db = new nedb();
        }
    }

    init() {
        this.db.insert({
            id: "1",
            name: "French Toast",
            ingredients: [
                "Egg",
                "Milk",
                "Whole Wheat Bread"
            ],
            allergyInfo: [
                "Milk",
                "Egg"
            ],
            dishType: "Starter",
            image: "{imageURL}",
            menu: "Lunch",
            price: "3.50",
            description: "Delicious French Toast served with Maple Syrup"
        });
        this.db.insert({
            id: "1",
            name: "Lasagna",
            ingredients: [
                "Egg",
                "Milk",
                "Whole Wheat Bread"
            ],
            allergyInfo: [
                "Milk",
                "Egg"
            ],
            dishType: "Starter",
            image: "{imageURL}",
            menu: "Dinner",
            price: "3.50",
            description: "Delicious French Toast served with Maple Syrup"
        });
        return this;
    }

    getAllDishes() {
        return new Promise((resolve, reject) => {
            this.db.find({}, function (err, dishes) {
                if (err) {
                    reject(err);
                } else {
                    resolve(dishes);
                }
                console.log("The database contains these dishes: ", dishes);
            });
        });
    }

    getDinnerDishes() {
        return new Promise((resolve, reject) => {
            this.db.find({
                menu: "Dinner"
            }, function (err, dishes) {
                if (err) {
                    reject(err);
                } else {
                    resolve(dishes);
                    console.log('getDinnerDishes returns: ', dishes);
                }
            });
        });
    }

    getLunchDishes() {
        return new Promise((resolve, reject) => {
            this.db.find({
                menu: "Lunch"
            }, function (err, dishes) {
                if (err) {
                    reject(err);
                } else {
                    resolve(dishes);
                    console.log('getLunchDishes returns: ', dishes);
                }
            });
        });
    }

    getSingleDish(menuId) {
        console.log("Model");
        return new Promise((resolve, reject) => {
            this.db.find({
                'name': menuId
            }, function (err, dishes) {
                console.log("In Single Dish in Model");
                console.log("Menu Item: ", menuId);
                if (err) {
                    reject(err);
                } else {
                    resolve(dishes);
                console.log('getSingleDish returns: ', dishes);
                    console.log("IT RESOLVED");
                }
            })
        })
    }

    addNewDish(name, ingredients, allergyInfo, dishType, image, menu, price, description) {
        var entry = {
            name: name,
            ingredients: ingredients,
            allergyInfo: allergyInfo,
            dishType: dishType,
            image: image,
            menu: menu,
            price: price,
            description: description
        }
        console.log("Entry created successfully.");
        this.db.insert(entry, function (err, doc) {
            if (err) {
                console.log("Error inserting dish into the database.", name);
            } else {
                console.log("Dish successfully inserted into the database.", doc);
            }
        });
    }
}

module.exports = Restaurant;