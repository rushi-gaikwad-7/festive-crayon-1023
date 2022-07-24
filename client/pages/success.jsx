import { Button } from "@mui/material";
import Link from "next/link";
import React from "react";
import styles from "../styles/success.module.css";

const success = () => {
  return (
    <div className={`${styles.mainSuccess}`}>
      <div className={`${styles.card}`}>
        <div
          style={{
            borderRadius: "200px",
            height: "200px",
            width: "200px",
            background: " #F8FAF5",
            margin: "0 auto",
          }}
        >
          <i className={`${styles.checkmark}`}>✓</i>
        </div>
        <h1>Success</h1>
        <p>
          We received your purchase request
          <br /> we'll be in touch shortly!
          <br />{" "}
          <Button>
            <Link href="/">
              <a>Back to Shopping</a>
            </Link>
          </Button>
        </p>
      </div>
    </div>
  );
};

export default success;
