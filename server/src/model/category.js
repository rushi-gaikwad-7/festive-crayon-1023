
const {model,Schema}=require("mongoose")


const categorySchema= new Schema({
    name:String,
    Parent_id:String,
    img:String
})

const Category=model("Category",categorySchema)
module.exports=Category;

