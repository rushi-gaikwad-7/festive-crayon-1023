import { Box } from "@mui/material";
import Link from "next/link";
import React from "react";
import { LinkA } from "../../styles/Navbar";
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
    <div className="navbarCategory">
      <ul>
        {data.map((item) => {
          return (
            <>
              <LinkA href="#" className="link">
                <div>Women</div>
                {/* <div>Hello</div> */}
                <Box className={`dropdown-menu`}>
                  {item.cate &&
                    item.cate.map((sub, index) => (
                      <Link
                        key={`${sub}-${Math.random()}`}
                        href={`#`}
                        className="dropdown-items"
                      >
                        {sub}
                      </Link>
                    ))}
                </Box>
              </LinkA>
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default Category;
