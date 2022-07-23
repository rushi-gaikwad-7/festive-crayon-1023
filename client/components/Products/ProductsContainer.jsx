import React from "react";
import styles from "../../styles/products.module.css";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Box from '@mui/material/Box';
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { Product } from "../../components/Products/product";

export const ProductsContainer = ({ data,currentSort,handleChange }) => {
 
  return (
    <div  className={styles.mainDiv}>
      <div className={styles.productsDiv}>
        <div>
          <h2>Total Products: {data.length}</h2>
          <Box sx={{ minWidth: 220 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Sort</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={currentSort}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value="Relevance">Relevance</MenuItem>
                <MenuItem value="Price -Low To High">Price -Low To High</MenuItem>
                <MenuItem value="Price -High To Low">Price -High To Low</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
        <div className={styles.ProductContainer}>
          {data.map((el, i) => {
            return (
              <div key={i}>
                <Product {...el} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
