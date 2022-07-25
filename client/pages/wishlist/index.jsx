import React, { useEffect, useState } from "react";
import { ProductsContainer } from "../../components/Products/ProductsContainer";
import Head from "next/head";
import axios from "axios";

const WishList = () => {
  const [data, setData] = useState([]);

  const GetData = async () => {
    const res = await axios.get(`/products/wishlist`);
    setData(res.data[0].wishlists);
  };
  useEffect(() => {
    GetData();
  }, []);
  return (
    <div style={{ margin: "auto", width: "90%" }}>
      <Head>
        <title>Max fashion- wishlist</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <br /> <h1>WishList</h1>
      <br />
      <ProductsContainer wishList={1} data={data} />
    </div>
  );
};

export default WishList;
