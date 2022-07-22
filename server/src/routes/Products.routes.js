const {
    Router
} = require("express");
const Category = require("../model/category");
const Product = require("../model/products");


const ProductRouter = Router();

ProductRouter.get('/:category', async (req, res) => {
    const { category  } = req.params;
    console.log(category)
    try {
        const [{_id}] = await Category.find({ name:category })
        let id=_id.toString();
        const data = await Product.find({Category:{$in:[id]}})
        const cats = await Category.find({ Parent_id:_id });
        res.status(201).send({cats,data})
    } catch (err) {
        res.status(401).send(err)
    }
})



ProductRouter.get('/', async (req, res) => {

    try {
        const [{
            _id
        }] = await Category.find({
            name: "products"
        })
        const cats = await Category.find({
            Parent_id: _id
        });
        res.status(201).send(cats)
    } catch (err) {
        res.status(401).send(err)
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