const {
    Router
} = require("express");
const Category = require("../model/category");
const Product = require("../model/products");
const ProductRouter = Router();

ProductRouter.get('/', async (req, res) => {
    const {
        category,
        sortBy,
        Color,
        Size,MinPrice,MaxPrice
    } = req.query;

    let color = Color.split(',')
    let size = Size.split(',')
    if (color[0] == '') {
        color = [
            'Blue', 'Green',
            'Grey', 'Multicolour',
            'Pink', 'Purple',
            'Red', 'White',
            'Yellow'
        ]
    }
    if(size[0]==''){
     size = [
        '28', '30', '32',
        '34', '38', '40',
        'L',  'M',  'S',
        'XL', 'XS', 'XXL'
      ];
    }
    let sort = {};
    if (sortBy == "Relevance") {
        sort[sortBy] = 1;
    }
    if (sortBy == "Price -High To Low") {
        sort["Price"] = -1;
    } else if (sortBy == "Price -Low To High") {
        sort["Price"] = 1;
    }
    try {
        const [{
            _id
        }] = await Category.find({
            name: category
        })
        let id = _id.toString();
        const data = await Product.find({
            $and: [{
                Category: {
                    $in: [id]
                }
            }, {
                Color: {
                    $in: [...color]
                }
            },{
                Sizes: {
                    $in: [...size]
                }
            },{Price:{$gt:MinPrice},Price:{$lt:MaxPrice}}]
        }).sort({
            ...sort
        })
        const cats = await Category.find({
            Parent_id: _id
        });
        res.status(201).send({
            cats,
            data
        })
    } catch (err) {
        res.status(401).send(err)
    }
})

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

    const {
        Title,
        Price,
        Images,
        Sizes,
        Country,
        Category,
        Color,
        Type
    } = req.body
    const product = new Product({
        Title,
        Price,
        Images,
        Sizes,
        Country,
        Category,
        Color,
        Type
    })
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


module.exports = ProductRouter