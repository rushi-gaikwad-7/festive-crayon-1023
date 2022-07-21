const {Router} = require("express")
const getHomeData = require("../controller/home.controller")

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

module.exports = homeRouter;