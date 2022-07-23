const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const dotenv = require("dotenv");

const ProductRouter = require("./routes/Products.routes");
const homeRouter = require("./routes/home.routes");
const Category = require("./model/category");
const authRouter = require("./routes/auth.route");

require("dotenv").config();
require("./config/database");


const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));
app.use(session({ secret: "cats" }));
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
    res.send("Hello");
});

app.use("/auth", authRouter);

app.use("/home", homeRouter);

app.use("/products", ProductRouter);

app.post("/category", async (req, res) => {
    const { name, Parent_id, img } = req.body;
    const Cat = new Category({ name, Parent_id, img });
    Cat.save((err, success) => {
        if (success) {
            res.status(201).send({ massage: "new category created", Cat });
        } else {
            res.status(401).send({ massage: "error occurred", err });
        }
    });
});

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

require("./config/database");
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server connected at http://localhost:${PORT}`);
});
