


import React, { useEffect, useState } from 'react'
import { ProductsContainer } from '../../components/Products/ProductsContainer'

import axios from "axios"



 const WishList = () => {

   const [data,setData]=useState([])

   const GetData=async()=>{
    const res= await axios.get(`http://localhost:8080/products/wishlist`) 
    setData(res.data[0].wishlists)
  }
    useEffect(() => {
        GetData()
      
      }, [])
  return (
    <div style={{margin:'auto',width:'90%'}}>
        <br />{' '}
        <h1>WishList</h1>
        <br />
        <ProductsContainer wishList={1} data={data}/>
    </div>
  )
}

export default WishList;