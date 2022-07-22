
const {model,Schema}=require("mongoose")


const productSchema= new Schema({
    Title:String,
    Price:Number,
    Images:Array,
    Sizes:Array,
    Country:String,
    Category:Array,
    Color:Array,
    Status:String,
    Stock:Number,
})

const Product=model("Product",productSchema)
module.exports=Product;

