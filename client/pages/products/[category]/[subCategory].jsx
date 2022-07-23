

import React, { useEffect, useState } from "react";

import axios from "axios";
import { useRouter } from 'next/router'
import styles from "../../../styles/products.module.css";

import { ProductsContainer } from "../../../components/Products/ProductsContainer";
import { Filters } from "../../../components/Products/Filters";
import { CategoryS } from "../../../components/Products/CategoryS";


const ProductsPage = () => {

  const {query} = useRouter()
  let search = query.subCategory;
  const [data, setData] = useState([]);
  const [category, setCategory] = useState([]);
  const [filterS,SetFilter]=useState({})
  const getCategoryS = async () => {
    const res = await axios.get(`http://localhost:8080/products/${query.subCategory}`);
    setCategory(res.data.cats);
    setData(res.data.data);
  };

const handleSort=(e)=>{
  SetFilter({...filterS,Sort:e.target.value})
}
  useEffect(() => {
    getCategoryS();
  }, [query]);
  return (
    <div className={styles.mainDiv}>
    <div>
      <div>
        <h1>You searched for “{search}”</h1>
      </div>
      <CategoryS category={category} />
    </div>
    <Filters />
    <ProductsContainer data={data} />
  </div>
  );
};

export default ProductsPage;
