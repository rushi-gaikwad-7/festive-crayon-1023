import React from "react";
import Button from "@mui/material/Button";
import styles from "../../styles/product.module.css";
import SimpleSlider from "../Products/ImageSlider";

export const Product = ({ Title, Price, Images}) => {
  const handleChange = () => {};
  return (
    <div className={styles.mainDiv}>
      <div className={styles.productDiv}>
        <SimpleSlider data={Images} />
        <div className={styles.infoDiv}>
          <h3>₹ {Price}</h3>
          <p>{Title}</p>
          <div className={styles.hiddenDiv}>
          <div>
          <Button variant="contained">
            ADD TO BASKET
          </Button>
          <div id={styles.wishList}>
            <img
              src="https://cdn-icons.flaticon.com/png/512/4885/premium/4885360.png?token=exp=1658390728~hmac=65ee0a5aa5c712f022b128456ab3f7aa"
              alt=""
            />
          </div>
          </div>
        </div>
        </div>
       
      </div>
    </div>
  );
};
