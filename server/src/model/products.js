
const {model,Schema}=require("mongoose")


const productSchema= new Schema({
    Title:String,
    Price:Number,
    Images:Array,
    Sizes:Array,
    Country:String,
    Category:Array,
    Color:Array,
    Type:String,
    Status:String,
    Stock:Number,
    Gender:String,
})

const Product=model("Product",productSchema)
module.exports=Product;

