import React from "react";
import Image from 'next/image'
import styles from "../../styles/products.module.css"
var arr = [{img:"https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/MAX-Friday/MAX2.O/MAX_SubCatImg/maxwomen-young.jpg",category:"Young"}];

let cat="men"
const myLoader = ({ src, width, quality }) => {
  return `https://example.com/${src}?w=${width}&q=${quality || 75}`
}
const index = () => {
  return (
    <div className={styles.mainDiv}>
    <div className={styles.categoryDiv}>
      <h1>You searched for “{cat}”</h1>
      <div>
        <p>Shop For</p>
        {arr.map((el, i) => {
          return(
          <div key={i}>
            <Image
              loader={myLoader}
              src={el.img}
              alt="Picture of the author"
              width={50}
              height={50}
            />
            <p>{el.category}</p>
          </div>)
        })}
      </div>
    </div>
    </div>
  );
};

export default index;
