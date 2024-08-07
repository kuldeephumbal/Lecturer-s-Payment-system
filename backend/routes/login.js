const express = require("express");
const router = express.Router();
const loginController = require("../controllers/login.js");

router.route("/login")
    .post(loginController.login);

module.exports = router;
