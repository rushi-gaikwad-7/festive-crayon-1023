const {Schema,model} = require("mongoose")

let homeSchema = new Schema({
  gender : String,
  sliderimages : [String],
  stylespot : {
    title : String,
    spot : [String]
  },
  CustomerFav : {
    title : String,
    url : String
  },
   shopbycat : {
    title : String,
    catarr : [
        {
            img : String,
            title : String
        }
    ]
   } ,
   budget : {
    title : String,
    budgt : [String]
   },
   youthstore : {
    title : String,
    youth : String,
   },
   trends : {
    title : String,
    trendimgs : [String]
   },
   topstores : {
    title : String,
    top : [String]
   },
   viewall : String
})

let home = model("home",homeSchema)

module.exports = home;