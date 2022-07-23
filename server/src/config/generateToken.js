const jwt = require("jsonwebtoken");

const { ACCESS_TOKEN_SECRET, REFRESH_TOKEN_SECRET } = process.env;

const generateAccessToken = (payload) => {
  return jwt.sign(payload, `${ACCESS_TOKEN_SECRET}`, { expiresIn: "15m" });
};

const generateRefreshToken = (payload, res) => {
  const refresh_token = jwt.sign(payload, `${REFRESH_TOKEN_SECRET}`, {
    expiresIn: "7d",
  });

  // res.cookie("refreshtoken", refresh_token, {
  //   // sameSite: "none",
  //   // secure: true,
  //   httpOnly: true,
  //   path: `/auth/refresh_token`,
  //   maxAge: 30 * 24 * 60 * 60 * 1000, // 30days
  // });

  // res.cookie("refreshtoken", refresh_token, {
  //   httpOnly: true,
  //   path: "/auth/refresh_token",
  //   maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  // });

  return refresh_token;
};

module.exports = {
  generateAccessToken,
  generateRefreshToken,
};
