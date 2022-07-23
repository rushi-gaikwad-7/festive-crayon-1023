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
  const [Color, setColors] = React.useState([]);
  const [Size, setSizes] = React.useState([]);
 


 

  const handleSort = (event) => {
    setSort(event.target.value);
  };

  const handleColors = (event) => {
    const {
      target: { value },
    } = event;
    setColors(typeof value === "string" ? value.split(",") : value);
  };

  const handleSizes = (event) => {
    const {
      target: { value },
    } = event;
    setSizes(typeof value === "string" ? value.split(",") : value);
  };

  const getCategoryS = async () => {
    const res = await axios.get(
      `http://localhost:8080/products/?category=products&sortBy=${currentSort}&Color=${Color}&Size=${Size}&MinPrice=${Range[0]}&MaxPrice=${Range[1]}`
    );
    setData(res.data.data);
    setCategory(res.data.cats);
  };


  useEffect(() => {
    getCategoryS();
  }, [currentSort,Color,Size]);

  return (
    <div className={styles.mainDiv}>
      <div>
        <div>
          <h1>You searched for “{search}”</h1>
        </div>
        <CategoryS category={category} />
      </div>
      <Filters  handleColors={handleColors} Color={Color} Size={Size} handleSizes={handleSizes} />
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
