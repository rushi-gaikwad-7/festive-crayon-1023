import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../../styles/products.module.css";
import { Product } from "../../components/product";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import axios from "axios";

var cateGory = [1, 2, 3, 4, 5];

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

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

let search = "men";
const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};
const index = () => {
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === "string" ? value.split(",") : value);
  };

  const [category, setCategory] = useState([]);
  const getCategoryS = async (_id) => {
    const res =await axios.get(`http://localhost:8080/products/:${_id}`)
    
    setCategory(res.data)
  };
  useEffect(() => {
    getCategoryS(all);
  }, []);
  return (
    <div className={styles.mainDiv}>
      <div>
        <div>
          <h1>You searched for “{search}”</h1>
        </div>
        <div className={styles.categoryDiv}>
          <p>Shop For</p>
          {category.map((el, i) => {
            return (
              <div onClick={()=>getCategoryS(el._id)} key={i}>
                <Image
                  loader={myLoader}
                  src={el.img}
                  alt="Picture of the author"
                  width={50}
                  height={50}
                />
                <p>{el.name}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.filterDiv}>
        <div>
          <div>
            {cateGory.map((el, i) => {
              return (
                <div key={i}>
                  <div>
                    <FormControl sx={{ m: 1, width: 200 }}>
                      <InputLabel id="demo-multiple-checkbox-label">
                        Tag
                      </InputLabel>
                      <Select
                        labelId="demo-multiple-checkbox-label"
                        id="demo-multiple-checkbox"
                        multiple
                        value={personName}
                        onChange={handleChange}
                        input={<OutlinedInput label="Tag" />}
                        renderValue={(selected) => selected.join(", ")}
                        MenuProps={MenuProps}
                      >
                        {names.map((name) => (
                          <MenuItem key={name} value={name}>
                            <Checkbox checked={personName.indexOf(name) > -1} />
                            <ListItemText primary={name} />
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className={styles.productsDiv}>
        <div>
          <p>92 product</p>
          <FormControl sx={{ m: 1, width: 300 }}>
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
        {category.map((el, i) => {
          return (
            <div key={i}>
              <Product />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default index;
