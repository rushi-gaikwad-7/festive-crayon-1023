import React, { useState } from "react";
import styles from "../../styles/products.module.css";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Box from '@mui/material/Box';
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { Product } from "../../components/Products/product";
import { useRouter } from "next/router";

export const ProductsContainer = ({data,wishList,}) => {

  const router=useRouter();

  const [sortBy,SetSort]=useState(0);

const  handleSort=(e)=>{
  SetSort(e.target.value)
  router.replace({
    query: { ...router.query,sortBy:e.target.value},
      });
}

  return (
  
     <div  className={styles.mainDiv}>
      <div className={styles.productsDiv}>
        <div>
          <h2>Total Products: {data.length}</h2>
          {!wishList?<Box sx={{ minWidth: 220 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Sort</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={e.target.name}
                label="Sort"
                onChange={handleSort}
              >
                <MenuItem name='Relevance' value={0}>Relevance</MenuItem>
                <MenuItem name='Price -High To Low' value={-1}>Price -High To Low</MenuItem>
                <MenuItem name='Price -Low To High' value={1}>Price -Low To High</MenuItem>
              </Select>
            </FormControl>
          </Box>:<></>}
        </div>
        <div className={styles.ProductContainer}>
          {data.map((el, i) => {
            return (
              <div key={i}>
                <Product  wishList={wishList}{...el} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
