const Home = require("../model/home.model")

const getHomeData = async (type)=>{
 console.log(type)
let data = await Home.find({gender : type})
if(data.length<1){
    return "error"
}
return data
}

module.exports = getHomeData;