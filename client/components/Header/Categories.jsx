import Box from "@mui/material/Box";
import Link from "next/link";
import React from "react";
import styles from "../../styles/navbar.module.css";

// import { LinkA } from "./Navbar";
// import "./subNavbar.css";

const Category = () => {
  const data = [
    {
      title: "Women",
      link: "womens",
      cate: ["lips", "face", "eyes"],
    },
    {
      title: "Men",
      link: "mens",
      cate: ["face brushes", "eyes brushes"],
    },
    {
      title: "Girls",
      link: "girls",
      cate: [
        "moisturizer",
        "sunscreen",
        "setting mists",
        "coffee culture range",
        "sheet mask combo",
        "masks",
      ],
    },
    {
      title: "Boys",
      link: "boys",
      cate: [
        "sugar merch station",
        "makeup kits",
        "bestsellers",
        "sugar sets",
        "value sets",
      ],
    },
  ];

  return (
    <div className={styles.navbarCategory}>
      {data.map((item) => {
        return (
          //   <>
          <div key={`${item.title}-${Math.random()}`} className={styles.link}>
            <Link href={`/landing/${item.link}`}>
              <a className={`${styles.link} ${styles.navLink}`}>{item.title}</a>
            </Link>
            {/* <div>Hello</div> */}
            <Box className={`${styles.dropdown}`}>
              {item.cate &&
                item.cate.map((sub) => (
                  <div key={`${Math.random()}-${sub}`}>
                    <Link href={`#`}>
                      <a
                        className={`${styles.dropdownItems} ${styles.navLink}`}
                      >
                        {sub}
                      </a>
                    </Link>
                  </div>
                ))}
            </Box>
          </div>
          //   </>
        );
      })}
    </div>
  );
};

export default Category;
