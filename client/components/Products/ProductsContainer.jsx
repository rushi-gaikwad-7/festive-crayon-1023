
import React from 'react'
import styles from "../../styles/products.module.css";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { Product } from "../../components/Products/product";


export const ProductsContainer = ({data,sort}) => {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.productsDiv}>
        <div>
          <p>Total Products:{' '}{data.length}</p>
          <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel id="demo-simple-select-label">Sort</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value=""
              label="Age"
              onChange={(e) => sort(e)}
            >
              <MenuItem value="random">New Arrivals</MenuItem>
              <MenuItem value="Low">Price-Low to High</MenuItem>
              <MenuItem value="High">Price-High to Low</MenuItem>
            </Select>
          </FormControl>
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
  )
}
