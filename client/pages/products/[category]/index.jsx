import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from 'next/link'
import axios from "axios";
import { useRouter } from 'next/router'
import styles from "../../../styles/products.module.css";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import filterdata from "../db.json";
import { ProductsContainer } from "../../../components/Products/ProductsContainer";

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

const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

const ProductsPage = () => {

  const {query} = useRouter()

  let search = query.category;
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
    const res = await axios.get(`http://localhost:8080/products/${query.category}`);
    setCategory(res.data.cats);
    setData(res.data.data);
  };

const handleSort=(e)=>{
  SetFilter({...filterS,Sort:e.target.value})
}

  useEffect(() => {
    getCategoryS("all");
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
           <Link href={`${query.category}/${el.name}`}>
              <div onClick={() => getCategoryS(el._id)} key={i}>
                <Image
                  loader={myLoader}
                  src={el.img}
                  alt="Picture of the author"
                  width={50}
                  height={50}
                />
                <p>{el.name}</p>
              </div>
           </Link>
            );
          })}
        </div>
      </div>

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
      <ProductsContainer data={data}/>
    </div>
  );
};

export default ProductsPage;
