const express = require('express');
const router = express.Router();
const controller = require('../controllers/restaurantController');

const { login, verify } = require('../auth/auth');

router.get("/", controller.homePage);
router.get("/about", controller.aboutPage);
router.get("/dinner", controller.dinnerMenu);
router.get("/lunch", controller.lunchMenu);

router.get("/login", controller.loginPage);
router.post("/login", login, controller.handle_login);
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
