const jwt = require("jsonwebtoken");

const signAccessToken = (userId) => {
  return new Promise((res, rej) => {
    const payload = {
      userId,
    };
    const secret = process.env.ACCESS_TOKEN_SECRET;

    const options = {
      expiresIn: "1h",
    };

    jwt.sign(payload, secret, options, (error, data) => {
      if (error) return rej(error);
      res(data);
    });
  });
};

const signRefreshToken = (userId) => {
  return new Promise((res, rej) => {
    const payload = {
      userId,
    };
    const secret = process.env.REFRESH_TOKEN_SECRET;

    const options = {
      expiresIn: "1w",
    };

    jwt.sign(payload, secret, options, (error, data) => {
      if (error) return rej(error);
      res(data);
    });
  });
};

module.exports = {
  signAccessToken,
  signRefreshToken,
};
