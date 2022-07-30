const express = require("express");
const router = express.Router();
const account = require("../controllers/signup");
const login = require("../controllers/login");

router.route("/signup").post(account.createAccount);
router.route("/login").post(login.loginUser);
module.exports = router;
