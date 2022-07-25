
import { useRouter } from 'next/router';
import React from 'react'
import { useEffect, useState } from "react";
import Description from '../../../components/Products/SingleProduct';
import axios from "axios";
import Loading from '../../../components/alert/Loading';

 const ProductPage = ({data}) => {
  
  return (
     <div>
      {data?<Description data={data} />:<Loading/>
      }
     </div>
  )
}

export default ProductPage;

export const getServerSideProps = async (context) => {
  
    let res = await axios.get(`/products/product/${context.query.id}`);
    let data = res.data;
    return {
      props: { data },
    };
  };
  