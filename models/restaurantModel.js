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
            menu: "Lunch",
            price: "3.50",
            description: "Delicious French Toast served with Maple Syrup"
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
            description: "Delicious French Toast served with Maple Syrup"
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
            description: "Delicious French Toast served with Maple Syrup"
        });
        return this;
    }

    // getStarterDinnerDishes() {
    //     return new Promise((resolve, reject) => {
    //         this.db.find({
    //             dishType: "Starter",
    //             menu: "Dinner"
    //         }, function (err, dishes) {
    //             if (err) {
    //                 reject(err);
    //             } else {
    //                 resolve(dishes);
    //             }
    //             console.log("The database contains these dishes: ", dishes);
    //         });
    //     });
    // }

    // getDinnerDishes(dishType) {
    //     return new Promise((resolve, reject) => {
    //         this.db.find({
    //             menu: "Dinner",
    //             'dishType': dishType
    //         }, function (err, dishes) {
    //             if (err) {
    //                 reject(err);
    //             } else {
    //                 resolve(dishes);
    //                 console.log('getDinnerDishes returns: ', dishes);
    //             }
    //         });
    //     });
    // }

    // getDinnerDishes(dishType) {
    //     var dish = {
    //         dishType: dishType
    //     }
    //     console.log("Dish", dish);
    //     if(dish.dishType == "Starter") {
    //         return new Promise((resolve, reject) => {
    //             this.db.find({
    //                 menu: "Dinner",
    //                 dishType: "Starter"
    //             }, function(err, starter) {
    //                 if(err) {
    //                     reject(err);
    //                 } else {
    //                     resolve(starter);
    //                     console.log("Starters returned: ", starter);
    //                 }
    //             })
    //         })
    //     }

    //     if(dish.dishType == "Main Course") {
    //         return new Promise((resolve, reject) => {
    //             this.db.find({
    //                 menu: "Dinner",
    //                 dishType: "Main Course"
    //             }, function(err, main) {
    //                 if(err) {
    //                     reject(err);
    //                 } else {
    //                     resolve(main);
    //                     console.log("Starters returned: ", main);
    //                 }
    //             })
    //         })
    //     }
    // }

    getDinnerDishes() {
        return new Promise((resolve, reject) => {
            // this.db.find({
            //     menu: "Dinner",
            // }, function (err, dishes) {
            //     if (err) {
            //         reject(err);
            //     } else {
            //         resolve(dishes);
            //         console.log('getDinnerDishes returns: ', dishes);
            //     }
            // });

            this.db.find({
                menu: "Dinner",
                dishType: "Starter"
            }, function (err, starter) {
                if (err) {
                    reject(err);
                } else {
                    resolve(starter);
                    console.log('Starter', starter);
                }
            });

            this.db.find({
                menu: "Dinner",
                dishType: "Main Course"
            }, function (err, main) {
                if (err) {
                    reject(err);
                } else {
                    resolve(main);
                    console.log('Main Course', main);
                }
            });

            //  this.db.find(dishes => {
            //      const dinner = {
            //          starter: { dishes: [] }
            //      }
            // }, function (err, dish) {
            //     dishes.forEach(dish => {
            //         if(dish.dishType === "Starter") {
            //             dinner.starter.dishes.push(dish);
            //         }
            //     });
            // });

            
        });
    }

    // getDinnerDishes() {
    //     return new Promise((resolve, reject) => {
    //         this.db.find({
    //             menu: "Dinner",
    //             dishType: "Starter"
    //         }, function (err, starter) {
    //             if (err) {
    //                 reject(err);
    //             } else {
    //                 resolve(starter);
    //                 console.log('getDinnerDishes returns: ', starter);
    //             }
    //         });
    //     });
    // }

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

    getLunchDishes() {
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

    editDish(name, ingredients, allergyInfo, dishType, image, menu, price, description) {
        console.log("Started updating dish.", name);
        this.db.update({
            'name': name
        }, {
            $set: {
                'name': name,
                'ingredients': ingredients,
                'allergyInfo': allergyInfo,
                'dishType': dishType,
                'image': image,
                'menu': menu,
                'price': price,
                'description': description
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

    editDishPage(menuName) {
        return new Promise((resolve, reject) => {
            this.db.find({
                'name': menuName
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

    getSingleDish(menuName) {
        return new Promise((resolve, reject) => {
            this.db.find({
                'name': menuName
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