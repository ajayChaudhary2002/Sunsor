import React from "react";
import style from "../styles/Profile.module.css";
import HeaderForProduct from "../components/HeaderForProduct";
import style2 from "../styles/Checkout.module.css";
import pic1 from "../assetss/UserProfile.png";
import pic2 from "../assetss/cartProfile.png";
import pic3 from "../assetss/DeliveryProfile.png";
import pic4 from "../assetss/KeyProfile.png";
import pic5 from "../assetss/LogoutProfile.png";
import img1 from "../assetss/profileRightImg1 (1).png";
import img2 from "../assetss/profileRightImg1 (2).png";
import img3 from "../assetss/profileRightImg1 (3).png";
import Footer from "../components/Footer";
import img4 from "../assetss/Empty State.png";
import pic2Grey from "../assetss/CartProfileGrey.png";
import redKey from "../assetss/KeyProfileRed.png";
import deliveryRed from "../assetss/DeliveryProfileRed.png";
import { useEffect } from "react";
import { useState } from "react";
import redUserIcon from "../assetss/redProfileIcon.png";
const Profile = () => {
  const inCart = true;
  const showNavOption = true;
  const obj1 = [
    {
      img: img1,
      price: "Rs. 329.99",
    },
    {
      img: img2,
      price: "Rs. 200.99",
    },
    {
      img: img3,
      price: "Rs. 100.99",
    },
  ];
  useEffect(() => {
    // Scroll to the top of the page
    window.scrollTo(0, 0);
  }, []);
  const [currentSection, setCurrentSection] = useState("myProfile");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    country: "",
    city: "",
    state: "",
    zipCode: "",
    fullName: "",
    phoneNumber: "",
    streetAddress: "",
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
  const [wishList, setWishList] = useState<boolean>(false);
  const TABLET_WIDTH = 768;
  const [viewportWidth, setViewportWidth] = useState<number>(window.innerWidth);
  const [isMobileView, setIsMobileView] = useState(false);
      const [isDropdownOpen, setIsDropdownOpen] = useState(false);
      const [selectedItem, setSelectedItem] = useState("My Profile");
    
      // Check screen width when the component mounts and on resize
      useEffect(() => {
        const checkScreenWidth = () => {
          setIsMobileView(window.innerWidth <= 425); // Mobile view logic
        };
    
        checkScreenWidth(); // Check initial screen width
        window.addEventListener("resize", checkScreenWidth); // Re-check on resize
        return () => {
          window.removeEventListener("resize", checkScreenWidth); // Cleanup on unmount
        };
      }, []);
    const isTablet = viewportWidth <= TABLET_WIDTH;
  return (
    <div style={{ overflow: "hidden" }}>
      <HeaderForProduct
        inCart={inCart}
        showNavOption={showNavOption}
        setWishList={setWishList}
      />
      <div className={style.Profile}>
        <div className={style.ProfileTopPart}>
          <p className={style.ProfileTopPart_header}>My Profile</p>
          <div className={style.MyCart_div1}>
            <p className={style.MyCart_div1_p1}>Profile</p>
            <p className={style.MyCart_div1_}>{">"}</p>
            <p className={style.MyCart_div1_p2}>My Profile</p>
          </div>
        </div>

        {!wishList ? (
          <div className={style.Profile_mainContent}>
            {/* LEFT PART */}
            {!isMobileView ?<div className={style.Profile_mainContent_leftPart}>
              <div
                className={style.Profile_mainContent_leftPart_item}
                style={{
                  backgroundColor:
                    currentSection === "myProfile" ? "#FFF2F2" : "#ffffff",
                }}
                onClick={() => setCurrentSection("myProfile")}
              >
                <img
                  src={currentSection === "myProfile" ? redUserIcon : pic1}
                  alt=""
                />
                <p
                  className={style.Profile_mainContent_leftPart_item_text}
                  style={{
                    color: currentSection === "myProfile" ? "#CE2225" : "",
                  }}
                  onClick={() => setCurrentSection("myProfile")}
                >
                  My Profile
                </p>
              </div>
              <div
                className={style.Profile_mainContent_leftPart_item}
                style={{
                  backgroundColor:
                    currentSection === "orders" ? "#FFF2F2" : "#ffffff",
                }}
                onClick={() => setCurrentSection("orders")}
              >
                <img
                  src={currentSection === "orders" ? pic2 : pic2Grey}
                  alt=""
                />
                <p
                  className={style.Profile_mainContent_leftPart_item_text}
                  style={{
                    color: currentSection === "orders" ? "#CE2225" : "",
                  }}
                >
                  Orders
                </p>
              </div>
              <div
                className={style.Profile_mainContent_leftPart_item}
                style={{
                  backgroundColor:
                    currentSection === "address" ? "#FFF2F2" : "#ffffff",
                }}
                onClick={() => setCurrentSection("address")}
              >
                <img
                  src={currentSection === "address" ? deliveryRed : pic3}
                  alt=""
                />
                <p
                  className={style.Profile_mainContent_leftPart_item_text}
                  style={{
                    color: currentSection === "address" ? "#CE2225" : "",
                  }}
                >
                  Address
                </p>
              </div>
              <div
                className={style.Profile_mainContent_leftPart_item}
                style={{
                  backgroundColor:
                    currentSection === "password" ? "#FFF2F2" : "#ffffff",
                }}
                onClick={() => setCurrentSection("password")}
              >
                <img
                  src={currentSection === "password" ? redKey : pic4}
                  alt=""
                />
                <p
                  className={style.Profile_mainContent_leftPart_item_text}
                  style={{
                    color: currentSection === "password" ? "#CE2225" : "",
                  }}
                >
                  Password
                </p>
              </div>
              <div
                className={style.Profile_mainContent_leftPart_item}
                style={{
                  backgroundColor:
                    currentSection === "logout" ? "#FFF2F2" : "#ffffff",
                }}
                onClick={() => setCurrentSection("logout")}
              >
                <img src={pic5} alt="" />
                <p
                  className={style.Profile_mainContent_leftPart_item_text}
                  style={{
                    color: currentSection === "logout" ? "#CE2225" : "",
                  }}
                >
                  Logout
                </p>
              </div>
            </div>:


            <div  className={style.Profile_mainContentDropDown}> 
            <div
                className={style.Profile_mainContent_leftPart_item}
                style={{
                  backgroundColor:
                    "#FFF2F2"
                }}
                onClick={() => {setCurrentSection("myProfile"); setIsDropdownOpen(prev=>!prev)}}
              >
                <img
                  src={selectedItem==='My Profile'? redUserIcon:selectedItem==='Orders'?pic2: selectedItem==='Address'?deliveryRed:selectedItem==='Password'?redKey:pic5}
                  alt=""
                />
                <p
                  className={style.Profile_mainContent_leftPart_item_text}
                  style={{
                    color:"#CE2225",
                  }}
                  onClick={() => setCurrentSection("myProfile")}
                >
                  {selectedItem}
                </p>
            </div>
            {
              isDropdownOpen &&
              <div className={style.dropdownProfile}> 
                <div
                className={style.Profile_mainContent_leftPart_item}
                onClick={() => {setCurrentSection("myProfile");setSelectedItem("My Profile");setIsDropdownOpen(false)}}
              >
                <img
                  src={pic1}
                  alt=""
                />
                <p
                  className={style.Profile_mainContent_leftPart_item_text}
                  onClick={() => setCurrentSection("myProfile")}
                >
                  My Profile
                </p>
              </div>
              <div
                className={style.Profile_mainContent_leftPart_item}
                
                onClick={() => {setCurrentSection("orders"); setSelectedItem("Orders");setIsDropdownOpen(false)}}
              >
                <img
                  src={pic2Grey}
                  alt=""
                />
                <p
                  className={style.Profile_mainContent_leftPart_item_text}
                >
                  Orders
                </p>
              </div>
              <div
                className={style.Profile_mainContent_leftPart_item}
                
                onClick={() => {setCurrentSection("address"); setSelectedItem("Address");setIsDropdownOpen(false)}}
              >
                <img
                  src={pic3}
                  alt=""
                />
                <p
                  className={style.Profile_mainContent_leftPart_item_text}
                  
                >
                  Address
                </p>
              </div>
              <div
                className={style.Profile_mainContent_leftPart_item}
                
                onClick={() => {setCurrentSection("password"); setSelectedItem("Password");setIsDropdownOpen(false)}}
              >
                <img
                  src={pic4}
                  alt=""
                />
                <p
                  className={style.Profile_mainContent_leftPart_item_text}
                  
                >
                  Password
                </p>
              </div>
              <div
                className={style.Profile_mainContent_leftPart_item}
                
                onClick={() =>{ setCurrentSection("logout");setSelectedItem("Logout");setIsDropdownOpen(false)}}
              >
                <img src={pic5} alt="" />
                <p
                  className={style.Profile_mainContent_leftPart_item_text}
                  
                >
                  Logout
                </p>
              </div>
              </div>
            }
            </div>}


            {/* RIGHT PART */}
            {currentSection === "myProfile" && (
              <div className={style.Profile_mainContent_rightPart_myProfile}>
                <p
                  className={
                    style.Profile_mainContent_rightPart_myProfile_para1
                  }
                >
                  Account Details
                </p>
                <div
                  className={style.Profile_mainContent_rightPart_myProfile_PN}
                >
                  PN{" "}
                </div>
                <form
                  onSubmit={handleSubmit}
                  className={style2.checkoutContainer_mainContent_leftPart_Form}
                  style={{ width: "100%" }}
                >
                  {/* First Name and Last Name */}
                  <div
                    className={
                      style2.checkoutContainer_mainContent_leftPart_Form_Div
                    }
                  >
                    <div
                      className={
                        style2.checkoutContainer_mainContent_leftPart_Form_commonContainer
                      }
                    >
                      <label
                        className={
                          style2.checkoutContainer_mainContent_leftPart_Form_text
                        }
                      >
                        Full Name:
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          className={
                            style2.checkoutContainer_mainContent_leftPart_Form_input
                          }
                        />
                      </label>
                    </div>

                    <div
                      className={
                        style2.checkoutContainer_mainContent_leftPart_Form_commonContainer
                      }
                    >
                      <label
                        className={
                          style2.checkoutContainer_mainContent_leftPart_Form_text
                        }
                      >
                        Email
                        <input
                          type="text"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={
                            style2.checkoutContainer_mainContent_leftPart_Form_input
                          }
                        />
                      </label>
                    </div>
                  </div>

                  <div
                    className={
                      style2.checkoutContainer_mainContent_leftPart_Form_Div
                    }
                  >
                    <div
                      className={
                        style2.checkoutContainer_mainContent_leftPart_Form_commonContainer
                      }
                    >
                      <label
                        className={
                          style2.checkoutContainer_mainContent_leftPart_Form_text
                        }
                      >
                        Phone Number
                        <input
                          type="text"
                          name="phoneNumber"
                          value={formData.phoneNumber}
                          onChange={handleChange}
                          className={
                            style2.checkoutContainer_mainContent_leftPart_Form_input
                          }
                        />
                      </label>
                    </div>

                    <div
                      className={
                        style2.checkoutContainer_mainContent_leftPart_Form_commonContainer
                      }
                    >
                      <label
                        className={
                          style2.checkoutContainer_mainContent_leftPart_Form_text
                        }
                      >
                        Street Address
                        <input
                          type="text"
                          name="streetAddress"
                          value={formData.streetAddress}
                          onChange={handleChange}
                          className={
                            style2.checkoutContainer_mainContent_leftPart_Form_input
                          }
                        />
                      </label>
                    </div>
                  </div>
                </form>
                <div className={style.formSaveChanges}>Save Changes</div>
              </div>
            )}

            {currentSection === "orders" && false ? (
              <div className={style.Profile_mainContent_rightPart}>
                {obj1.map((item, index) => {
                  return (
                    <div
                      className={style.Profile_mainContent_rightPart_content}
                    >
                      <div
                        className={
                          style.Profile_mainContent_rightPart_content_left
                        }
                      >
                        <img src={item.img} alt="" />
                        <div
                          className={
                            style.Profile_mainContent_rightPart_content_left_info
                          }
                        >
                          <p
                            className={
                              style.Profile_mainContent_rightPart_content_left_info_text1
                            }
                          >
                            Sunsor Chakki Atta
                          </p>
                          <p
                            className={
                              style.Profile_mainContent_rightPart_content_left_info_text2
                            }
                          >
                            Ordered on: 17 Dec 2024
                          </p>
                          <p
                            className={
                              style.Profile_mainContent_rightPart_content_left_info_price
                            }
                          >
                            {item.price}
                          </p>
                        </div>
                      </div>
                      <div
                        className={
                          style.Profile_mainContent_rightPart_content_right
                        }
                      >
                        <p
                          className={
                            style.Profile_mainContent_rightPart_content_right_txt1
                          }
                        >
                          Processing
                        </p>
                        <div
                          className={
                            style.Profile_mainContent_rightPart_content_right_viewItem
                          }
                        >
                          View Item
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              currentSection === "orders" && (
                <div className={style.Profile_mainContent_rightPart2}>
                  <div className={style.Profile_mainContent_rightPart2_content}>
                    <img src={img4} alt="" />
                    <p className={style.Profile_mainContent_rightPart2_text}>
                      Your order history is waiting to be filled.
                    </p>
                    <div className={style.Profile_mainContent_rightPart2_div}>
                      {" "}
                      Start Shopping
                    </div>
                  </div>
                </div>
              )
            )}

            {currentSection === "address" && (
              <div className={style.Profile_mainContent_rightPart_address}>
                <p
                  className={
                    style.Profile_mainContent_rightPart_address_heading
                  }
                >
                  Address
                </p>

                {/* FORM STARTS HERE */}
                <form
                  onSubmit={handleSubmit}
                  className={style2.checkoutContainer_mainContent_leftPart_Form}
                  style={{ width: "100%" }}
                >
                  {/* First Name and Last Name */}
                  <div
                    className={
                      style2.checkoutContainer_mainContent_leftPart_Form_Div
                    }
                  >
                    <div
                      className={
                        style2.checkoutContainer_mainContent_leftPart_Form_commonContainer
                      }
                    >
                      <label
                        className={
                          style2.checkoutContainer_mainContent_leftPart_Form_text
                        }
                      >
                        First Name:
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          className={
                            style2.checkoutContainer_mainContent_leftPart_Form_input
                          }
                        />
                      </label>
                    </div>

                    <div
                      className={
                        style2.checkoutContainer_mainContent_leftPart_Form_commonContainer
                      }
                    >
                      <label
                        className={
                          style2.checkoutContainer_mainContent_leftPart_Form_text
                        }
                      >
                        Last Name:
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          className={
                            style2.checkoutContainer_mainContent_leftPart_Form_input
                          }
                        />
                      </label>
                    </div>
                  </div>

                  {/* Email Address and Contact Number */}
                  <div
                    className={
                      style2.checkoutContainer_mainContent_leftPart_Form_Div
                    }
                  >
                    <div
                      className={
                        style2.checkoutContainer_mainContent_leftPart_Form_commonContainer
                      }
                    >
                      <label
                        className={
                          style2.checkoutContainer_mainContent_leftPart_Form_text
                        }
                      >
                        Email Address:
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={
                            style2.checkoutContainer_mainContent_leftPart_Form_input
                          }
                        />
                      </label>
                    </div>

                    <div
                      className={
                        style2.checkoutContainer_mainContent_leftPart_Form_commonContainer
                      }
                    >
                      <label
                        className={
                          style2.checkoutContainer_mainContent_leftPart_Form_text
                        }
                      >
                        Contact Number:
                        <input
                          type="text"
                          name="contactNumber"
                          value={formData.contactNumber}
                          onChange={handleChange}
                          className={
                            style2.checkoutContainer_mainContent_leftPart_Form_input
                          }
                        />
                      </label>
                    </div>
                  </div>

                  {/* Country and City */}
                  <div
                    className={
                      style2.checkoutContainer_mainContent_leftPart_Form_Div
                    }
                  >
                    <div
                      className={
                        style2.checkoutContainer_mainContent_leftPart_Form_commonContainer
                      }
                    >
                      <label
                        className={
                          style2.checkoutContainer_mainContent_leftPart_Form_text
                        }
                      >
                        Country:
                        <select
                          name="country"
                          value={formData.country}
                          onChange={handleChange}
                          className={
                            style2.checkoutContainer_mainContent_leftPart_Form_input
                          }
                        ></select>
                      </label>
                    </div>

                    <div
                      className={
                        style2.checkoutContainer_mainContent_leftPart_Form_commonContainer
                      }
                    >
                      <label
                        className={
                          style2.checkoutContainer_mainContent_leftPart_Form_text
                        }
                      >
                        City:
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          className={
                            style2.checkoutContainer_mainContent_leftPart_Form_input
                          }
                        />
                      </label>
                    </div>
                  </div>

                  {/* State and Zip Code */}
                  <div
                    className={
                      style2.checkoutContainer_mainContent_leftPart_Form_Div
                    }
                  >
                    <div
                      className={
                        style2.checkoutContainer_mainContent_leftPart_Form_commonContainer
                      }
                    >
                      <label
                        className={
                          style2.checkoutContainer_mainContent_leftPart_Form_text
                        }
                      >
                        State:
                        <select
                          name="state"
                          value={formData.state}
                          onChange={handleChange}
                          className={
                            style2.checkoutContainer_mainContent_leftPart_Form_input
                          }
                        >
                          <option value="">Select State</option>{" "}
                          {/* Default option */}
                        </select>
                      </label>
                    </div>

                    <div
                      className={
                        style2.checkoutContainer_mainContent_leftPart_Form_commonContainer
                      }
                    >
                      <label
                        className={
                          style2.checkoutContainer_mainContent_leftPart_Form_text
                        }
                      >
                        Zip Code:
                        <input
                          type="text"
                          name="zipCode"
                          value={formData.zipCode}
                          onChange={handleChange}
                          className={
                            style2.checkoutContainer_mainContent_leftPart_Form_input
                          }
                        />
                      </label>
                    </div>
                  </div>

                  <div className={style.formSaveChanges}>Save Changes</div>
                </form>

                {/* FORM ENDS HERE */}
              </div>
            )}
            {currentSection === "password" && (
              <div className={style.Profile_mainContent_rightPart_password}>
                <p
                  className={
                    style.Profile_mainContent_rightPart_password_heading
                  }
                >
                  Change Password
                </p>
                <div
                  className={
                    style.Profile_mainContent_rightPart_password_inputs
                  }
                >
                  <div
                    className={
                      style.Profile_mainContent_rightPart_password_input1
                    }
                  >
                    <p
                      className={
                        style.Profile_mainContent_rightPart_password_input1_text
                      }
                    >
                      New Password
                    </p>
                    <input
                      type="text"
                      className={
                        style.Profile_mainContent_rightPart_password_input
                      }
                      required
                    />
                  </div>
                  <div
                    className={
                      style.Profile_mainContent_rightPart_password_input1
                    }
                  >
                    <p
                      className={
                        style.Profile_mainContent_rightPart_password_input1_text
                      }
                    >
                      Confirm Password
                    </p>
                    <input
                      type="text"
                      className={
                        style.Profile_mainContent_rightPart_password_input
                      }
                      required
                    />
                  </div>
                </div>
                <div
                  className={
                    style.Profile_mainContent_rightPart_password_button
                  }
                >
                  {" "}
                  Change Password
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className={style.Profile_mainContent_wishList}>
            {obj1.map((item, index) => {
              return (
                <div className={style.Profile_mainContent_rightPart_content}>
                  <div
                    className={style.Profile_mainContent_rightPart_content_left}
                  >
                    <img src={item.img} alt="" />
                    <div
                      className={
                        style.Profile_mainContent_rightPart_content_left_info
                      }
                    >
                      <p
                        className={
                          style.Profile_mainContent_rightPart_content_left_info_text1
                        }
                      >
                        Sunsor Chakki Atta
                      </p>
                      <p
                        className={
                          style.Profile_mainContent_rightPart_content_left_info_text2
                        }
                      >
                        Ordered on: 17 Dec 2024
                      </p>
                      <p
                        className={
                          style.Profile_mainContent_rightPart_content_left_info_price
                        }
                      >
                        {item.price}
                      </p>
                    </div>
                  </div>
                  <div
                    className={
                      style.Profile_mainContent_rightPart_content_right
                    }
                  >
                    <p
                      className={
                        style.Profile_mainContent_rightPart_content_right_txt1
                      }
                    >
                      Processing
                    </p>
                    <div
                      className={
                        style.Profile_mainContent_rightPart_content_right_viewItem
                      }
                    >
                      View Item
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
