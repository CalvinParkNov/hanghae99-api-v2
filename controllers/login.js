const Login = require("../models/login");
const jwt = require("jsonwebtoken");
const config = require("../config/authConfig");

exports.loginUser = (req, res) => {
  let { nickname, password } = req.body;
  if (!nickname || !password) {
    res.status(400).json({ message: "이메일 또는 비밀번호를 입력해주세요." });
    return;
  }
  const login = new Login({
    nickname: req.body.nickname,
    password: req.body.password,
  });
  Login.getUser(login, (error, data) => {
    if (error) {
      return res.status(400).json({ message: error.message });
    } else if (!data.length) {
      return res
        .status(400)
        .json({ message: "아이디 또는 비밀번호를 확인해주세요." });
    } else {
      const token = jwt.sign({ id: data[0].NICKNAME }, config.secret, {
        expiresIn: "15m", // 24 hours
      });
      console.log(req.session);
      return res.status(200).json({ message: "로그인 되었습니다." });
    }
  });
};
