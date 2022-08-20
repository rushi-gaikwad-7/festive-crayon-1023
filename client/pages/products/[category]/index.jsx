import React, { useState } from "react";
import axios from 'axios'
import { useRouter, } from 'next/router'
import styles from "../../../styles/products.module.css";
import { ProductsContainer } from "../../../components/Products/ProductsContainer";
import { Filters } from "../../../components/Products/Filters";
import { CategoryS } from "../../../components/Products/CategoryS";
import Loading from "../../../components/alert/Loading";
import { Button } from "@mui/material";
import Alert from 'react-bootstrap/Alert';
import { Box } from "@mui/system";

const ProductsPage = ({ Category, Count, Data, isLoading, isError }) => {

  const router = useRouter();
  const {query}=useRouter();
  const [page, setPage] = useState(1);
  const [show, setShow] = useState(true);
  
  const handlePage = () => {
    router.replace({ query: { ...router.query, pageNo: page + 1 } });
    setPage(page + 1);
  };

  return (
    <div className={styles.mainDiv}>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {isError ? (
              <Alert  variant="danger" onClose={() => setShow(false)} dismissible>
              <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
              <p>
              503 Service Unavailable
              </p>
            </Alert>
          ) : (
            <>
              <div>
                <div>
                  <h1>You searched for “{query.currentCat}”</h1>
                </div>
                <CategoryS path="products" category={Category} />
              </div>
              <Filters />
              <ProductsContainer data={Data} wishList={0} count={Count} />
                {Count&& <Box textAlign='center' onClick={() => handlePage()} className={styles.Loading}>
                <Button variant="contained" disableElevation>
                Load More
                </Button>
                </Box>}
            </>
          )}
        </>
      )}
    </div>
  );
};
export default ProductsPage;

export const getServerSideProps = async (context) => {
  try {
    const { currentCat } = context.query;
    let isLoading=true;
    let response = await axios.get(`products/category/${currentCat}`);
    const url=context.resolvedUrl.split('?')
    let res = await axios.get(`products/?${url[1]}`);
    let Data = res.data.data ;
    let Count = res.data.count ;
    let Category = response.data;
    isLoading = false;
    let isError = false;
    return {
      props: { Category, Count, Data, isLoading, isError },
    };
  } catch (e) {
    let Data = [];
    let Category = [];
    let Count = 0;
    let isLoading = false;
    let isError = true;
    return {
      props: { Category,Count, Data, isLoading, isError },
    };
  }
};
