
const {Router}=require("express")

const ProductRouter =Router();

ProductRouter.get("/",(req,res)=>{
    res.status(201).send("products")
})

module.exports=ProductRouter;