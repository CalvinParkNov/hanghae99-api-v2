const sql = require("../dbconfig/dbconfig");

//constructor
const Post = function (post) {
  this.title = post.title;
  this.writer = post.writer;
};

Post.getAll = async (newPost, result) => {
  await sql.query(
    "SELECT * FROM POSTS ORDER BY INS_DATE DESC",
    newPost,
    (error, res) => {
      if (error) {
        return result(err, null);
      }
      result(null, res);
    }
  );
};

Post.create = async (newPost, result) => {
  await sql.query("INSERT INTO POSTS SET ?", newPost, (error, res) => {
    if (error) {
      return error, null;
      return;
    }
    result(null, { id: res.insertId, ...newPost });
  });
};

module.exports = Post;
