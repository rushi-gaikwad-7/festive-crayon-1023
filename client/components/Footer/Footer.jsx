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

        <div className={styles.talkToUs}>
          <div className={styles.callLogo}>
            <img src="https://vectorified.com/image/phone-call-vector-35.png" alt="noor" />
          </div>
          <div className={styles.tts}>
            <p>Talk to us</p>
            <h4>1800-123-1444</h4>
          </div>
        </div>
        
        <div className={styles.talkToUs}>
          <div className={styles.callLogo}>
            <img src="https://tse1.mm.bing.net/th?id=OIP.0rJsKZqSjyrTYaMJHNREXwHaHa&pid=Api&P=0" alt="noor" />
          </div>
          <div className={styles.tts}>
            <p>Helpcentre</p>
            <h4>help.maxfashion.com</h4>
          </div>
        </div>

        <div className={styles.talkToUs}>
          <div className={styles.callLogo}>
            <img src="https://tse3.mm.bing.net/th?id=OIP.uxi9u-9Dey1QUY21qCkslAHaFS&pid=Api&P=0" alt="noor" />
          </div>
          <div className={styles.tts}>
            <p>Write to us</p>
            <h4>help.in@maxfashion.com</h4>
          </div>
        </div>

        
        <div className={styles.socialNetwork}>
          <div className={styles.fb}><img src="https://tse2.mm.bing.net/th?id=OIP.i60Qb5xgvBgPTy_fg8RMogHaNS&pid=Api&P=0" alt="fb" /></div>
          <div className={styles.fb}><img src="https://tse3.mm.bing.net/th?id=OIP.8sCwTY2Uo02qXMFGn8g3xwHaGl&pid=Api&P=0" alt="twitter" /></div>
          <div className={styles.fb}><img src="https://tse4.mm.bing.net/th?id=OIP.HiyfIgzWDDSZdUPj47g6EQHaHa&pid=Api&P=0" alt="insta" /></div>
        </div>

      </div>
    </div>
  );
};

export default Footer;