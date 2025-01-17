import React from "react";
import style from "../styles/Checkout.module.css";
import HeaderForProduct from "../components/HeaderForProduct";
import style2 from "../styles/MyCart.module.css";
import { useState } from "react";
import Footer from "../components/Footer";
import { NavLink, useNavigate } from "react-router-dom";
const CheckOut = () => {
  const inCart = true;
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    country: "",
    city: "",
    state: "",
    zipCode: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData); // Handle the form data (e.g., send it to an API)
  };
  const obj = [
    {
      price: "Rs. 330.00",
    },
    {
      price: "Rs. 200.00",
    },
    {
      price: "Rs. 100.00",
    },
  ];
  const navigate = useNavigate();
  return (
    <div style={{ overflow: "hidden" }}>
      <HeaderForProduct inCart={inCart} />
      <div className={style.checkoutContainer}>
        {/* SAME AS MY CART */}
        <div className={style2.MyCart_div1}>
          <p className={style2.MyCart_div1_p1}>Home</p>
          <p className={style2.MyCart_div1_}>{">"}</p>
          <p className={style2.MyCart_div1_p2}>My Cart</p>
        </div>
        <p className={style2.MyCart_Heading}>Checkout</p>
        <div className={style2.MyCart_myCartToCheckout}>
          <div className={style2.MyCart_myCartToCheckout_div1}>
            <div className={style2.MyCart_myCartToCheckout_div1_number}>1</div>
            <p className={style2.MyCart_myCartToCheckout_div1_text}>My Cart</p>
          </div>
          <div className={style2.MyCart_myCartToCheckout_line}></div>
          <div>
            <div className={style2.MyCart_myCartToCheckout_div3}>
              <div
                className={style2.MyCart_myCartToCheckout_div3_number}
                style={{ color: "#CE2225", border: "1.57px solid #CE2225" }}
              >
                2
              </div>
              <p
                className={style2.MyCart_myCartToCheckout_div3_text}
                style={{ color: "#CE2225" }}
              >
                Checkout
              </p>
            </div>

            {/* END */}
          </div>
        </div>
        <div className={style.checkoutContainer_mainContent}>
          {/* LEFT PART */}
          <div className={style.checkoutContainer_mainContent_leftPart}>
            <div
              className={
                style.checkoutContainer_mainContent_leftPart_Notification
              }
            >
              <p
                className={
                  style.checkoutContainer_mainContent_leftPart_Notification_para1
                }
              >
                Delivery By Monday, 23 Nov
              </p>
              <div
                className={
                  style.checkoutContainer_mainContent_leftPart_Notification_paras
                }
              >
                <p
                  className={
                    style.checkoutContainer_mainContent_leftPart_Notification_para2
                  }
                >
                  John SIngh
                </p>
                <p
                  className={
                    style.checkoutContainer_mainContent_leftPart_Notification_para3
                  }
                >
                  Plot no 4, Shikshak colony Near Hp Gas agency, Sawali road
                  High, Uttarakhand, 248171
                </p>
              </div>
            </div>
            <p className={style.checkoutContainer_mainContent_leftPart_Heading}>
              Add Your Delivery Address
            </p>

            {/* FORM STARTS HERE */}
            <form
              onSubmit={handleSubmit}
              className={style.checkoutContainer_mainContent_leftPart_Form}
            >
              {/* First Name and Last Name */}
              <div
                className={
                  style.checkoutContainer_mainContent_leftPart_Form_Div
                }
              >
                <div
                  className={
                    style.checkoutContainer_mainContent_leftPart_Form_commonContainer
                  }
                >
                  <label
                    className={
                      style.checkoutContainer_mainContent_leftPart_Form_text
                    }
                  >
                    First Name:
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className={
                        style.checkoutContainer_mainContent_leftPart_Form_input
                      }
                    />
                  </label>
                </div>

                <div
                  className={
                    style.checkoutContainer_mainContent_leftPart_Form_commonContainer
                  }
                >
                  <label
                    className={
                      style.checkoutContainer_mainContent_leftPart_Form_text
                    }
                  >
                    Last Name:
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className={
                        style.checkoutContainer_mainContent_leftPart_Form_input
                      }
                    />
                  </label>
                </div>
              </div>

              {/* Email Address and Contact Number */}
              <div
                className={
                  style.checkoutContainer_mainContent_leftPart_Form_Div
                }
              >
                <div
                  className={
                    style.checkoutContainer_mainContent_leftPart_Form_commonContainer
                  }
                >
                  <label
                    className={
                      style.checkoutContainer_mainContent_leftPart_Form_text
                    }
                  >
                    Email Address:
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={
                        style.checkoutContainer_mainContent_leftPart_Form_input
                      }
                    />
                  </label>
                </div>

                <div
                  className={
                    style.checkoutContainer_mainContent_leftPart_Form_commonContainer
                  }
                >
                  <label
                    className={
                      style.checkoutContainer_mainContent_leftPart_Form_text
                    }
                  >
                    Contact Number:
                    <input
                      type="text"
                      name="contactNumber"
                      value={formData.contactNumber}
                      onChange={handleChange}
                      className={
                        style.checkoutContainer_mainContent_leftPart_Form_input
                      }
                    />
                  </label>
                </div>
              </div>

              {/* Country and City */}
              <div
                className={
                  style.checkoutContainer_mainContent_leftPart_Form_Div
                }
              >
                <div
                  className={
                    style.checkoutContainer_mainContent_leftPart_Form_commonContainer
                  }
                >
                  <label
                    className={
                      style.checkoutContainer_mainContent_leftPart_Form_text
                    }
                  >
                    Country:
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className={
                        style.checkoutContainer_mainContent_leftPart_Form_input
                      }
                    ></select>
                  </label>
                </div>

                <div
                  className={
                    style.checkoutContainer_mainContent_leftPart_Form_commonContainer
                  }
                >
                  <label
                    className={
                      style.checkoutContainer_mainContent_leftPart_Form_text
                    }
                  >
                    City:
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className={
                        style.checkoutContainer_mainContent_leftPart_Form_input
                      }
                    />
                  </label>
                </div>
              </div>

              {/* State and Zip Code */}
              <div
                className={
                  style.checkoutContainer_mainContent_leftPart_Form_Div
                }
              >
                <div
                  className={
                    style.checkoutContainer_mainContent_leftPart_Form_commonContainer
                  }
                >
                  <label
                    className={
                      style.checkoutContainer_mainContent_leftPart_Form_text
                    }
                  >
                    State:
                    <select
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      className={
                        style.checkoutContainer_mainContent_leftPart_Form_input
                      }
                    >
                      <option value="">Select State</option>{" "}
                      {/* Default option */}
                    </select>
                  </label>
                </div>

                <div
                  className={
                    style.checkoutContainer_mainContent_leftPart_Form_commonContainer
                  }
                >
                  <label
                    className={
                      style.checkoutContainer_mainContent_leftPart_Form_text
                    }
                  >
                    Zip Code:
                    <input
                      type="text"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleChange}
                      className={
                        style.checkoutContainer_mainContent_leftPart_Form_input
                      }
                    />
                  </label>
                </div>
              </div>

              {/* Checkbox */}
              <div
                className={
                  style.checkoutContainer_mainContent_leftPart_Form_check
                }
              >
                <input type="checkbox" />
                <p
                  className={
                    style.checkoutContainer_mainContent_leftPart_Form_check_text
                  }
                >
                  Ship to a different address?
                </p>
              </div>

              {/* Note Section */}
              <div
                className={
                  style.checkoutContainer_mainContent_leftPart_Form_AddNote
                }
              >
                <p
                  className={
                    style.checkoutContainer_mainContent_leftPart_Form_text
                  }
                >
                  Note
                </p>
                <textarea
                  className={
                    style.checkoutContainer_mainContent_leftPart_Form_check_TextArea
                  }
                />
              </div>
            </form>

            {/* FORM ENDS HERE */}
          </div>

          {/* RIGHT PART */}

          <div className={style.checkoutContainer_mainContent_rightPart}>
            <p
              className={style.checkoutContainer_mainContent_rightPart_heading}
            >
              My Order Summary
            </p>
            <div
              className={
                style.checkoutContainer_mainContent_rightPart_heading_div1
              }
            >
              {obj.map((val, index) => {
                return (
                  <div
                    key={index}
                    className={
                      style.checkoutContainer_mainContent_rightPart_heading_div1_data
                    }
                  >
                    <div
                      className={
                        style.checkoutContainer_mainContent_rightPart_heading_div1_data_left
                      }
                    >
                      <p
                        className={
                          style.checkoutContainer_mainContent_rightPart_heading_div1_data_left_para
                        }
                      >
                        1x
                      </p>
                      <p
                        className={
                          style.checkoutContainer_mainContent_rightPart_heading_div1_data_left_title
                        }
                      >
                        Sunsor Chakki Atta
                      </p>
                    </div>
                    <div
                      className={
                        style.checkoutContainer_mainContent_rightPart_heading_div1_data_right
                      }
                    >
                      <p
                        className={
                          style.checkoutContainer_mainContent_rightPart_heading_div1_data_right_price
                        }
                      >
                        {val.price}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div
              className={
                style.checkoutContainer_mainContent_rightPart_heading_div2
              }
            >
              <div
                className={
                  style.checkoutContainer_mainContent_rightPart_heading_div2_1
                }
              >
                <p
                  className={
                    style.checkoutContainer_mainContent_rightPart_heading_div2_text
                  }
                >
                  Subtotal
                </p>
                <p
                  className={
                    style.checkoutContainer_mainContent_rightPart_heading_div2_text2
                  }
                >
                  Rs. 630.00
                </p>
              </div>
              <div
                className={
                  style.checkoutContainer_mainContent_rightPart_heading_div2_1
                }
              >
                <p
                  className={
                    style.checkoutContainer_mainContent_rightPart_heading_div2_text
                  }
                >
                  Subtotal
                </p>
                <p
                  className={
                    style.checkoutContainer_mainContent_rightPart_heading_div2_text2
                  }
                >
                  Rs. 630.00
                </p>
              </div>
              <div
                className={
                  style.checkoutContainer_mainContent_rightPart_heading_div2_1
                }
              >
                <p
                  className={
                    style.checkoutContainer_mainContent_rightPart_heading_div2_text
                  }
                >
                  Subtotal
                </p>
                <p
                  className={
                    style.checkoutContainer_mainContent_rightPart_heading_div2_text2
                  }
                >
                  Rs. 630.00
                </p>
              </div>
            </div>
            <div
              className={
                style.checkoutContainer_mainContent_rightPart_heading_div3
              }
            >
              <p
                className={
                  style.checkoutContainer_mainContent_rightPart_heading_div3_para
                }
              >
                Total
              </p>
              <p
                className={
                  style.checkoutContainer_mainContent_rightPart_heading_div3_price
                }
              >
                Rs.652.00
              </p>
            </div>

            <div
              className={
                style.checkoutContainer_mainContent_rightPart_heading_div4
              }
            >
              <p
                className={
                  style.checkoutContainer_mainContent_rightPart_heading_payment
                }
              >
                Payment
              </p>
              <div
                className={
                  style.checkoutContainer_mainContent_rightPart_heading_div4_
                }
              >
                <input type="checkbox" />
                <p>Debit / Credit Card</p>
              </div>
              <div
                className={
                  style.checkoutContainer_mainContent_rightPart_heading_div4_
                }
              >
                <input type="checkbox" />
                <p>Wallet</p>
              </div>
              <div
                className={
                  style.checkoutContainer_mainContent_rightPart_heading_div4_
                }
              >
                <input type="checkbox" />
                <p>Cash On Delivery</p>
              </div>
            </div>
            <NavLink to="/checkoutPopup">
              <div
                className={
                  style.checkoutContainer_mainContent_rightPart_heading_checkoutButton
                }
              >
                Checkout
              </div>
            </NavLink>
            <p
              className={
                style.checkoutContainer_mainContent_rightPart_heading_backToArt
              }
              onClick={() => navigate(-1)}
              style={{ cursor: "pointer" }}
            >
              Back to Cart
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CheckOut;
