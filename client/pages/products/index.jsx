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
  const [filterS, SetFilter] = useState({});
  const getCategoryS = async () => {
    const res = await axios.get(`http://localhost:8080/products/?category=products&sortBy=${filterS.Sort}`);

  }

const filterData = filterdata.filterData;

const ITEM_HEIGHT = 25;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
let search = "Products";
const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};
const ProductsPage = () => {
  const [personName, setPersonName] = React.useState([]);

  console.log(personName)
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === "string" ? value.split(",") : value);
  };
  const [data, setData] = useState([]);
  const [category, setCategory] = useState([]);
  const [filterS,SetFilter]=useState({})
  const getCategoryS = async (_id) => {
    const res = await axios.get(`http://localhost:8080/products/${_id}`, { params: { sort:filterS.sort } });


    setCategory(res.data.cats);
    setData(res.data.data);
  };


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
      </div>          
    </div>
  );
};

export default ProductsPage;
