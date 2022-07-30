const sql = require("../dbconfig/dbconfig");

//constructor
const Post = (post) => {
  this.title = post.title;
  this.writer = post.writer;
};

Post.getAll = async (newPost, result) => {
  await sql.query(
    "SELECT * FROM POSTS ORDER BY INS_DATE DESC",
    newPost,
    (error, res) => {
      if (error) {
        result(err, null);
        return;
      }
      result(null, res);
    }
  );
};

module.exports = Post;
