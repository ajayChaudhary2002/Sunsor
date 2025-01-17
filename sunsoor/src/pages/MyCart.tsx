import React, { useState } from "react";
import HeaderForProduct from "../components/HeaderForProduct";
import style from "../styles/MyCart.module.css";
import img1 from "../assetss/myCartImg1.png";
import img2 from "../assetss/myCartImg2.png";
import img3 from "../assetss/myCartImg3.png";
import { FiMinus } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import coupon from "../assetss/coupon.png";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
const MyCart = () => {
  const inCart = true;
  const obj1 = [
    {
      img: img1,
      title: "Sunsor Chakki Atta",
      price: "Rs. 329.99",
    },
    {
      img: img2,
      title: "Sunsor Chakki Atta",
      price: "Rs. 200.99",
    },
    {
      img: img3,
      title: "Sunsor Chakki Atta",
      price: "Rs. 100.99",
    },
  ];
  useEffect(() => {
    // Scroll to the top of the page
    window.scrollTo(0, 0);
  }, []);
  return (
    <div style={{ overflow: "hidden" }}>
      <HeaderForProduct inCart={inCart} />
      <div className={style.MyCart}>
        <div className={style.MyCart_div1}>
          <p className={style.MyCart_div1_p1}>Home</p>
          <p className={style.MyCart_div1_}>{">"}</p>
          <p className={style.MyCart_div1_p2}>My Cart</p>
        </div>
        <p className={style.MyCart_Heading}>My Cart</p>
        <div className={style.MyCart_myCartToCheckout}>
          <div className={style.MyCart_myCartToCheckout_div1}>
            <div className={style.MyCart_myCartToCheckout_div1_number}>1</div>
            <p className={style.MyCart_myCartToCheckout_div1_text}>My Cart</p>
          </div>
          <div className={style.MyCart_myCartToCheckout_line}></div>
          <div>
            <div className={style.MyCart_myCartToCheckout_div3}>
              <div className={style.MyCart_myCartToCheckout_div3_number}>2</div>
              <p className={style.MyCart_myCartToCheckout_div3_text}>
                Checkout
              </p>
            </div>
          </div>
        </div>

        <div className={style.MyCart_mainDivContainer}>
          {/* LEFT */}
          <div className={style.MyCart_mainDivContainer_leftPart}>
            <div className={style.MyCart_mainDivContainer_leftPart_div1}>
              <div className={style.MyCart_mainDivContainer_leftPart_div1_left}>
                <input
                  type="checkbox"
                  className={
                    style.MyCart_mainDivContainer_leftPart_div1_left_checkbox
                  }
                />
                <p className={style.MyCart_mainDivContainer_leftPart_div1_text}>
                  Select All
                </p>
              </div>
              <p className={style.MyCart_mainDivContainer_leftPart_div1_text}>
                Remove
              </p>
            </div>
            <div
              className={style.MyCart_mainDivContainer_leftPart_div1_breaker}
            ></div>
            <div
              className={
                style.MyCart_mainDivContainer_leftPart_div1_mainContent
              }
            >
              {obj1.map((item, index) => {
                return (
                  <div
                    className={
                      style.MyCart_mainDivContainer_leftPart_div1_mainContent_items
                    }
                  >
                    <div
                      className={
                        style.MyCart_mainDivContainer_leftPart_div1_mainContent_items_left
                      }
                    >
                      <input
                        type="checkbox"
                        checked
                        className={
                          style.MyCart_mainDivContainer_leftPart_div1_mainContent_items_left_checkbox
                        }
                      />
                      <img
                        src={item.img}
                        alt=""
                        className={
                          style.MyCart_mainDivContainer_leftPart_div1_mainContent_items_left_img
                        }
                      />
                      <div
                        className={
                          style.MyCart_mainDivContainer_leftPart_div1_mainContent_items_left_priceAndTitle
                        }
                      >
                        <p
                          className={
                            style.MyCart_mainDivContainer_leftPart_div1_mainContent_items_left_priceAndTitle_title
                          }
                        >
                          {item.title}
                        </p>
                        <p
                          className={
                            style.MyCart_mainDivContainer_leftPart_div1_mainContent_items_left_priceAndTitle_price
                          }
                        >
                          {item.price}
                        </p>
                      </div>
                    </div>
                    <div
                      className={
                        style.MyCart_mainDivContainer_leftPart_div1_mainContent_items_right
                      }
                    >
                      <div
                        className={
                          style.MyCart_mainDivContainer_leftPart_div1_mainContent_items_right_negative
                        }
                      >
                        {" "}
                        <FiMinus color="#8B8B8B" />{" "}
                      </div>
                      <p
                        className={
                          style.MyCart_mainDivContainer_leftPart_div1_mainContent_items_right_quantity
                        }
                      >
                        1
                      </p>
                      <div
                        className={
                          style.MyCart_mainDivContainer_leftPart_div1_mainContent_items_right_positive
                        }
                      >
                        {" "}
                        <FaPlus color="#FAFAFA" />
                      </div>
                      <div
                        className={
                          style.MyCart_mainDivContainer_leftPart_div1_mainContent_items_right_cross
                        }
                      >
                        {" "}
                        <RxCross2 color="#CE2225" />{" "}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {/* RIGHT */}
          <div className={style.MyCart_mainDivContainer_rightPart}>
            {/* TOP PART */}
            <div className={style.MyCart_mainDivContainer_rightPart_topDiv}>
              <p
                className={style.MyCart_mainDivContainer_rightPart_topDiv_para1}
              >
                Have a Coupon?
              </p>
              <div
                className={
                  style.MyCart_mainDivContainer_rightPart_topDiv_enterCode
                }
              >
                <img
                  src={coupon}
                  alt=""
                  className={
                    style.MyCart_mainDivContainer_rightPart_topDiv_enterCode_coupon
                  }
                />
                <input
                  type="text"
                  className={
                    style.MyCart_mainDivContainer_rightPart_topDiv_enterCode_input
                  }
                  placeholder="Click here to enter your code"
                />
              </div>
              <div
                className={style.MyCart_mainDivContainer_rightPart_topDiv_apply}
              >
                Apply
              </div>
            </div>

            {/* BOTTOM PART */}
            <div className={style.MyCart_mainDivContainer_rightPart_bottomDiv}>
              <p
                className={
                  style.MyCart_mainDivContainer_rightPart_bottomDiv_para1
                }
              >
                Payment Details
              </p>
              <div
                className={
                  style.MyCart_mainDivContainer_rightPart_bottomDiv_paymentDiv
                }
              >
                <p
                  className={
                    style.MyCart_mainDivContainer_rightPart_bottomDiv_paymentDiv_text
                  }
                >
                  Total
                </p>
                <p
                  className={
                    style.MyCart_mainDivContainer_rightPart_bottomDiv_paymentDiv_text2
                  }
                >
                  Rs.629.00
                </p>
              </div>
              <NavLink to="/checkout" style={{ width: "100%" }}>
                <div
                  className={
                    style.MyCart_mainDivContainer_rightPart_bottomDiv_button
                  }
                >
                  Select Address to Proceed
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MyCart;
