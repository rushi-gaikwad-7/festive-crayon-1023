
import { useRouter } from 'next/router';
import React from 'react'
import { useEffect, useState } from "react";
import Description from '../../../components/Products/SingleProduct';
import axios from "axios";

 const ProductPage = ({data}) => {
  
  return (
     <div>
   <Description data={data} />
     </div>
  )
}

export default ProductPage;

export const getServerSideProps = async (context) => {
  console.log(context.query)
    let res = await axios.get(`http://localhost:8080/products/product/${context.query.id}`);
    let data = res.data;
    return {
      props: { data },
    };
  };
  