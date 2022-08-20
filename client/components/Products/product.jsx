import React from "react";
import Button from "@mui/material/Button";
import styles from "../../styles/product.module.css";
import SimpleSlider from "../Products/ImageSlider";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Link from "next/link";
import { useRouter } from "next/router";
import IconButton from "@mui/material/IconButton";
import axios from "axios"
import { useSelector } from "react-redux";

export const Product = ({ Title, Price, Images, _id ,wishList}) => {
  const { auth } = useSelector((state) => state);

  const addToCart=async(_id)=>{
    const res= await axios.post(`/home/post/cart?proid=${_id}&userid=${auth.user._id}`)
    
  }

  const addToWishList=async(_id)=>{
    const res=await axios.post(`/products/wishlist/${_id}`)
  }

  const { asPath } = useRouter();
  return (
    <div className={styles.mainDiv}>
      <Link href={`${asPath}/product/${_id}`}>
        <div className={styles.productDiv}>
          <SimpleSlider data={Images} />
          <div className={styles.infoDiv}>
            <h3>₹ {Price}</h3>
            <p>{Title}</p>
          </div>
        </div>
      </Link>
      <div className={styles.hiddenDiv}>
        <div>
          <Button onClick={()=>addToCart(_id)} variant="contained">ADD TO BASKET</Button>
         {!wishList? <IconButton onClick={()=>addToWishList(_id)}
            color="primary"
            size="large"
            aria-label="add to shopping cart"
          >
            <FavoriteIcon />
          </IconButton>:<></>}
        </div>
      </div>
    </div>
  );
};
