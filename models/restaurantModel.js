const nedb = require('nedb');
const fs = require('fs');

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
            menu: "Lunch",
            price: "3.50",
            description: "Delicious French Toast served with Maple Syrup",
            chefSpecial: true
        });
        this.db.insert({
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
            description: "Delicious French Toast served with Maple Syrup",
            chefSpecial: false
        });
        this.db.insert({
            name: "Test",
            ingredients: [
                "Egg",
                "Milk",
                "Whole Wheat Bread"
            ],
            allergyInfo: [
                "Milk",
                "Egg"
            ],
            dishType: "Main Course",
            image: "{imageURL}",
            menu: "Dinner",
            price: "3.50",
            description: "Delicious French Toast served with Maple Syrup",
            chefSpecial: false
        });
        return this;
    }

    getAllDinnerDishes() {
        return new Promise((resolve, reject) => {
            this.db.find({
                menu: "Dinner"
            }, function (err, dishes) {
                if (err) {
                    reject(err);
                } else {
                    resolve(dishes);
                    console.log('getAllDinnerDishes returns: ', dishes);
                }
            });
        });
    }

    getAllLunchDishes() {
        return new Promise((resolve, reject) => {
            this.db.find({
                menu: "Lunch"
            }, function (err, dishes) {
                if (err) {
                    reject(err);
                } else {
                    resolve(dishes);
                    console.log('getAllLunchDishes returns: ', dishes);
                }
            });
        });
    }

    getAllUnassignedDishes() {
        return new Promise((resolve, reject) => {
            this.db.find({
                menu: "Unassigned"
            }, function (err, dishes) {
                if (err) {
                    reject(err);
                } else {
                    resolve(dishes);
                    console.log('getAllUnassignedDishes returns: ', dishes);
                }
            });
        });
    }

    getChefSpecials() {
        return new Promise((resolve, reject) => {
            this.db.find({
                chefSpecial: true
            }, function (err, dishes) {
                if (err) {
                    reject(err);
                } else {
                    resolve(dishes);
                    console.log('Featured Dish is: ', dishes);
                }
            });
        });
    }

    addNewDish(name, ingredients, allergyInfo, dishType, image, menu, price, description, chefSpecial) {
        var entry = {
            name: name,
            ingredients: ingredients,
            allergyInfo: allergyInfo,
            dishType: dishType,
            image: image,
            menu: menu,
            price: price,
            description: description,
            chefSpecial: chefSpecial
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

    unassignDish(id, menu) {
        console.log("Unassigning dish.", id);
        this.db.update({
            '_id': id
        }, {
            $set: {
                'menu': menu,
            }
        }, {
            multi: false
        }, function (err, doc) {
            if (err) {
                console.log("Error unassigning dish.", id)
            } else {
                console.log("Dish successfully unassigned.", doc);
            }
        });
    }

    lunchDish(id, menu) {
        console.log("Moving dish to Lunch Menu.", id);
        this.db.update({
            '_id': id
        }, {
            $set: {
                'menu': menu,
            }
        }, {
            multi: false
        }, function (err, doc) {
            if (err) {
                console.log("Error moving dish to lunch.", id)
            } else {
                console.log("Dish successfully moved to lunch.", doc);
            }
        });
    }

    dinnerDish(id, menu) {
        console.log("Moving dish to Dinner Menu.", id);
        this.db.update({
            '_id': id
        }, {
            $set: {
                'menu': menu,
            }
        }, {
            multi: false
        }, function (err, doc) {
            if (err) {
                console.log("Error moving dish to dinner.", id)
            } else {
                console.log("Dish successfully moved to dinner.", doc);
            }
        });
    }

    editDish(id, name, ingredients, allergyInfo, dishType, image, menu, price, description, chefSpecial) {
        console.log("Started updating dish.", name);
        this.db.update({
            '_id': id
        }, {
            $set: {
                '_id': id,
                'name': name,
                'ingredients': ingredients,
                'allergyInfo': allergyInfo,
                'dishType': dishType,
                'image': image,
                'menu': menu,
                'price': price,
                'description': description,
                'chefSpecial': chefSpecial
            }
        }, {
            multi: false
        }, function (err, doc) {
            if (err) {
                console.log("Error updating dish.", name)
            } else {
                console.log("Dish successfully updated.", doc);
            }
        });
    }

    editDishPage(id) {
        return new Promise((resolve, reject) => {
            this.db.find({
                '_id': id
            }, function (err, dishes) {
                if (err) {
                    reject(err);
                } else {
                    resolve(dishes);
                    console.log('editDishPage returns: ', dishes);
                }
            });
        });
    }

    getSingleDish(id) {
        return new Promise((resolve, reject) => {
            this.db.find({
                '_id': id
            }, function (err, dishes) {
                if (err) {
                    reject(err);
                } else {
                    resolve(dishes);
                    console.log('getSingleDish returns: ', dishes);
                }
            });
        });
    }

    deleteDish(id) {
        console.log("Started deleting dish.", id);
        this.db.remove({
            '_id': id
        }, function (err, doc) {
            if (err) {
                console.log("Error deleting dish.", id)
            } else {
                console.log("Dish successfully deleted.", doc);
            }
        });
    }

}

module.exports = Restaurant;