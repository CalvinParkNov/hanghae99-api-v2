const express = require("express");
const router = express.Router();
const post = require("../controllers/posts");

router.route("/").get(post.findAll);

module.exports = router;
