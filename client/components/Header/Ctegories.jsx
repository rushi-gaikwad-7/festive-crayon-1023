import { Box } from "@mui/material";
import Link from "next/link";
import React from "react";
import { LinkA } from "./Navbar";
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
      {data.map((item) => {
        return (
          <>
            <div className="link">
              <LinkA href="#">{item.title}</LinkA>
              {/* <div>Hello</div> */}
              <Box className={`dropdown`}>
                {item.cate &&
                  item.cate.map((sub) => (
                    <div>
                      <Link
                        key={`${sub}-${Math.random()}`}
                        href={`#`}
                        className="dropdown-items"
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
