import styles from "../../styles/Payment.module.css";
import Link from "next/link";
import axios from "axios";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
export default function Payment() {
  const { auth } = useSelector((state) => state);
  let [data, setdata] = useState([]);
  let [total, settotal] = useState(0);
  useEffect(() => {
    getcart();
  }, [auth]);

  let getcart = async () => {
    let res = await axios.get(`/home/cart/${auth.user._id}`);
    let cart = await res.data;
    console.log(cart);
    let total = cart[0].carts.reduce((acc, el) => {
      return acc + el.Price;
    }, 0);
    setdata(cart[0].carts);
    settotal(total);
  };

  return (
    <>
      <div id={styles.head}>
        <div>
          <img
            class="img"
            src="https://i1.lmsin.net/website_images/in/logos/header/logo-max.svg"
          />
        </div>
        <div>
          <p>Call 1800-123-1444</p>
          <p>Monday - Saturday, 09:00AM - 07:00PM</p>
        </div>
      </div>
      <div id={styles.content}>
        <div id={styles.leftcontent}>
          <div id={styles.shippingmethod}>
            <div>
              <h2>Select a shipping method</h2>
            </div>
            <div id={styles.getproduct}>
              <div>
                <p>Home Delivery</p>
                <p>Get your product delivered to your home.</p>
              </div>
              <div>
                <p>Click & Collect</p>
                <p>Collect your order from a store of your choice.</p>
              </div>
            </div>
          </div>
          <div id={styles.shippingform}>
            <h3>Add your shipping address</h3>
            <form id={styles.form}>
              <div>
                <label for="Name">Full Name</label>
                <br />
                <input
                  id="addingFunctionality"
                  class="checkoutinput"
                  type="text"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label for="Name">Mobile Number</label>
                <br />
                <input
                  class="checkoutinput"
                  type="number"
                  placeholder="Enter your Mobile Number"
                />
              </div>
              <div>
                <label for="pincode">Pincode</label>
                <br />
                <input
                  class="checkoutinput"
                  type="number"
                  placeholder="Enter your pincode"
                />
              </div>
              <div>
                <label for="city">City</label>
                <br />
                <input
                  class="checkoutinput"
                  type="text"
                  placeholder="Enter your City Or Town"
                />
              </div>
              <div>
                <label for="">Building name or number</label>
                <br />
                <input
                  class="checkoutinput"
                  type="text"
                  placeholder=" Enter Building Name"
                />
              </div>
              <div>
                <label for="">Street name or number</label>
                <br />
                <input
                  class="checkoutinput"
                  type="text"
                  placeholder="Flat/house number,Floor,Building"
                />
              </div>
              <div>
                <label for="">Landmark</label>
                <br />
                <input
                  class="checkoutinput"
                  type="text"
                  placeholder="Landmark"
                />
              </div>
              <div>
                <label for="">Address</label>
                <div>
                  <input type="radio" />
                  <label for="">Home</label>
                  <input type="radio" />
                  <label for=""></label>Office
                </div>
              </div>
            </form>
          </div>
          <div>
            <h2 style={{ marginTop: "30px" }}>Select a payment method</h2>
            <div class={styles.paymentmethod}>
              <div>
                <input type="radio" />
                <img
                  height="25px"
                  src="https://i1.lmsin.net/website_images/ae/checkout/card-payment.svg"
                />
              </div>
              <div>
                <h4>Credit/Debit Card</h4>
                <p>Use your Credit or Debit card</p>
              </div>
            </div>
            <div className={styles.carddetail}>
              <div className={styles.cardradio}>
                <div>
                  {" "}
                  <input type={"radio"} /> <label>Credit Card</label>
                </div>
                <div>
                  {" "}
                  <input type={"radio"} /> <label>Debit Card</label>
                </div>
              </div>
              <div className={styles.cardform}>
                <div className={styles.num}>
                  <p>Card Number</p>
                  <input
                    type={"text"}
                    placeholder="Enter your 16 digit card number"
                  />
                </div>
                <div className={styles.num}>
                  <p>Name on Card</p>
                  <input type={"text"} placeholder="Name on Card" />
                </div>
                <div className={styles.excon}>
                  <div className={styles.expiry}>
                    <p>Expiry Date</p>
                    <div>
                      <select name="" id="">
                        <option value="MM">MM</option>
                        <option value="08">08</option>
                        <option value="">09</option>
                        <option value="">10</option>
                      </select>
                      <select name="" id="">
                        <option value="YYYY">YYYY</option>
                        <option value="">2022</option>
                        <option value="">2023</option>
                        <option value="">2025</option>
                      </select>
                    </div>
                  </div>
                  <div className={styles.cvvdiv}>
                    <div className={styles.cvv}>
                      <p>CVV</p>
                      <img
                        style={{ height: "16px" }}
                        src="https://cdn-icons-png.flaticon.com/512/1828/1828940.png"
                      />
                    </div>
                    <input type={"password"} placeholder="CVV" />
                  </div>
                </div>
              </div>
            </div>

            <div class={styles.paymentmethod}>
              <div>
                <input type="radio" />
                <img
                  height="35px"
                  src="https://i1.lmsin.net/website_images/in/checkout/logo-emi.png"
                />
              </div>
              <div>
                <h4>EMI</h4>
                <p>Available on orders above Rs3,000</p>
              </div>
            </div>
            <div class={styles.paymentmethod}>
              <div>
                <div>
                  <input type="radio" />
                  <img
                    height="35px"
                    src="https://i1.lmsin.net/website_images/ae/checkout/logo-paypal.png"
                  />
                </div>
              </div>
              <div>
                <h4>PayPal</h4>
                <p>Pay now with your PayPal account</p>
              </div>
            </div>
            <div class={styles.paymentmethod}>
              <div>
                <div>
                  <input type="radio" />
                  <img
                    height="25px"
                    src="https://i1.lmsin.net/website_images/ae/checkout/logo-cash.png"
                  />
                </div>
              </div>
              <div>
                <h4>Cash On Delivery</h4>
                <p>+ Rs49</p>
              </div>
            </div>
            <div class={styles.paymentmethod}>
              <div>
                <input type="radio" />
                <img
                  width="70px;"
                  src="https://i1.lmsin.net/website_images/in/checkout/logo-netbanking.svg"
                />
              </div>
              <div>
                <h4>Net Banking</h4>
                <p>Pay by your preferred bank account.</p>
              </div>
            </div>
            <div class={styles.paymentmethod}>
              <div>
                <input type="radio" />
                <img
                  width="30px"
                  height="30px"
                  src="https://i1.lmsin.net/website_images/in/my-account/ico-payment-wallet.png"
                />
              </div>
              <div>
                <h4>Wallets</h4>
                <p>Pay with your preferred wallet.</p>
              </div>
            </div>
            <div class={styles.paymentmethod}>
              <div>
                <input type="radio" />
                <img src="https://i1.lmsin.net/website_images/payment/upi.png" />
              </div>
              <div>
                <h4>UPI</h4>
                <p>Pay with your preferred UPI Id.</p>
              </div>
            </div>
            <div class={styles.paymentmethod}>
              <img
                height="20px"
                src="https://i1.lmsin.net/website_images/common/images/basket/ico-gift.png"
              />
              <p>Got a Promo Code?</p>
            </div>
            <div class={styles.paymentmethod}>
              <img
                height="20px"
                src="https://i1.lmsin.net/website_images/in/giftcards/gift-card-icon.svg"
              />
              <p>Have a gift Card??</p>
            </div>
            <div id={styles.paynow}>
              <div>
                <p>
                  By clicking on Proceed to Payment, you agree to our Terms and
                  Conditions
                </p>
              </div>
              <div>
                <Link href="/payment/otp">
                  <button id={styles.btnform}>Pay Now</button>
                </Link>
              </div>
            </div>

            <div id={styles.terms}>
              <div id={styles.comodo}>
                <div>
                  <img
                    height="50px"
                    src="https://i1.lmsin.net/website_images/common/images/logos/logo-comodo.png"
                  />
                </div>
                <div>
                  <p>
                    Your credit card details are securely encrypted and passed
                    directly to our PCI DSS compliant Payment Gateway for
                    processing. We only store your credit card's last 4 digits
                    and the expiration date. Your traffic to this page is
                    secured using either a 256-bit or 128-bit SSL certificate
                    depending on your browser version.
                  </p>
                </div>
              </div>
              <div>
                <p>© 2021 RNA Intellectual Property Limited.</p>
                <p>Privacy Policy - Terms of Use - Terms & Conditions</p>
              </div>
            </div>
          </div>
        </div>

        <div id={styles.rightcontent}>
          <div id={styles.ordersummery}>
            <div>
              <p>Your order summary</p>
            </div>
            <div className={styles.ordercon}>
              {data.map((el) => {
                return (
                  <div className={styles.orderel}>
                    <div className={styles.orderimg}>
                      <img src={el.Images[0]} />
                    </div>
                    <div className={styles.orderdes}>
                      <p>MAX</p>
                      <p className={styles.ordertitle}>{el.Title}</p>
                      <div>
                        <p>Qty:1</p>
                        <p>
                          Price :{" "}
                          <span className={styles.ru}> ₹ {el.Price}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className={styles.pricy}>
              <p>Subtotal:</p>
              <p id={styles.price}> ₹{total}</p>
            </div>
            <div className={styles.pricy}>
              <p>Standard Ground Shipping:</p>
              <p>Free</p>
            </div>
            <div className={styles.pricy}>
              <p>Total</p>
              <p id={styles.total}> ₹{total}</p>
            </div>
          </div>
          <div>
            <p>Ways you can pay:</p>
            <div id={styles.paymentimage}>
              <div>
                <img
                  height="30px"
                  src="https://dd311b21463486cea6e6-ba57f67b7c05f7cbe632f35f74bd7340.ssl.cf3.rackcdn.com/Checkout/logo-visa.png"
                />
                <img
                  height="30px"
                  src="https://i1.lmsin.net/website_images/ae/checkout/logo-mc.png"
                />
                <img
                  height="30px"
                  src="https://i1.lmsin.net/website_images/in/checkout/logo-rupay.svg"
                />
                <img
                  height="40px"
                  src="https://i1.lmsin.net/website_images/ae/checkout/logo-cash.png"
                />
              </div>
              <div>
                <img
                  height="40px"
                  src="https://i1.lmsin.net/website_images/in/checkout/logo-netbanking.svg"
                />
                <img
                  height="40px"
                  src="https://i1.lmsin.net/website_images/in/checkout/logo-wallet.svg"
                />
                <img
                  height="40px"
                  src="https://i1.lmsin.net/website_images/in/checkout/logo-rewards.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
