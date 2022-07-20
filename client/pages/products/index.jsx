import React from "react";
import Image from "next/image";
import styles from "../../styles/products.module.css";
import { Product } from "../../components/product";
var arr = [
  { img: "https://dummyimage.com/300/09f/fff.png", category: "Young" },
  {
    img: "https://dummyimage.com/300/09f/fff.png",
    category: "Young",
  },
  {
    img: "https://dummyimage.com/300/09f/fff.png",
    category: "Young",
  },
  {
    img: "https://dummyimage.com/300/09f/fff.png",
    category: "Young",
  },
  {
    img: "https://dummyimage.com/300/09f/fff.png",
    category: "Young",
  },
  {
    img: "https://dummyimage.com/300/09f/fff.png",
    category: "Young",
  },
  {
    img: "https://images.unsplash.com/file-1635990775102-c9800842e1cdimage",
    category: "Young",
  },
  {
    img: "https://images.unsplash.com/file-1635990775102-c9800842e1cdimage",
    category: "Young",
  },
  {
    img: "https://images.unsplash.com/file-1635990775102-c9800842e1cdimage",
    category: "Young",
  },
  {
    img: "https://images.unsplash.com/file-1635990775102-c9800842e1cdimage",
    category: "Young",
  },
];

var category = [1, 2, 3, 4, 5];

let cat = "men";
const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};
const index = () => {
  return (
    <div className={styles.mainDiv}>
      <div>
        <div>
          <h1>You searched for “{cat}”</h1>
        </div>
        <div className={styles.categoryDiv}>
          <p>Shop For</p>
          {arr.map((el, i) => {
            return (
              <div key={i}>
                <Image
                  loader={myLoader}
                  src={el.img}
                  alt="Picture of the author"
                  width={50}
                  height={50}
                />
                <p>{el.category}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.filterDiv}>
        <div>
          <div>
            {category.map((el, i) => {
              return (
                <div key={i}>
                  {/* <Form.Select aria-label="Default select example">
                    <option>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select> */}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className={styles.productsDiv}>
        <div></div>
        {<div>
          <Product />
          </div>}
      </div>
    </div>
  );
};

export default index;
