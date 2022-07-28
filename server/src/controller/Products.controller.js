const Category = require("../model/category");
const Product = require("../model/products");


 const GetResponse=async(query)=>{

  const { currentCat,pageNo,sortBy,Colors,Size,MinPrice,MaxPrice } = query;
 
   
 
    const [{_id}] = await Category.find({name:currentCat })
    const  id = _id.toString();
 
    const count = await Product.find({ Category: { $in: [id] }}).count();
    const data = await Product.find({ Category: { $in: [id] }}).limit(pageNo*limit)

     const res={count,data};
     return res;
  
        if(isFilter(query)){ 

        const filter=WhichFilter(query);

        console.log(filter);

        if(filter=='COLOR'){
           let ColorArr=Colors.split(',');
            const data = await Product.find({ $and: [{Category: { $in: [id] } },{ Color: { $in: [...ColorArr]} }] }).limit(pageNo*limit)
          
            const count = await Product.find({ $and: [{Category: { $in: [id] } },{ Color: { $in: [...ColorArr]} }] }).count();
                  const res={count,data};
                  return res;
        }
        if(filter=='PRICE'){

        const data = await Product.find({ $and: [{Category: { $in: [id] } },{Price:{$gt:MinPrice},Price:{$lt:MaxPrice}}] }).limit(pageNo*limit)
          
    const count = await Product.find({ $and: [{Category: { $in: [id] } },{Price:{$gt:MinPrice},Price:{$lt:MaxPrice}}] }).count();
          
                  const res={count,data};
                  return res;
        }
        if(filter=='SIZE'){
           let SizeArr=Size.split(',');
      const data = await Product.find({ $and: [{Category: { $in: [id] } },{ Sizes: { $in: [...SizeArr]} }] }).limit(pageNo*limit)
          
      const count = await Product.find({ $and: [{Category: { $in: [id] } },{ Sizes: { $in: [...SizeArr]} }] }).count();
          
                  const res={count,data};
                  return res;
        }

        if(filter=='SORT'){

            const data = await Product.find({ Category: { $in: [id] } }).limit(pageNo*limit).sort({Price:sortBy})
          
            const count = await Product.find({Category: { $in: [id] }}).count();
          
                  const res={count,data};
                  return res;
        }
 
        if(filter='ALL'){
            let SizeArr=Size.split(',');
            let ColorArr=Colors.split(',');
      const data = await Product.find({ $and: [{Category: { $in: [id] } },{Color: {$in: [...ColorArr] } },{ Sizes: { $in: [...SizeArr]} },
      {Price:{$gt:MinPrice},Price:{$lt:MaxPrice}}] }).limit(pageNo*limit).sort({Price:sortBy})

      const count = await Product.find({ $and: [{Category: { $in: [id] } },{Color: {$in: [...ColorArr] } },{ Sizes: { $in: [...SizeArr]} },
        {Price:{$gt:MinPrice},Price:{$lt:MaxPrice}}] }).count();

        const res={count,data};
        return res;
            }
        }

    else{
        const count = await Product.find({ Category: { $in: [id] }}).count();
        const data = await Product.find({ Category: { $in: [id] }}).limit(pageNo*limit)

         const res={count,data};
        return res;

    }
 }


const WhichFilter=(query)=>{

    const { Colors,Size,MinPrice,MaxPrice,sortBy } = query;

    if(Colors!='SelectColor' && Size=='SelectSize' && MinPrice==0 && MaxPrice==2000 && sortBy==0){
        return 'COLOR';
    }
    if(Colors=='SelectColor' && Size!='SelectSize' && MinPrice==0 && MaxPrice==2000 && sortBy==0){
        return 'SIZE';
    }
    if(Colors=='SelectColor' && Size=='SelectSize' &&  MinPrice!=0 || MaxPrice !=2000 && sortBy==0){
        return 'PRICE';
    }
    if(Colors=='SelectColor' && Size=='SelectSize' &&  MinPrice==0 && MaxPrice ==2000 && sortBy!=0){
        return 'SORT';
    }
    
    return 'ALL'

}

const isFilter=(query)=>{

    const { Colors,Size,MinPrice,MaxPrice,sortBy } = query;

    if(Colors=='SelectColor' && Size=='SelectSize' && MinPrice==0 && MaxPrice==2000 && sortBy==0){
        return false;
    }
    
  return true;
}

module.exports =GetResponse;