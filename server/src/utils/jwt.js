const jwt = require("jsonwebtoken");

const signAccessToken = (payload) => {
    return jwt.sign(payload, `${process.env.ACCESS_TOKEN_SECRET}`, {
        expiresIn: "15h",
    });
};

const signRefreshToken = (payload) => {
    return jwt.sign(payload, `${process.env.REFRESH_TOKEN_SECRET}`, {
        expiresIn: "1w",
    });
};

module.exports = {
    signAccessToken,
    signRefreshToken,
};
