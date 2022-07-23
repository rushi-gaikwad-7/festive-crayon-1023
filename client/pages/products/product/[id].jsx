
import { useRouter } from 'next/router';
import React from 'react'
import { useEffect, useState } from "react";
import Description from '../../../components/Products/SingleProduct';
import axios from "axios";

 const ProductPage = ({data}) => {
  
  const {query} = useRouter()

//   const [data,setData]=useState([])
//   const getData=async()=>{
//     let res = await axios.get(`http://localhost:8080/products/product/${query.id}`);
//     console.log(res.data)
//   setData(res.data)
//   }
// useEffect(()=>{

//     getData()

// },[query])


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
  