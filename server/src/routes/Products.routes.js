
const {Router}=require("express");
const Product = require("../model/products");

const ProductRouter =Router();

ProductRouter.get("/",(req,res)=>{
    res.status(201).send("products")
})

ProductRouter.post('/new',async(req,res)=>{

    const {Title,Price,Images,Sizes,Country,Category,Color,Type,Status,Stock,Gender}=req.body
    const product = new Product({Title,Price,Images,Sizes,Country,Category,Color,Type,Status,Stock,Gender})
    product.save((err,success)=>{
        if(success){
            res.status(201).send({massage:"new products created",product})
        }
        else{
            res.status(401).send({massage:"error occurred",err})
        } 
    })
})


module.exports=ProductRouter;