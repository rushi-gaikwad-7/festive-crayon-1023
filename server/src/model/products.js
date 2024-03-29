
const {model,Schema}=require("mongoose")


const productSchema= new Schema({
    Title:String,
    Price:Number,
    Images:Array,
    Sizes:Array,
    Country:String,
    Category:Array,
    Color:String,
    Type:String
}, {
    versionKey: false,
    timestamps: true,
})

const Product=model("Product",productSchema)
module.exports=Product;

