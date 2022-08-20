const { Router } = require("express");
const { getHomeData, getAllData } = require("../controller/home.controller");
const User = require("../model/user.model");

let homeRouter = Router();

homeRouter.get("/get/:type", async (req, res) => {
  let { type } = req.params;

  let data = await getHomeData(type);
  if (data == "error") {
    res.send({ message: "error" });
  }
  res.send(data);
});

homeRouter.get("/get", async (req, res) => {
  let data = await getAllData();
  if (data == "error") {
    res.send({ message: "error" });
  }
  res.send(data);
});

homeRouter.post("/post/cart", async (req, res) => {
  let { proid, userid } = req.query;
  let pos = await User.findByIdAndUpdate(userid, { $push: { cart: proid } });
  res.send("ok");
});

homeRouter.delete("/cart/delete/:proid/:userid", async (req, res) => {
  let { proid, userid } = req.params;
  try {
    let cart = await User.findByIdAndUpdate(userid, {
      $pull: { cart: { $in: [proid] } },
    });
    res.send("deleted");
  } catch (error) {
    res.send(error);
  }
});

homeRouter.get("/cart/:id", async (req, res) => {
  let { id } = req.params;
  try {
    let userfind = await User.findById(id);
    let cart = await User.aggregate([
      {
        $lookup: {
          from: "products",
          localField: "cart",
          foreignField: "_id",
          as: "carts",
        },
      },
    ]).match({ firstName: userfind.firstName });
    res.send(cart);
  } catch (error) {
    res.send(error);
  }
});

module.exports = homeRouter;
