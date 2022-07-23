import React, { useEffect, useState } from "react";

import axios from "axios";
import styles from "../../styles/products.module.css";
import { ProductsContainer } from "../../components/Products/ProductsContainer";
import { Filters } from "../../components/Products/Filters";
import { CategoryS } from "../../components/Products/CategoryS";

let search = "Products";

const ProductsPage = () => {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState([]);
  const [currentSort, setSort] = React.useState("");

  const handleSort = (event) => {
    setSort(event.target.value);
  };

  const getCategoryS = async () => {
    const res = await axios.get(
      `http://localhost:8080/products/?category=products&sortBy=${currentSort}`
    );
    setData(res.data.data);
    setCategory(res.data.cats);
  };

  let search = "Products";

  useEffect(() => {
    getCategoryS();
  }, [currentSort]);

  return (
    <div className={styles.mainDiv}>
      <div>
        <div>
          <h1>You searched for “{search}”</h1>
        </div>
        <CategoryS category={category} />
      </div>
      <Filters />
      <ProductsContainer
        data={data}
        handleChange={handleSort}
        currentSort={currentSort}
      />
    </div>
  );
};

export default ProductsPage;

// export async function getServerSideProps(context) {

//   const res = await axios.get(`http://localhost:8080/products/?category=products&sortBy=${filterS.Sort}`);
//   let data=res.data;
//   return { props: { data } };
// }
