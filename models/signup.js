const sql = require("../dbconfig/dbconfig");

//constructor
const Signup = function (signup) {
  this.nickname = signup.nickname;
  this.password = signup.password;
};

Signup.create = async (newSignup, result) => {
  await sql.query("INSERT INTO USER SET ?", newSignup, (error, res) => {
    if (error) {
      console.log("error : ", error);
      return result(error, null);
    }
    result(null, { id: res.insertId, ...newSignup });
  });
};

Signup.checkDuplicatedId = async (nickname, result) => {
  const esc_nickname = sql.escape(nickname);
  const sqlQuery = `SELECT COUNT(NICKNAME) AS CNT FROM USER WHERE NICKNAME = ${esc_nickname}`;
  await sql.query(sqlQuery, (error, res) => {
    if (error) {
      return result(error, null);
    }
    return result(null, res[0].CNT);
  });
};

module.exports = Signup;
