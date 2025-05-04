import jwt from "jsonwebtoken";

const createTokenAndSaveCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "10d",
  });
  res.cookie("jwt", token, {
    httpOnly: true, // xss
    secure: false,
    sameSite: "None",
    maxAge: 7 * 24 * 60 * 60 * 1000, // csrf
  });
};
export default createTokenAndSaveCookie;
