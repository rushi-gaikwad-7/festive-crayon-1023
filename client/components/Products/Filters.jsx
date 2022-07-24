import React from "react";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";
import styles from "../../styles/products.module.css";
import { SetRange } from "../../redux/action/products.actions";
import {useDispatch} from "react-redux"


const Prices = [
  "₹ 0-₹ 499",
  "₹ 500-₹ 999",
  "₹ 1000-₹ 1499",
  "₹ 1500-₹ 1999",
  "₹ 2000-& Above",
];
const Colors = [
  "Blue",
  "Green",
  "Grey",
  "Multicolour",
  "Pink",
  "Purple",
  "Red",
  "White",
  "Yellow",
];
const Sizes = [
  "28",
  "30",
  "32",
  "34",
  "38",
  "40",
  "L",
  "M",
  "S",
  "XL",
  "XS",
  "XXL",
];

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

function valuetext(value) {
  return `${value}$`;
}

export const Filters = ({ handleColors, handleSizes, Color, Size }) => {
 
  const dispatch = useDispatch();

  const [value, setValue] = React.useState([0, 2000]);
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
    dispatch(SetRange(value));
  };


  return (
    <div className={styles.filterDiv}>
      <div>
        <div className={styles.PriceRange}>
          <span>Price : ₹ {value[0]} To ₹ {value[1]}</span>
          <Box sx={{ width: 300 }}>
            <Slider
              min={50}
              max={3000}
              getAriaLabel={() => "Price range"}
              value={value}
              onChange={handleChange}
              valueLabelDisplay="auto"
              getAriaValueText={valuetext}
            />
          </Box>
        </div>
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
        <FormControl sx={{ m: 1, width: 200 }}>
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
  );
};
