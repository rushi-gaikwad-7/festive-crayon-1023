const {Router} = require("express")
const {getHomeData,getAllData} = require("../controller/home.controller")
const User = require("../model/user.model")

let homeRouter = Router()

homeRouter.get('/get/:type', async (req,res)=>{
    let {type} = req.params
    
   let data = await getHomeData(type)
  if(data=="error"){
 res.send({message:"error"})
  }
   res.send(data)
})

homeRouter.get('/get', async (req,res)=>{
   let data = await getAllData()
  if(data=="error"){
 res.send({message:"error"})
  }
   res.send(data)
})

homeRouter.post('/post/:id',async (req,res)=>{
let {id} = req.params
console.log(id)
let pos = await User.findOneAndUpdate({firstName:"mayur"},{$push:{cart:id}})
res.send("ok")
})



homeRouter.get("/cart",async (req,res)=>{
   try{
      let cart = await User.aggregate([{$lookup:{from:"products",localField:"cart",foreignField:"_id",as:"carts"}}]).match({firstName:"mayur"})
      res.send(cart)
   }catch(error){
      res.send(error)
   }
   // aggregate([{$lookup:{from:"products",localField:"cart",foreignField:"_id",as:"carts"}}])
})

homeRouter.delete("/cart/:id",async (req,res)=>{
   let {id} = req.params
   console.log(id)
   try{
       let cart = await User.findOneAndUpdate({firstName:"mayur"},{$pull:{cart:{$in:[id]}}})
      res.send("deleted")
   }catch(error){
      res.send(error)
   }
   // aggregate([{$lookup:{from:"products",localField:"cart",foreignField:"_id",as:"carts"}}])
})



module.exports = homeRouter;