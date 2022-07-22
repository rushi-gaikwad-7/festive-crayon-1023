const {
    Router
} = require("express");
const Category = require("../model/category");
const Product = require("../model/products");


const ProductRouter = Router();

ProductRouter.get('/:id', async (req, res) => {

    const {id,sort} = req.params;

    try {
        if (id == 'all' ) {
            const [{_id}] = await Category.find({ name: "products" })
            const data= await Product.find()
           const cats = await Category.find({ Parent_id: _id });
            res.status(201).send({cats,data})
        } else {
           const cats = await Category.find({   Parent_id:id  });
           const data= await Product.find
           ({Category:{$in:[id]}})
            res.status(201).send({cats,data})
        }
        
    } catch (err) {
        res.status(401).send(err)
    }

})


ProductRouter.get('/',async(req,res)=>{

    try{  
     const [{_id}]=await Category.find({name:"products"})
     const cats =await Category.find({Parent_id:_id});
     res.status(201).send(cats)
    }
    catch(err){
        res.status(401).send(err)
    }

})

ProductRouter.post('/new',async(req,res)=>{

    const {Title,Price,Images,Sizes,Country,Category,Color,Type}=req.body
    const product = new Product({Title,Price,Images,Sizes,Country,Category,Color,Type})
    product.save((err,success)=>{
        if(success){
            res.status(201).send({massage:"new products created",product})
        }
        else{
            res.status(401).send({massage:"error occurred",err})
        } 

    })
})


module.exports = ProductRouter
