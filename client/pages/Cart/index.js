
import Link from "next/link"

const Cart = () => {

    return <>
        <div id="container" style={{ border: "1px solid", display: "flex", width: "96%", margin: "auto",gap:"20px" }}>

            <div id="left" style={{ border: "1px solid red", width: "820px" }}>
                <div id="left-inner-div" style={{ margin: "10px" }}>
                    <div id="cart-div" style={{ display: "flex" }}>
                        <div><img style={{ width: "100px", margin: "auto", border: "1px solid red" }} src="https://lmsin.net/cdn-cgi/image/h=294,w=196,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011358126-Blue-NAVY-1000011358126-27062022_01-2100.jpg" alt="" /></div>
                        <div style={{ height: "60px", marginTop: "-15px", marginLeft: "20px", fontFamily: "Arial,sans-serif" }}>
                            <h4 style={{ fontSize: "14px", fontFamily: "Arial,sans-serif" }}>Name</h4>
                            <h4 style={{ fontSize: "14px", fontFamily: "Arial,sans-serif" }}>Price</h4>
                            <div style={{ display: "flex", height: "20px", marginTop: "-20px", fontSize: "12px", fontFamily: "Arial,sans-serif" }}><p style={{ color: "grey" }}>Color:</p><p>&nbsp;&nbsp;Blue</p></div>
                            <div style={{ display: "flex", fontFamily: "Arial,sans-serif", marginTop: "0px", fontSize: "12px", fontFamily: "Arial,sans-serif" }}><p style={{ color: "grey" }}>Size:</p><p>&nbsp;&nbsp;&nbsp; L</p></div>
                        </div>
                    </div>
                    <div id="delivery" style={{ display: "flex", fontSize: "14px", justifyContent: "space-between" }}>
                        <div style={{ fontSize: "14px" }}>Delivery in:Enter Pincode</div>
                        <div>
                            <select style={{ backgroundColor: "#ecedeb", border: "none", height: "25px", borderRadius: "5px" }}>D
                                <option>Qty:1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                            </select>
                        </div>
                    </div>
                    <hr></hr>
                    <div id="Remove" style={{ display: "flex" }}>
                        <div><button style={{ width: "350px", height: "45px", backgroundColor: "White", border: "none", color: "blue" }}>Remove</button></div>
                        <div><button style={{ width: "350px", height: "45px", backgroundColor: "White", border: "none", color: "blue" }}>Move to favourites</button></div>
                    </div>
                </div>
            </div>

            <div id="right" style={{height:"auto" }}>
                <div class="sidbx" style={{ border: "5px solid pink",width: "400px"}}>

                    <div class="inputBx">
                        <span>Deliver To&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <input placeholder="Enter Pincode" type="" name="" />&nbsp;
                        <button>Check</button>
                        <p style={{backgroundColor:"#FDEDEB",padding:"10px"}}>Enter pin code in box above for delivery estimates and charges</p>

                    </div>
                    <div class="inputBx" style={{display:"flex"}}>
                        <div class="imgBx">
                            <img src="https://www.maxfashion.in/static/icons/gift-box.png" />
                        </div>
                        <div class="details">
                            <h2>Offers For You ! <button>Select</button></h2>
                            <p>Choose and apply voucher in 2 simple steps</p>
                        </div>
                    </div>

                    <div class="inputBx">
                        <div class="in1">
                            <div class="in2">
                                <span>Total MRP</span>
                                <span>Rs. price</span>
                            </div>
                            <div class="in2">
                                <span>Shipping Charge</span>
                                <span>Free</span>
                            </div>
                        </div>

                        <div class="in1">
                            <div class="in2">
                                <span>Total</span>
                                <span>Rs. Price</span>
                            </div><Link href="/">
                                <button>Checkout now</button></Link>
                            <div class="notice">
                                <p style={{backgroundColor:"#efefef",padding:"10px"}}>Shipping charges might vary based on pincode delivery location</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    </>
}
export default Cart;