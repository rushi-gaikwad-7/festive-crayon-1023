const {Router} = require("express")
const {getHomeData,getAllData} = require("../controller/home.controller")

let homeRouter = Router()

homeRouter.get('/get/:type', async (req,res)=>{
    let {type} = req.params
    console.log(type)
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


module.exports = homeRouter;