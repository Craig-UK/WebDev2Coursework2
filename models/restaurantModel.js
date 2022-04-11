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
            menu: "lunch",
            price: "3.50",
            description: "Delicious French Toast served with Maple Syrup"
        });
        return this;
    }

    getAllDishes() {
        return new Promise((resolve, reject) => {
            this.db.find({}, function(err, dishes) {
                if(err) {
                    reject(err);
                } else {
                    resolve(dishes);
                }
                console.log("The database contains these dishes: ", dishes);
            });
        });
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
        this.db.insert(entry, function(err, doc) {
            if(err) {
                console.log("Error inserting dish into the database.", name);
            } else {
                console.log("Dish successfully inserted into the database.", doc);
            }
        });
    }
}

module.exports = Restaurant;