const Post = require("../models/post");

exports.findAll = (req, res) => {
  Post.getAll((error, data) => {
    if (error) {
      res.status(500).json({ message: error.message });
    } else if (data.length) {
      res.status(200).json({ data });
    } else {
      res.status(400).json({ message: "글이 없습니다." });
    }
  });
};

exports.create = (req, res) => {
  //validation check
  let { title, writer } = req.body;
  if (!title || !writer) {
    res.status(400).json({ message: "데이터 형식이 맞지 않습니다." });
  }
  const post = new Post({
    title: req.body.title,
    writer: req.body.writer,
  });
  //게시글 입력
  Post.create(post, (error, data) => {
    if (error) {
      return res.status(500).json({
        message: error.message,
      });
    } else {
      return res.status(200).json({ data });
    }
  });
};
