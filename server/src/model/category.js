
const {model,Schema}=require("mongoose")


const categorySchema= new Schema({
    name:String,
    Parent_id:String,
    img:String
}, {
    versionKey: false,
    timestamps: true,
})

const Category=model("Category",categorySchema)
module.exports=Category;


