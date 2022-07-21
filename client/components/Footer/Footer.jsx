import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.footerInfo}>
        <div className={styles.infoItems}>
          <p>Women</p>
          <a href="/">
            Dresses & Jumpsuits
          </a>
          <a href="/">
            Sportswear
          </a>
          <a href="/">
            Bottoms
          </a>
          <a href="/">
            Winterwear
          </a>
          <a href="/">
            Ethnicwear
          </a>
          <a href="/">
            Lingerie
          </a>
          <a href="/">
            Sleepwear
          </a>
          <a href="/">
            Accessories
          </a>
          <a href="/">
            Shoes
          </a>
        </div>

        <div className={styles.infoItems}>
          <p>Men</p>
          <a href="/">
            Tops
          </a>
          <a href="/">
            Bottoms
          </a>
          <a href="/">
            Sportswear
          </a>
          <a href="/">
            Winterwear
          </a>
          <a href="/">
            Accessories
          </a>
          <a href="/">
            Shoes
          </a>
        </div>

        <div className={styles.infoItems}>
          <p>Boys</p>
          <a href="/">
            Tops
          </a>
          <a href="/">
            Bottoms
          </a>
          <a href="/">
            Indian Wear
          </a>
          <a href="/">
            Winter wear
          </a>
          <a href="/">
            Essentials
          </a>
          <a href="/">
            Accessories
          </a>
          <a href="/">
            Shoes
          </a>
        </div>

        <div className={styles.infoItems}>
          <p>Girls</p>
          <a href="/">
            Tops
          </a>
          <a href="/">
            Bottoms
          </a>
          <a href="/">
            Indian Wear
          </a>
          <a href="/">
            Winter wear
          </a>
          <a href="/">
            Essentials
          </a>
          <a href="/">
            Accessories
          </a>
          <a href="/">
            Shoes
          </a>
        </div>

        <div className={styles.infoItems}>
          <p>Explore</p>
          <a href="/">
            Offers
          </a>
          <a href="/">
            Magazine
          </a>
        </div>
      </div>

      <div className={styles.copyright}>

        

      </div>
    </div>
  );
};

export default Footer;