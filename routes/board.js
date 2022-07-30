const express = require("express");
const router = express.Router();
const posts = require("../controllers/posts");

router.route("/").get(posts.findAll).post(posts.create);

module.exports = router;
