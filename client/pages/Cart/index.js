import styles from "../../styles/Cart.module.css";
import { data } from "./data";

export default function Cart() {
  return (
    <>
      <div className={styles.shop}>Your Shopping Basket</div>
      <div className={styles.len}>
        <p>{data.length} Products</p>
      </div>
      <div className={styles.cartcontainer}>
        <div className={styles.cartitem}>
          {data.map((el) => {
            return (
              <div className={styles.cartcontain}>
                <div className={styles.cartup}>
                  <div className={styles.cartimg}>
                    <img src={el.Images[0]} />
                  </div>
                  <div className={styles.cartdes}>
                    <p className={styles.carttitle}>{el.Title}</p>
                    <p className={styles.cartprice}>₹{el.Price}</p>
                    <p className={styles.cartcolor}>
                      Color : <span>{el.Color}</span>
                    </p>
                    <p className={styles.cartcolor}>
                      Size : <span>L</span>
                    </p>
                  </div>
                </div>
                <div className={styles.cartdate}>
                  <div>
                    {" "}
                    <p>
                      <span className={styles.calen}></span> Delivery in{" "}
                      <span className={styles.days}>5-7 days</span>
                    </p>
                  </div>
                  <div>
                    <select className={styles.qty} name="" id="">
                      <option value="Qty">Qty: 1</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>
                  </div>
                </div>
                <div className={styles.cartremove}>
                  <button>Remove</button>
                  <button>Move to favourites</button>
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles.delivery}>
          <div className={styles.delito}>
            <p>Deliver to</p>

            <input placeholder="Enter pincode" />

            <button>Check</button>
          </div>
          <div className={styles.offers}>
            <img src="https://www.maxfashion.in/static/icons/gift-box.png" />
            <div className={styles.apply}>
              <div>
                <p>Offers for you !</p>
                <p>Select</p>
              </div>
              <p>Choose and apply voucher in 2 simple steps</p>
            </div>
          </div>
          <div className={styles.mrpdiv}>
            <div className={styles.to}>
              <p>Total MRP</p>
              <p>₹1298</p>
            </div>
            <div className={styles.pr}>
              <p>Shipping charge</p>
              <p>Free</p>
            </div>
            <div className={styles.total}>
              <p>Total</p>
              <p>₹1298</p>
            </div>
            <button>Checkout now</button>
            <div className={styles.ship}>
              Shipping charges might vary based on pincode delivery location
            </div>
          </div>
          <div className={styles.landmark}>
            <div>
              <span></span>
              <p>Landmark Reward points</p>
              <button>Login</button>
            </div>
            <p className={styles.para}>
              Tap here to log in and enrol for Landmark Rewards. Earn with every
              purchase and redeem for discounts.
            </p>
            <p className={styles.learn}>Learn more</p>
          </div>
        </div>
      </div>
    </>
  );
}
