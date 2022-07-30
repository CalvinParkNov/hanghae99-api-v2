const sql = require("../dbconfig/dbconfig");
//constructor
const Login = function (login) {
  this.nickname = login.nickname;
  this.password = login.password;
};

Login.getUser = async (nickname, result) => {
  const esc_nickname = sql.escape(nickname.nickname);

  const sqlQuery = `SELECT NICKNAME, PASSWORD FROM USER WHERE NICKNAME = ${esc_nickname}`;
  await sql.query(sqlQuery, (error, res) => {
    if (error) {
      return result(error, null);
    }
    return result(null, res);
  });
};
module.exports = Login;
