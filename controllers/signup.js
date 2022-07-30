const Signup = require("../models/signup");

exports.createAccount = (req, res) => {
  let { nickname, password, confirmPassword } = req.body;

  if (!nickname) {
    return res.status(400).json({ message: "닉네임을 적어주세요" });
  } else if (!password) {
    return res.status(400).json({ message: "비밀번호를 입력해주세요." });
  } else if (!confirmPassword) {
    return res.status(400).json({ message: "비밀번호를 한번 더 입력해주세요" });
  } else if (password !== confirmPassword) {
    return res.status(400).json({ message: "비밀번호가 일치하지 않습니다." });
  }
  const countLower = nickname.length - nickname.replace(/[a-z]/g, "").length;
  const countUpper = nickname.length - nickname.replace(/[A-Z]/g, "").length;
  if (countLower <= 0 || countUpper <= 0) {
    return res
      .status(400)
      .json({ message: "대문자1글자 이상 소문자1글이상으로 입력해주세요." });
  }
  const signup = new Signup({
    nickname: req.body.nickname,
    password: req.body.password,
  });

  Signup.checkDuplicatedId(nickname, (error, data) => {
    if (data > 0) {
      return res.status(400).json({ message: "아이디가 중복됩니다." });
    } else if (error) {
      return res.status(500).json({ message: error.message });
    }
    Signup.create(signup, (error, data) => {
      if (error) {
        return res.status(400).json({ message: error.message });
      } else {
        return res.status(200).json({ data });
      }
    });
  });
};
