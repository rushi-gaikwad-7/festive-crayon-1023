
import React, { useEffect } from "react";
import { useRouter } from 'next/router'
import styles from "../../../../styles/products.module.css";
import { ProductsContainer } from "../../../../components/Products/ProductsContainer";
import { Filters } from "../../../../components/Products/Filters";
import { CategoryS } from "../../../../components/Products/CategoryS";
import {useSelector,useDispatch} from "react-redux"
import { GetData } from "../../../../redux/action/products.actions";

const ProductsPage = () => {

  const {query} = useRouter()

  let search = query.subCategory;

  const dispatch=useDispatch();

  const Range = useSelector((state) => state.ProductReducer.Range);

  const { data, category, isLoading, isError } = useSelector(
    (state) => state.ProductReducer.Data
  );
 
  const [currentSort, setSort] = React.useState("");
  const [Color, setColors] = React.useState([]);
  const [Size, setSizes] = React.useState([]);


let url=`http://localhost:8080/products/?category=${query.subCategory}&sortBy=${currentSort}&Color=${Color}&Size=${Size}&MinPrice=${Range[0]}&MaxPrice=${Range[1]}`

  const handleSort = (event) => {
    setSort(event.target.value);
  };

  const handleColors = (event) => {
    const {
      target: { value },
    } = event;
    setColors(typeof value === "string" ? value.split(",") : value);
  };

  const handleSizes = (event) => {
    const {
      target: { value },
    } = event;
    setSizes(typeof value === "string" ? value.split(",") : value);
  };

  useEffect(() => {
    dispatch(GetData(url));
  }, [url]);
  return (
    <div className={styles.mainDiv}>
    {isLoading ? (
      <isLoading />
    ) : (
      <>
        {isError ? (
          <div></div>
        ) : (
          <>
            <div>
              <div>
                <h1>You searched for “{search}”</h1>
              </div>
              <CategoryS category={category} />
            </div>
            <Filters
              handleColors={handleColors}
              Color={Color}
              Size={Size}
              handleSizes={handleSizes}
            />
            <ProductsContainer
              data={data}
              handleChange={handleSort}
              currentSort={currentSort}
            />
          </>
        )}
      </>
    )}
  </div>
  );
};

export default ProductsPage;


  