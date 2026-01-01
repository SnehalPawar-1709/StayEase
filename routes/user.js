const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const {saveRedirectUrl} = require("../middleware.js");
//create route
const userControllers=require("../controllers/user.js");

router
.route("/signup")
.get(userControllers.renderSignupForm)
.post(wrapAsync(userControllers.signUp))


router
.route("/login")
.get(userControllers.renderFormLogin )
.post(
    saveRedirectUrl,
    passport.authenticate("local",{
        failureRedirect:'/login',
        failureFlash:true
    }),
        userControllers.login
);

//logout route
  router.get("/logout",userControllers.logout);
module.exports = router;