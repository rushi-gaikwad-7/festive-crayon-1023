const Category = require("../model/category");
const Product = require("../model/products");

const GetResponse = async (query) => {
  const {
    currentCat = "products",
    pageNo = 1,
    sortBy = 0,
    Colors = [],
    Sizes = [],
    MinPrice = 0,
    MaxPrice = 3000,
  } = query;

  let filterStatus = isFilter(query);

  const [{ _id }] = await Category.find({ name: currentCat });
  const id = _id.toString();


    if (filterStatus) {
    const filter = WhichFilter(query);
    console.log(filter);

    if (filter == "COLOR") {
      let ColorArr = Colors.split(",");
      const data = await Product.find({
        $and: [{ Category: { $in: [id] } }, { Color: { $in: [...ColorArr] } }],
      }).limit(pageNo * 20).sort({ Price: sortBy });

      const count = await Product.find({
        $and: [{ Category: { $in: [id] } }, { Color: { $in: [...ColorArr] } }],
      }).count();
      const res = { count, data };
      return res;
    }
    if (filter == "PRICE") {
      const data = await Product.find({
        $and: [
          { Category: { $in: [id] } },
          { Price: { $gte: MinPrice, $lt: MaxPrice } },
        ],
      }).limit(pageNo * 20).sort({ Price: sortBy });

      const count = await Product.find({
        $and: [
          { Category: { $in: [id] } },
          { Price: { $gte: MinPrice, $lt: MaxPrice } },
        ],
      }).count();
      const res = { count, data };
      return res;
    }
    if (filter == "SIZE") {
      let SizeArr = Sizes.split(",");

      const data = await Product.find({
        $and: [{ Category: { $in: [id] } }, { Sizes: { $in: [...SizeArr] } }],
      }).limit(pageNo * 20).sort({ Price: sortBy });

      const count = await Product.find({
        $and: [{ Category: { $in: [id] } }, { Sizes: { $in: [...SizeArr] } }],
      }).count();

      const res = { count, data };
      return res;
    }

    if ((filter == "ALL")) {

      let SizeArr = Sizes.split(",");
      let ColorArr = Colors.split(",");

      const data = await Product.find({
        $and: [
          { Category: { $in: [id] } },
          { Color: { $in: [...ColorArr] } },
          { Sizes: { $in: [...SizeArr] } },
          { Price: { $gte: MinPrice, $lt: MaxPrice } },
        ],
      }).limit(pageNo * 20).sort({ Price: sortBy });

      const count = await Product.find({
        $and: [
          { Category: { $in: [id] } },
          { Color: { $in: [...ColorArr] } },
          { Sizes: { $in: [...SizeArr] } },
          { Price: { $gte: MinPrice, $lt: MaxPrice }},
        ],
      }).count();

      const res = { count, data };
      return res;
    }
  }
  
  else {
    const data = await Product.find({ Category: { $in: [id] } }).limit(  pageNo * 20 ).sort({ Price: sortBy });

    const count = await Product.find({ Category: { $in: [id] } }).count();

    const res = { count, data };

    return res;
  }
};

const WhichFilter = (query) => {

  const {
    Colors = [],
    Sizes = [],
    MinPrice = 0,
    MaxPrice = 3000,
  } = query;

  console.log(Colors.length,Sizes.length)

  if (
    Sizes.length == 0 &&
    MinPrice == 0 &&
    MaxPrice == 3000 &&  Colors.length != 0
  ) {
    return "COLOR";
  }
  if (
    Colors.length == 0 &&
    MinPrice == 0 &&
    MaxPrice == 3000 &&  Sizes.length != 0
  ) {
    return "SIZE";
  }
  if (
    Colors.length == 0 && Sizes.length == 0 && (MinPrice != 0 || MaxPrice != 3000)
  ) {
    return "PRICE";
  }
  return "ALL";
};

const isFilter = (query) => {
  const {
    Colors = [],
    Sizes = [],
    MinPrice = 0,
    MaxPrice = 3000,
  } = query;

  if (
    Colors.length == 0 &&
    Sizes.length == 0 &&
    MinPrice == 0 &&
    MaxPrice == 3000 
  ) {
    return false;
  }
  return true;
};

module.exports = GetResponse;
