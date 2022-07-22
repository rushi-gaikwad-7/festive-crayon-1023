const express = require("express");
const authController = require("../controller/auth.controller");
const validateRegister = require("../middleware/validation");

const authRouter = express.Router();

authRouter.post("/register", authController.register);

authRouter.post("/login", authController.login);

authRouter.get("/refresh_token", authController.refreshToken);

authRouter.get("/logout", authController.logout);

module.exports = authRouter;
