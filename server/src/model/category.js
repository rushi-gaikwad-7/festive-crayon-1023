
const {model,Schema}=require("mongoose")


const categorySchema= new Schema({
    Category:String,
    img:String
})

const Category=model("Category",categorySchema)
module.exports=Category;

