const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const ProductRouter = require("./routes/Products.routes");

const homeRouter = require("./routes/home.route");
const Category = require('./model/category');
const Product = require('./model/products');

require("dotenv").config();
require("./config/database");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));
app.use(
  cors({
    origin: ["http://localhost:3000", `http://localhost:PORT`],
    credentials: true,
  })
);

app.use("/home", homeRouter);

app.get("/", (req, res) => {
  res.send("Hello");
});


app.post('/category',async(req,res)=>{

    const {name,Parent_id,img}=req.body
    const Cat = new Category({name,Parent_id,img})
    Cat.save((err,success)=>{
        if(success){
            res.status(201).send({massage:"new category created",Cat})
        }
        else{
            res.status(401).send({massage:"error occurred",err})
        }
    })
})




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

app.listen(PORT, () => {
  console.log(`Server connected at http: //localhost:PORT/`);
});
