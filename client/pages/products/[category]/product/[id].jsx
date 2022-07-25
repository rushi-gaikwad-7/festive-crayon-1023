
import React from 'react'
import Description from '../../../../components/Products/SingleProduct';
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
    let res = await axios.get(`/products/product/${context.query.id}`);
    let data = res.data;
    return {
      props: { data },
    };
  };
  