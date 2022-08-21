const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");

const ProductRouter = require("./src/routes/Products.routes");
const homeRouter = require("./src/routes/home.routes");
const authRouter = require("./src/routes/auth.route");


require("dotenv").config();
require("./src/config/database");


const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());
dotenv.config();
app.use(
    cors({
        origin: [
            "http://localhost:3000",
            "http://localhost:3001",
            "http://localhost:3002",
        ],
        credentials: true,
    })
);

app.get("/", (req, res) => {
    res.send("Welcome to the max-Fashion Backend Portal");
});

app.use("/auth", authRouter);

app.use("/home", homeRouter);

app.use("/products", ProductRouter);


app.use(async (req, res, next) => {
    const error = new Error("Not found");
    error.status = 404;
    next(error);
});

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send({
        error: {
            status: err.status || 500,
            message: err.message,
        },
    });
});

require("./src/config/database");
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    
   
    console.log(`Server connected at http://localhost:${PORT}`);
});
