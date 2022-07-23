import React, { useEffect, useState } from "react";

import axios from "axios";
import styles from "../../styles/products.module.css";
import { ProductsContainer } from "../../components/Products/ProductsContainer";
import { Filters } from "../../components/Products/Filters";
import { CategoryS } from "../../components/Products/CategoryS";

let search = "Products";

export const ProductsPage = () => {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState([]);
  const [filterS, SetFilter] = useState({});
  const getCategoryS = async () => {
  const res = await axios.get(`http://localhost:8080/products/?category=products&sortBy=${filterS.Sort}`);

  }

let search = "Products";
  const handleSort = (e) => {
    SetFilter({ ...filterS, Sort: e.target.value });
    getCategoryS()
  };

  useEffect(() => {
    getCategoryS("products");
  }, []);
 
  return (
    <div className={styles.mainDiv}>
      <div>
        <div>
          <h1>You searched for “{search}”</h1>
        </div>
        <CategoryS category={category}  />
      </div>
      <Filters  />
      <ProductsContainer data={data} sort={handleSort} />
        </div>
  );
};


