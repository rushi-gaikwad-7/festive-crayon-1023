
import axios from "axios"
import React, { useEffect, useState } from "react";
import styles from "../../../styles/products.module.css";
import { ProductsContainer } from "../../../components/Products/ProductsContainer";
import { Filters } from "../../../components/Products/Filters";
import Loading from "../../../components/alert/Loading";
import LoadingButton from '@mui/lab/LoadingButton';
import { useRouter } from "next/router";


 const SearchPage = ({data}) => {

   const  {query}=useRouter();
   
   let isLoading=false;
   let isError=false;

    const [currentSort, setSort] = React.useState("");
    const [Color, setColors] = React.useState([]);
    const [Size, setSizes] = React.useState([]);
    const [currentPage,setPage]=useState(1)
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
    const handlePage=()=>{
      setPage(currentPage+1);
    }
  


  return (
    <div className={styles.mainDiv}>
      {isLoading ? (
        <h1>No Match Found</h1>
      ) : (
        <>
          {isError ? (
            <div></div>
          ) : (
            <>
              <div>
                <div>
                  <h1>You searched for “{query.input}”</h1>
                </div>
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
              <div  onMouseOver={()=>handlePage()} className={styles.Loading}>
              <LoadingButton
                loading
                loadingIndicator="Loading…"
                variant="contained"    
                size="large"   
              >
                Fetch data
              </LoadingButton>
              </div>
            </>
          )}
        </>
      )}
    </div>
  )
}
export default SearchPage;

export const getServerSideProps = async (context) => {
  
    try{
        let res = await axios.get(`http://localhost:8080/products/search/${context.query.input}`);
    let data = res.data;
    return {
        props: {data},
      };
    }catch(e){
        let data=[];
        return {
            props: {data},
          };
    }
   
  };