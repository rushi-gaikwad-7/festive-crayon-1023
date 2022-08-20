const {
    Router
} = require("express");
const GetResponse = require("../controller/Products.controller");

const Category = require("../model/category");
const Product = require("../model/products");
const User = require("../model/user.model");
const ProductRouter = Router();


ProductRouter.get('/', async (req, res) => {
   
    try{
        const response =await GetResponse(req.query)
        res.status(201).send(response);
    }catch(e){
        res.status(401).send({e:e,massage:'server error'});  
    }
})

ProductRouter.get('/category/:cat', async (req, res) => {
    const {cat}=req.params;

    try{
        const [{ _id }] = await Category.find({name:cat })
        const  id = _id.toString();
        const category = await Category.find({ Parent_id: id });
       
        res.status(201).send(category);
    }catch (err) {
    res.status(401).send(err)
    }
})

ProductRouter.post("/category", async (req, res) => {
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


ProductRouter.get('/product/:_id',async(req,res)=>{
    const {_id}  = req.params;
    try{
    const data = await Product.findById(_id)
    res.status(201).send(data)
    }
    catch(e){
        res.status(401).send(e)
    }
})

ProductRouter.get('/search/:input',async(req,res)=>{
   
    const {input}  = req.params;
    try{
    const data =  await itemCollection.aggregate([
        { $search: {
            index: 'default',
            text: {
              query: input,
              path: ["Title", "Type", "Color"]
            }
          }
        }
      ]).toArray().limit(16);
  const count= await itemCollection.aggregate([
    { $search: {
        index: 'default',
        text: {
          query: input,
          path: ["Title", "Type", "Color"]
        }
      }
    }
  ]).count();
  
    res.status(201).send({data,count})
    }
    catch(e){
        res.status(401).send()
    }
})

ProductRouter.get('/Slider/:Type',async(req,res)=>{
    const {Type}  = req.params;
   
    try{
     const data = await Product.find({Type})
     res.status(201).send(data)
    }
    catch(e){
        res.status(401).send("not found")
    }
})

 ProductRouter.post('/new', async (req, res) => {

    const product = new Product(req.body)
    product.save((err, success) => {
        if (success) {
            res.status(201).send({
                massage: "new products created",
                product
            })
        } else {
            res.status(401).send({
                massage: "error occurred",
                err
            })
        }

    })
})

ProductRouter.post('/wishlist/:id',async (req,res)=>{
    let {id} = req.params
 
    let pos = await User.findOneAndUpdate({firstName:"mayur"},{$push:{wishlist:id}})
    res.send("ok")
    })

ProductRouter.get("/wishlist",async (req,res)=>{
        try{
           let wishList = await User.aggregate([{$lookup:{from:"products",localField:"wishlist",foreignField:"_id",as:"wishlists"}}]).match({firstName:"mayur"})
           res.send(wishList)
        }catch(error){
           res.send(error)
        }
     })


module.exports = ProductRouter