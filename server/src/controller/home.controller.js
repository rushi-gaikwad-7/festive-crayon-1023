const Home = require("../model/home.model")

const getHomeData = async (type)=>{
 console.log(type)
let data = await Home.findOne({gender : type})
if(!data){
    return "error"
}
return data
}


const getAllData = async ()=>{
   let data = await Home.find()
   if(data.length<1){
       return "error"
   }
   return data
   }

module.exports = {getHomeData,getAllData};