const bcrypt = require('bcrypt');
const userModel = require('../models/userModel');
const jwt = require('jsonwebtoken');

exports.login = function (req, res, next) {
    let email = req.body.email;
    let password = req.body.password;

    userModel.lookup(email, function(err, email) {
        if(err) {
            console.log("error finding user", err);
            return res.status(401).redirect("/401");
        }
        if(!email) {
            console.log("user with email ", email, " could not be found.");
            return res.status(400).render("errors/400", {
                title: "Error: 400",
                content: "User with the specified email does not exist."
            });
        }
        bcrypt.compare(password, email.password, function(err, result) {
            if(result) {
                let payload = { email: email };
                let accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET,{expiresIn: "2d"});
                res.cookie("jwt", accessToken);
                next();
            } else {
                return res.render("staff/login");
            }
        });
    });
};

exports.verify = function (req, res, next) {
    let accessToken = req.cookies.jwt;
    if(!accessToken) {
        return res.status(403).redirect("/403");
    }
    let payload;
    try {
        payload = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
        next();
    } catch(e) {
        res.status(401).redirect("/401");
    }
}