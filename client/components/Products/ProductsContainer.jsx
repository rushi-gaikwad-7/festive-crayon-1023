import React, { useRef, useState } from "react";
import styles from "../../styles/products.module.css";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { Product } from "../../components/Products/product";
import { useRouter } from "next/router";

export const ProductsContainer = ({ data, wishList ,count }) => {
  const router = useRouter();


  const [sortBy, SetSort] = useState('');

  const handleChange = (event) => {
    router.replace({
      query: { ...router.query, sortBy: event.target.value },
    });
    SetSort(event.target.value);
   
  };
  return (
    <div className={styles.mainDiv}>
      <div className={styles.productsDiv}>
        <div>
          <h2> Products:{' '}{data.length}{' '}Out of{' '}{count || 0} </h2>
          {!wishList ? (
            <Box sx={{ minWidth: 220 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">sortBy</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={sortBy}
                  label="sortBy"
                  onChange={handleChange}
                >
                  <MenuItem value={0}>Relevance</MenuItem>
                  <MenuItem value={-1}>Price -High To Low</MenuItem>
                  <MenuItem value={1}>Price -Low To High</MenuItem>
                </Select>
              </FormControl>
            </Box>
          ) : (
            <></>
          )}
        </div>
        <div className={styles.ProductContainer}>
          {data.map((el, i) => {
            return (
              <div key={i}>
                <Product wishList={wishList} {...el} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
