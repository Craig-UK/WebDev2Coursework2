const express = require('express');
const router = express.Router();
const pages = require('../controllers/pagesController');
const staff = require('../controllers/staffController')
const errController = require('../controllers/errorsController');
const fs = require('fs');
const multer = require('multer');
const path = require('path');


const {
    login,
    verify
} = require('../auth/auth');


const upload = multer({
    dest: path.join(__dirname, "../temp"),
});

router.get("/", pages.homePage);
router.get("/about", pages.aboutPage);
router.get("/dinner", pages.dinnerMenu);
router.get("/lunch", pages.lunchMenu);
router.get("/dish/:_id", pages.getSingleDish);

router.get("/login", pages.loginPage);
router.post("/login", login, staff.handle_login);

/*
LOGGED IN STAFF
*/
router.get("/home", verify, pages.homePageLoggedIn);
router.get("/aboutus", verify, pages.aboutPageLoggedIn);
router.get("/dinnermenu", verify, pages.dinnerMenuLoggedIn);
router.get("/lunchmenu", verify, pages.lunchMenuLoggedIn);
router.get("/dishdetails/:_id", verify, pages.getSingleDishLoggedIn);
router.get("/editdinner", verify, pages.editDinner);
router.get("/editlunch", verify, pages.editLunch);
router.get("/dish/edit/:_id", verify, pages.editDish);
router.post("/dish/edit/:_id", upload.single("image"),
    (req, res) => {
        if (req.file) {
            console.log("Image Detected!")
            console.log("Started uploading image!");
            console.log("File Information: ");
            const tempPath = req.file.path;
            console.log("File Temporary Path: ", tempPath);
            const filename = req.file.originalname;
            console.log("Filename: ", filename);
            const targetPath = path.join(__dirname, "../public/images/" + filename);
            console.log("File Path: ", targetPath);
            if (path.extname(filename).toLowerCase() === ".jpg") {
                console.log("Extension of file: ", path.extname(filename));
                fs.rename(tempPath, targetPath, (err) => {
                    if (err) {
                        console.log(err);
                        return res.status(500).redirect("/500");
                    }
                    console.log("Image successfully uploaded! File information below.");
                    console.log("File Information: ");
                    console.log("File Temporary Path: ", tempPath);
                    console.log("Filename: ", filename);
                    console.log("File Path: ", targetPath);
                    console.log("Redirecting...");
                    pages.post_edit_dish(req, res);
                });
            } else {
                fs.unlink(tempPath, (err) => {
                    if (err) {
                        console.log(err);
                        return res.status(500).redirect("/500");
                    }
                    res.status(403).render("errors/403", {
                        title: "Error: 403",
                        content: "Only .jpg files are allowed!"
                    });
                });
            }
        } else {
            console.log("No Image Detected!");
            pages.post_edit_dish(req, res);
        }
    });
router.get("/dish/delete/:_id", verify, pages.deleteDish);
router.get("/add", verify, pages.addNewDish);
router.post("/add", upload.single("image"),
    (req, res) => {
        console.log("Started uploading image!");
        console.log("File Information: ");
        const tempPath = req.file.path;
        console.log("File Temporary Path: ", tempPath);
        const filename = req.file.originalname;
        console.log("Filename: ", filename);
        const targetPath = path.join(__dirname, "../public/images/" + filename);
        console.log("File Path: ", targetPath);
        if (path.extname(filename).toLowerCase() === ".jpg") {
            console.log("Extension of file: ", path.extname(filename));
            fs.rename(tempPath, targetPath, (err) => {
                if (err) {
                    console.log(err);
                    return res.status(500).redirect("/500");
                }
                console.log("Image successfully uploaded! File information below.");
                console.log("File Information: ");
                console.log("File Temporary Path: ", tempPath);
                console.log("Filename: ", filename);
                console.log("File Path: ", targetPath);
                console.log("Redirecting...");
                pages.post_new_dish(req, res);
            });
        } else {
            fs.unlink(tempPath, (err) => {
                if (err) {
                    console.log(err);
                    return res.status(500).redirect("/500");
                }
                res.status(403).render("errors/403", {
                    title: "Error: 403",
                    content: "Only .jpg files are allowed!"
                });
            });
        }
    });
router.get("/logout", staff.logout);

/*
ERROR PAGES
*/
router.get("/400", errController.error400);
router.get("/400Error", verify, errController.error400LoggedIn);
router.get("/401", errController.error401);
router.get("/401Error", verify, errController.error401LoggedIn);
router.get("/403", errController.error403);
router.get("/403Error", verify, errController.error403LoggedIn);
router.get("/404", errController.error404);
router.get("/404Error", verify, errController.error404LoggedIn);
router.get("/500", errController.error500);
router.get("/500Error", verify, errController.error500LoggedIn);

router.use(function (req, res) {
    res.status(404);
    res.redirect("/404");
});

router.use(function (req, res) {
    res.status(400);
    res.redirect("/400")
});

router.use(function (req, res) {
    res.status(401);
    res.redirect("/401")
});

router.use(function (req, res) {
    res.status(403);
    res.redirect("/403")
});

router.use(function (req, res) {
    res.status(500);
    res.redirect("/500")
});

module.exports = router;