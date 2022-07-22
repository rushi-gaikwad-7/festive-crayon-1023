import React from "react";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import styles from "../styles/product.module.css";
export const Product = () => {
  const handleChange=()=>{
  }
  return (
    <div className={styles.mainDiv}>
      <div className={styles.Product}>
        <div className={styles.imgDiv}>
          <div id={styles.wishList}>
            <img
              src="https://cdn-icons.flaticon.com/png/512/4885/premium/4885360.png?token=exp=1658390728~hmac=65ee0a5aa5c712f022b128456ab3f7aa"
              alt=""
            />
          </div>
          <div id={styles.status}>New</div>
        </div>
        <div className={styles.infoDiv}>
          <h3>500$</h3>
          <p>MAX Women Printed Regular Fit Casual Jacket</p>
        </div>
      </div>
      <div className={styles.hiddenDiv}>
        <div id={styles.filterDiv}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={10}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        {'-'}
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={10}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        </div>
        <Button className={styles.btn} variant="contained">ADD TO BASKET</Button>
      </div>
    </div>
  );
};
