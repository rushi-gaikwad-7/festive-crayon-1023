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
            cate: ["lips", "face", "eyes"],
        },
        {
            title: "Men",
            cate: ["face brushes", "eyes brushes"],
        },
        {
            title: "Girls",
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
                    <>
                        <div className={styles.link}>
                            <Link href="#">{item.title}</Link>
                            {/* <div>Hello</div> */}
                            <Box className={`${styles.dropdown}`}>
                                {item.cate &&
                                    item.cate.map((sub) => (
                                        <div>
                                            <Link
                                                key={`${sub}-${Math.random()}`}
                                                href={`#`}
                                                className={styles.dropdownItems}
                                            >
                                                {sub}
                                            </Link>
                                        </div>
                                    ))}
                            </Box>
                        </div>
                    </>
                );
            })}
        </div>
    );
};

export default Category;
