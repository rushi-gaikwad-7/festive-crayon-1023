const Home = require("../model/home.model")

const getHomeData = async (type)=>{
 console.log(type)
let data = await Home.findOne({gender : type})
if(data.length<1){
    return "error"
}
return data
}

module.exports = getHomeData;