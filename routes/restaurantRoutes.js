const express = require('express');
const router = express.Router();
const controller = require('../controllers/restaurantController');

const { login, verify } = require('../auth/auth');

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
router.get("/add", verify, controller.addNewDish);
router.post("/add", verify, controller.post_new_dish);
router.get("/logout", controller.logout);

router.use(function(req, res) {
    res.status(404);
    res.type('text/plain');
    res.send('404 Not found.');
});

router.use(function(req, res) {
    res.status(500);
    res.type('text/plain');
    res.send('Internal Server Error.');
});

module.exports = router;
