const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../model/user.model");
const { signAccessToken, signRefreshToken } = require("../utils/jwt");


const authController = {
  register: async (req, res) => {
    try {
      const { firstName, lastName, number, email, password } = req.body;

      const user = await User.findOne({ email });
      if (user) return res.status(400).json({ msg: "Email already exists" });

      const contactExist = await User.findOne({ number });
      if (contactExist)
        return res.status(400).json({ msg: "Mobile number already exists" });

      const newUser = new User({
        firstName,
        lastName,
        number,
        email,
        password,
      });

      const createUser = await newUser.save();

      const accessToken = signAccessToken({ id: createUser._id });
      const refreshToken = signRefreshToken({ id: createUser._id });

      res.cookie("refreshtoken", refreshToken, {
        httpOnly: true,
        path: "/auth/refresh_token",
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        secure: true,
      });

      res.json({
        status: "ok",
        msg: "Register Successfully",
        accessToken,
        user: { ...createUser._doc, password: "" },
      });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },

  login: async (req, res) => {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({ email });
      if (!user)
        return res
          .status(400)
          .json({ msg: "User does not exist please register" });

      loginUser(user, password, res);
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },

  refreshToken: async (req, res) => {
    try {
      const refToken = req.cookies["refreshtoken"];
      if (!refToken) return res.status(400).json({ msg: "Please login!" });

      const decoded = jwt.verify(refToken, process.env.REFRESH_TOKEN_SECRET);

      if (!decoded) return res.status(400).json({ msg: "Please login!" });

      const user = await User.findById(decoded.id).select("-password");
      if (!user)
        return res
          .status(400)
          .json({ msg: "User does not exist, Please login!" });

      const access_token = signAccessToken({ id: user._id });

      res.json({ access_token, user });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },

    logout: async (req, res) => {
      try {
        res.clearCookie("refreshtoken", { path: "/auth/refresh_token" });

        return res.json({ msg: "Logged out!" });
      } catch (error) {
        return res.status(500).json({ msg: error.message });
      }
    },
};

const loginUser = async (user, password, res) => {
  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) return res.status(500).json({ msg: "Password is incorrect" });

  // res.send(user);
  const accessToken = signAccessToken({ id: user._id });
  const refreshToken = signRefreshToken({ id: user._id });

  res.cookie("refreshtoken", refreshToken, {
    httpOnly: true,
    path: "/auth/refresh_token",
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  });

  res.json({
    msg: "Login Successful!",
    accessToken,
    user: { ...user._doc, password: "" },
  });
};

module.exports = authController;
