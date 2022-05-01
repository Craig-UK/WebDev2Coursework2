const express = require('express');
const router = express.Router();
const controller = require('../controllers/restaurantController');
const errController = require('../controllers/errorsController');
const fs = require('fs');
const multer = require('multer');
const path = require('path')

const { login, verify } = require('../auth/auth');
const { upload } = require('../auth/imageUpload');

router.get("/", controller.homePage);
router.get("/about", controller.aboutPage);
router.get("/dinner", controller.dinnerMenu);
router.get("/lunch", controller.lunchMenu);
router.get("/dish/:name", controller.getSingleDish);

router.get("/login", controller.loginPage);
router.post("/login", login, controller.handle_login);

/*
LOGGED IN STAFF
*/
router.get("/home", verify, controller.homePageLoggedIn);
router.get("/aboutus", verify, controller.aboutPageLoggedIn);
router.get("/dinnermenu", verify, controller.dinnerMenuLoggedIn);
router.get("/lunchmenu", verify, controller.lunchMenuLoggedIn);
router.get("/editdinner", verify, controller.editDinner);
router.get("/editlunch", verify, controller.editLunch);
router.get("/dish/edit/:name", verify, controller.editDish);
router.post("/dish/edit/:name", verify, controller.post_edit_dish);
router.get("/dish/delete/:_id", verify, controller.deleteDish);
router.get("/add", verify, controller.addNewDish);
router.post("/add", verify, upload, controller.post_new_dish);
router.get("/logout", controller.logout);

/*
ERROR PAGES
*/
router.get("/404", errController.error404);
router.get("/404Error", verify, errController.error404LoggedIn);
router.get("/500", errController.error500);
router.get("/500Error", verify, errController.error500LoggedIn);

// router.use(function(req, res) {
//     res.status(403);
//     res.send("Unauthorised action.");
// });

router.use(function(req, res) {
    res.status(404);
    res.redirect("/404");
});

router.use(function(req, res) {
    res.status(500);
    res.redirect("/500")
});

module.exports = router;
