
import React from 'react'
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import styles from "../../styles/products.module.css";
import filterdata from "../../pages/products/db.json";



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
export const Filters = () => {

    const [personName, setPersonName] = React.useState([]);

    const handleChange = (event) => {
      const {
        target: { value },
      } = event;
      setPersonName(typeof value === "string" ? value.split(",") : value);
    };
    
    const filterData = filterdata.filterData;
  return (
    <div className={styles.filterDiv}>
        <div>
          <div>
            {filterData.map((el, i) => {
              return (
                <div key={i}>
                  <div>
                    <FormControl sx={{ m: 1, width: 300 }}>
                      <InputLabel id="demo-multiple-checkbox-label">
                        {el.title}
                      </InputLabel>
                      <Select
                        labelId="demo-multiple-checkbox-label"
                        id="demo-multiple-checkbox"
                        multiple
                        value={personName}
                        onChange={handleChange}
                        input={<OutlinedInput label={el.title} />}
                        renderValue={(selected) => selected.join(", ")}
                        MenuProps={MenuProps}
                      >
                        {el.subOption.map((name) => (
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
  )
}
