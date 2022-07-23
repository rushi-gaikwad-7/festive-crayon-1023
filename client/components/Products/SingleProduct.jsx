import styles from "../../styles/Des.module.css";
import Image from "next/image";
import Youlike from "../../components/descom/Youlike";

export default function Description({data}) {

  const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };
console.log(data)

  return (
    <>
      <div className={styles.descontain}>
        <div className={styles.destitle}>{data.Title}</div>
        <div className={styles.desmain}>
          <div className={styles.desimgs}>

            {data.Images.map((el) => {

              return (
                <div className={styles.zoomeffectcontainer}>
                  <div className={styles.desout}>
                    <Image
                      className={styles.deselem}
                      loader={myLoader}
                      src={el}
                      width={600}
                      height={1000}
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
                <h2>{data.Price}</h2>
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

              <img src={data.Images[0]} />

            </div>
            <p className={styles.color}>
              Color: <span>{data.Color}</span>
            </p>
            <div className={styles.size}>
              <p>Size:</p>
              <p>Size Guide</p>
            </div>
            <div className={styles.sizelist}>
              {data.Sizes.map((el) => {
                return <button>{el}</button>;
              })}
            </div>
            <div className={styles.addbasket}>
              <button>ADD TO BASKET</button>
            </div>

            <div className={styles.favshare}>
              <div>
                <span></span>Add to Favourites
              </div>
              <div>
                <span></span>Share
              </div>
            </div>
            <div className={styles.promotion}>
              <div>PROMOTION OFFER</div>
              <div>
                FLAT 10% Off on 2499 & above orders, code- MAX10 | Get Rs.100
                off on orders above 999 (first purchase only), code- NEW100{" "}
                <span>Browse promotion</span>
              </div>
            </div>
            <div className={styles.collect}>
              <img src="https://i1.lmsin.net/website_images/static-pages/brand_exp/brand2images/icons/cc.svg" />
              <div className={styles.click}>
                <h4>Click & Collect</h4>
                <p>
                  Order this product now and collect it from a store of your
                  choice. <span>Learn more</span>
                </p>
              </div>
            </div>
            <div className={styles.collect}>
              <img src="https://i1.lmsin.net/website_images/static-pages/brand_exp/brand2images/icons/installment-black-24.svg" />
              <div className={styles.click}>
                <h4>Pay in installments</h4>
                <p>
                  Pay in easy installments on orders of ₹ 3,000 or more.
                  Available for select banks.<span>Learn more</span>
                </p>
              </div>
            </div>
            <div className={styles.collect}>
              <img src="https://i1.lmsin.net/website_images/static-pages/brand_exp/brand2images/icons/order-black-24.svg" />
              <div className={styles.click}>
                <h4>When will I receive my order?</h4>
                <div className={styles.pin}>
                  <input placeholder="Enter Your Pincode" />
                  <button>Check</button>
                </div>
              </div>
            </div>
            <div className={styles.bor}></div>
            <div className={styles.overview}>
              <h5>Overview</h5>
              <p>
                Add versatility to your basic look with this casual printed
                T-shirt designed with a crew neckline and half sleeves.
              </p>
              <ul className={styles.list}>
                <li>Type : Crew Neck</li>
                <li>Design : Printed</li>
                <li>Sleeve Length : Half Sleeves</li>
                <li>Fabric : Cotton</li>
                <li>Fit : Regular Fit</li>
                <li>Care Instructions : Machine Wash</li>
                <li>Model Wears : Size M,has Height 6'0" and Chest 38"</li>
                <li>
                  Return Policy : This product is returnable within 30 days of
                  delivery
                </li>
                <li>Product : T-shirt</li>
                <li>Country of Origin : India</li>
                <li>
                  Manufactured By : Lifestyle Int Pvt Ltd, 77 Degree Town
                  Centre, Building No. 3, West Wing, Off HAL Airport Road,
                  Yamlur, Bangalore-560037
                </li>
                <li>
                  For Consumer Complaints Contact : Manager Commercial,77 Degree
                  Town Centre, Building No. 3, West Wing, Off HAL Airport Road,
                  Yamlur PO., Bangalore-560037, Phone: 1800-123-1444,
                  help.in@maxfashion.com
                </li>
                <li>Net Quantity : 1 N</li>
              </ul>
              <p className={styles.read}>Read less ^</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.youlike}>
        <h2>You may also like</h2>
        <Youlike Type={data.Type} />
      </div>
      <div className={styles.youlike}>
        <h2>Customers Also Viewed</h2>
        <Youlike Type={data.Type} />
      </div>
      <div className={styles.reviews}>
        <div className={styles.re}>
          <div>Reviews</div>

          <div className={styles.write}>
            <img src="https://i1.lmsin.net/website_images/static-pages/brand_exp/brand2images/icons/write-review.svg" />
            <div>What do you think about this product ?</div>
            <button>WRITE A REVIEW</button>
            <div></div>

          </div>
        </div>
      </div>
    </>
  );
}

