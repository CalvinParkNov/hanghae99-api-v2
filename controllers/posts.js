const Post = require("../models/post");

exports.findAll = (req, res) => {
  Post.getAll((err, data) => {
    if (err) {
      res.status(400).json({ message: err.message });
    } else {
      res.status(200).json({ data });
    }
  });
};
