const nedb = require('nedb');
const fs = require('fs');
const multer = require('multer');
const path = require('path');

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
            featured: true
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
            featured: false
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
            featured: false
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

    getFeaturedDish() {
        return new Promise((resolve, reject) => {
            this.db.find({
                featured: true
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

    // uploadImage(image) {
    //     const upload = multer({
    //         dest: path.join(__dirname, "../temp"),
    //     });
    //     console.log(__dirname, __filename);
    //     console.log(`Upload started for ${image}!`)
    //     upload.single("image"),
    //     console.log("Inside upload.single");
    //     (req, res) => {
    //         console.log("Started uploading image!");
    //         console.log("File Information: ");
    //         const tempPath = req.file.path;
    //         console.log("File Temporary Path: ", tempPath);
    //         const filename = req.file.originalname;
    //         console.log("Filename: ", filename);
    //         const targetPath = path.join(__dirname, "../public/images/" + filename);
    //         console.log("File Path: ", targetPath);
    //         if (path.extname(filename).toLowerCase() === ".jpg") {
    //             console.log("Extension of file: ", path.extname(filename));
    //             fs.rename(tempPath, targetPath, (err) => {
    //                 if (err) { 
    //                     console.log(err);
    //                     return res.status(500).contentType("text/plain").end("Something went wrong");
    //                 }
    //                 console.log("Image successfully uploaded! File information below.");
    //                 console.log("File Information: ");
    //                 console.log("File Temporary Path: ", tempPath);
    //                 console.log("Filename: ", filename);
    //                 console.log("File Path: ", targetPath);
    //                 console.log("Redirecting...");
    //                 res.status(200).render("home", {
    //                     images: filename,
    //                 });
    //             });
    //         } else {
    //             fs.unlink(tempPath, (err) => {
    //                 if (err) return handleError(err, res);
    //                 res
    //                     .status(403)
    //                     .contentType("text/plain")
    //                     .end("Only .jpg files are allowed!");
    //             });
    //         }
    //     }
    // }

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