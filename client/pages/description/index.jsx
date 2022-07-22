import styles from "../../styles/Des.module.css";
import Image from "next/image";
import axios from "axios";

export default function Description({ data }) {
  let sizearr = ["XS", "S", "M", "L", "XL", "XXL"];
  const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };
  return (
    <>
      <div className={styles.descontain}>
        <div className={styles.destitle}>{data[0].title}</div>
        <div className={styles.desmain}>
          <div className={styles.desimgs}>
            {data[0].imgs.map((el) => {
              return (
                <div className={styles.zoomeffectcontainer}>
                  <div className={styles.desout}>
                    <Image
                      className={styles.deselem}
                      loader={myLoader}
                      src={el}
                      width={600}
                      height={800}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <div className={styles.desparas}>
            <div className={styles.price}>
              <div>
                <h5>₹</h5>
                <h2>899</h2>
              </div>
              <p>Inclusive of all taxes</p>
            </div>
            <div className={styles.inclu}>
              <p>Free shipping on all orders</p>
              <div className={styles.incluimg}>
                <img src="https://i1.lmsin.net/website_images/static-pages/brand_exp/brand2images/icons/points-16.svg" />
                <p>Earn 4 Points</p>
                <img
                  style={{ height: "14px" }}
                  src="https://img.icons8.com/ios/72/help.png"
                />
              </div>
            </div>
            <div className={styles.smallimg}>
              <img src={data[0].imgs[0]} />
            </div>
            <p className={styles.color}>
              Color: <span>{data[0].color}</span>
            </p>
            <div className={styles.size}>
              <p>Size:</p>
              <p>Size Guide</p>
            </div>
            <div className={styles.sizelist}>
              {sizearr.map((el) => {
                return <button>{el}</button>;
              })}
            </div>
            <div className={styles.addbasket}>
              <button>ADD TO BASKET</button>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}

export const getServerSideProps = async () => {
  let res = await axios.get(" http://localhost:3004/des");
  let data = res.data;
  return {
    props: { data },
  };
};
