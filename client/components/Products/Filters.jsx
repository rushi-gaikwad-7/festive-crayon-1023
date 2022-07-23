import React from "react";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import styles from "../../styles/products.module.css";

const Prices = [
  "₹ 0-₹ 499",
  "₹ 500-₹ 999",
  "₹ 1000-₹ 1499",
  "₹ 1500-₹ 1999",
  "₹ 2000-& Above",
];
const Colors = ["Red", "Black", "White", "Yellow", "Green", "Pink"];
const Sizes = ["X", "M", "L", "XL", "S", "XXL"];

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

export const Filters = ({handleColors,Color}) => {
  const [Price, setPrices] = React.useState([]);

  const [Size, setSizes] = React.useState([]);

  const handlePrice = (event) => {
    const {
      target: { value },
    } = event;
    setPrices(typeof value === "string" ? value.split(",") : value);
  };

 

  const handleSizes = (event) => {
    const {
      target: { value },
    } = event;
    setSizes(typeof value === "string" ? value.split(",") : value);
  };


  return (
    <div className={styles.filterDiv}>
      <div>
        <div>
          <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel id="demo-multiple-checkbox-label">Price</InputLabel>
            <Select
              labelId="demo-multiple-checkbox-label"
              id="demo-multiple-checkbox"
              multiple
              value={Price}
              onChange={handlePrice}
              input={<OutlinedInput label="Tag" />}
              renderValue={(selected) => selected.join(", ")}
              MenuProps={MenuProps}
              
            >
              {Prices.map((name) => (
                <MenuItem key={name} value={name}>
                  <Checkbox checked={Price.indexOf(name) > -1} />
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel id="demo-multiple-checkbox-label">Color</InputLabel>
            <Select
              labelId="demo-multiple-checkbox-label"
              id="demo-multiple-checkbox"
              multiple
              value={Color}
              onChange={handleColors}
              input={<OutlinedInput label="Tag" />}
              renderValue={(selected) => selected.join(", ")}
              MenuProps={MenuProps}
            >
              {Colors.map((name) => (
                <MenuItem key={name} value={name}>
                  <Checkbox checked={Color.indexOf(name) > -1} />
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel id="demo-multiple-checkbox-label">Size</InputLabel>
            <Select
              labelId="demo-multiple-checkbox-label"
              id="demo-multiple-checkbox"
              multiple
              value={Size}
              onChange={handleSizes}
              input={<OutlinedInput label="Size" />}
              renderValue={(selected) => selected.join(", ")}
              MenuProps={MenuProps}
            >
              {Sizes.map((name) => (
                <MenuItem key={name} value={name}>
                  <Checkbox checked={Size.indexOf(name) > -1} />
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </div>
    </div>
  );
};
