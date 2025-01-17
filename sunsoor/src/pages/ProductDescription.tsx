import React, { useState } from "react";
import style from "../styles/ProductDescription.module.css";
import HeaderForProduct from "../components/HeaderForProduct";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import img1 from "../assetss/maskGroup1.png";
import img2 from "../assetss/maskGroup2.png";
import img3 from "../assetss/maskGroup3.png";
import img4 from "../assetss/maskGroup4.png";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import star from "../assetss/star2.png";
import like from "../assetss/redHeart.png";
import fastDelivery from "../assetss/delivery.svg";
import packageIcon from "../assetss/Package.svg";
import voucher from "../assetss/voucher.svg";
import { FaPlus } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";
import RelatedPages from "../components/RelatedPages";
import Footer from "../components/Footer";
import userImg from "../assetss/userImg.png";
import { NavLink } from "react-router-dom";
import Login from "../components/PopUps/Login";
import CreateAccount from "../components/PopUps/CreateAccount";
import { useEffect } from "react";
const ProductDescription = () => {
  const [reviewSection, setReviewSection] = useState<boolean>(false);
  const reviewObject = [
    {
      userName: "Vanilie",
    },
    {
      userName: "Maduin",
    },
    {
      userName: "Samantha",
    },
    {
      userName: "Roveria",
    },
  ];
  const [loginPopup, setLoginPopup] = useState(false);
  const [createPopup, setCreatePopup] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [pack, setPack] = useState(5);
  const [quantity, setQuantity] = useState(1);
  const negateQuantity = () => {
    quantity > 1 && setQuantity((prev) => prev - 1);
  };
  const increaseQuantity = () => {
    quantity < 10 && setQuantity((prev) => prev + 1);
  };
  useEffect(() => {
    // Scroll to the top of the page
    window.scrollTo(0, 0);
  }, []);
  return (
    <div style={{ overflow: "hidden" }}>
      {loginPopup && (
        <Login
          setLoginPopup={setLoginPopup}
          setCreatePopup={setCreatePopup}
          setShowProfile={setShowProfile}
        />
      )}
      {createPopup && (
        <CreateAccount
          setCreatePopup={setCreatePopup}
          setLoginPopup={setLoginPopup}
          setShowProfile={setShowProfile}
        />
      )}
      <div className={style.mainProductDescriptionContainer}>
        <HeaderForProduct
          setLoginPopup={setLoginPopup}
          setCreatePopup={setCreatePopup}
          showProfile={showProfile}
        />
        <div className={style.myProductDescription_firstDiv}>
          <div className={style.myProductDescription_firstDiv_text}>
            <p className={style.myProductDescription_firstDiv_t}>Home</p>
            <MdOutlineKeyboardArrowRight color="#A7A7A7" />

            <p className={style.myProductDescription_firstDiv_t}>Our Product</p>
            <MdOutlineKeyboardArrowRight color="#A7A7A7" />

            <p
              className={style.myProductDescription_firstDiv_t}
              style={{ color: "#CE2225" }}
            >
              Sunsor Chakki Atta
            </p>
          </div>
        </div>
        <div className={style.myProductDescription_mainDiv}>
          {/* LEFT DIV */}
          <div className={style.myProductDescription_mainDiv_left}>
            <div className={style.myProductDescription_mainDiv_left_imgDiv}>
              <img src={img1} alt="" />
            </div>
            <div className={style.myProductDescription_mainDiv_left_imgSlide}>
              <div
                className={
                  style.myProductDescription_mainDiv_left_imgSlide_leftArrow
                }
              >
                <MdOutlineKeyboardArrowLeft color="#F46B5B" />
              </div>
              <img src={img2} alt="" />
              <img src={img3} alt="" />
              <img src={img4} alt="" />
              <div
                className={
                  style.myProductDescription_mainDiv_left_imgSlide_rightArrow
                }
              >
                <MdOutlineKeyboardArrowRight color="#F46B5B" />
              </div>
            </div>
          </div>

          <div className={style.myProductDescription_mainDiv_right}>
            <div className={style.myProductDescription_mainDiv_right_div1}>
              <div
                className={style.myProductDescription_mainDiv_right_div1_left}
              >
                <p
                  className={style.myProductDescription_mainDiv_right_div1_txt}
                >
                  5.0
                </p>
                <div
                  className={
                    style.myProductDescription_mainDiv_right_div1_images
                  }
                >
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                </div>
                <p
                  className={style.myProductDescription_mainDiv_right_div1_txt2}
                >
                  Review (12)
                </p>
                <div
                  className={
                    style.myProductDescription_mainDiv_right_div1_breaker
                  }
                ></div>
                <p
                  className={style.myProductDescription_mainDiv_right_div1_txt2}
                >
                  Sold 99
                </p>
              </div>
              <div
                className={style.myProductDescription_mainDiv_right_div1_right}
              >
                <img src={like} alt="" />
                <p
                  className={style.myProductDescription_mainDiv_right_div1_txt3}
                >
                  Add to Wishlist
                </p>
              </div>
            </div>
            <div className={style.myProductDescription_mainDiv_right_div2}>
              <p
                className={
                  style.myProductDescription_mainDiv_right_div2_heading
                }
              >
                Sunsor Chakki Atta
              </p>
              <div
                className={
                  style.myProductDescription_mainDiv_right_div2_priceDiv
                }
              >
                <p
                  className={
                    style.myProductDescription_mainDiv_right_div2_price
                  }
                >
                  Rs. 629.00
                </p>
                <p
                  className={style.myProductDescription_mainDiv_right_div2_Off}
                >
                  Rs.799.00
                </p>
                <div
                  className={style.myProductDescription_mainDiv_right_div2_save}
                >
                  Save 50%
                </div>
              </div>
              <div
                className={
                  style.myProductDescription_mainDiv_right_div2_delivery
                }
              >
                <div
                  className={
                    style.myProductDescription_mainDiv_right_div2_delivery_div
                  }
                >
                  <img src={fastDelivery} alt="" />
                  <p
                    className={
                      style.myProductDescription_mainDiv_right_div2_delivery_text
                    }
                  >
                    Free Delivery
                  </p>
                </div>
                <div
                  className={
                    style.myProductDescription_mainDiv_right_div2_delivery_div
                  }
                >
                  <img src={voucher} alt="" />
                  <p
                    className={
                      style.myProductDescription_mainDiv_right_div2_delivery_text
                    }
                  >
                    COD Available{" "}
                  </p>
                </div>
                <div
                  className={
                    style.myProductDescription_mainDiv_right_div2_delivery_div
                  }
                >
                  <img src={packageIcon} alt="" />
                  <p
                    className={
                      style.myProductDescription_mainDiv_right_div2_delivery_text
                    }
                  >
                    In Stock
                  </p>
                </div>
              </div>

              <div
                className={style.myProductDescription_mainDiv_right_breaker}
              ></div>
              <p
                className={
                  style.myProductDescription_mainDiv_right_div2_randomText
                }
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. L
              </p>
              <div
                className={style.myProductDescription_mainDiv_right_container_}
              >
                <p
                  className={
                    style.myProductDescription_mainDiv_right_breaker_text
                  }
                >
                  Special Offer :
                </p>
                <div
                  className={
                    style.myProductDescription_mainDiv_right_breaker_numbers
                  }
                >
                  <div
                    className={
                      style.myProductDescription_mainDiv_right_breaker_number
                    }
                  >
                    02
                  </div>
                  <div
                    className={
                      style.myProductDescription_mainDiv_right_breaker_number
                    }
                  >
                    06
                  </div>
                  <div
                    className={
                      style.myProductDescription_mainDiv_right_breaker_number
                    }
                  >
                    50
                  </div>
                  <p>:</p>
                  <div
                    className={
                      style.myProductDescription_mainDiv_right_breaker_number
                    }
                  >
                    02
                  </div>
                </div>
                <p
                  className={
                    style.myProductDescription_mainDiv_right_breaker_text2
                  }
                >
                  Remains until the end of the offer.
                </p>
              </div>
              <p
                className={
                  style.myProductDescription_mainDiv_right_availableSize
                }
              >
                Available Package Size
              </p>
              <div className={style.myProductDescription_mainDiv_right_sizes}>
                <div
                  className={style.myProductDescription_mainDiv_right_size1}
                  onClick={() => setPack(5)}
                  style={{
                    border:
                      pack === 5
                        ? "0.77px solid #CE2225"
                        : "0.77px solid black",
                  }}
                >
                  5KG
                </div>
                <div
                  className={style.myProductDescription_mainDiv_right_size2}
                  onClick={() => setPack(10)}
                  style={{
                    border:
                      pack === 10
                        ? "0.77px solid #CE2225"
                        : "0.77px solid black",
                  }}
                >
                  10KG
                </div>
              </div>
            </div>

            <div className={style.myProductDescription_mainDiv_right_div3}>
              <div
                className={style.myProductDescription_mainDiv_right_div3_left}
              >
                <p
                  className={
                    style.myProductDescription_mainDiv_right_div3_left_para
                  }
                >
                  Quantity
                </p>
                <div
                  className={
                    style.myProductDescription_mainDiv_right_div3_left_decrement
                  }
                  onClick={negateQuantity}
                >
                  <FiMinus />
                </div>
                <p
                  className={
                    style.myProductDescription_mainDiv_right_div3_left_txt
                  }
                >
                  {quantity}
                </p>
                <div
                  className={
                    style.myProductDescription_mainDiv_right_div3_left_increment
                  }
                  style={{ backgroundColor: "#CE2225" }}
                  onClick={increaseQuantity}
                >
                  <FaPlus color="#FAFAFA" />
                </div>
              </div>
              <NavLink to="/MyCart">
                <div
                  className={
                    style.myProductDescription_mainDiv_right_div3_right
                  }
                >
                  {" "}
                  Add to Cart
                </div>
              </NavLink>
            </div>
          </div>
        </div>
        <div className={style.myProductDescription_div4}>
          <p
            className={style.myProductDescription_div4_description}
            style={{
              color: !reviewSection ? "#CE2225" : "",
              borderBottom: !reviewSection ? "3px solid #CE2225" : "",
            }}
            onClick={() => setReviewSection(false)}
          >
            Description
          </p>
          <p
            className={style.myProductDescription_div4_review}
            style={{
              color: reviewSection ? "#CE2225" : "",
              borderBottom: reviewSection ? "3px solid #CE2225" : "",
            }}
            onClick={() => setReviewSection(true)}
          >
            Reviews (200)
          </p>
        </div>
        {!reviewSection ? (
          <div className={style.myProductDescription_div5}>
            <p className={style.myProductDescription_div5_para1}>
              Quisque varius diam vel metus mattis, id aliquam diam rhoncus.
              Proin vitae magna in dui finibus malesuada et at nulla. Morbi elit
              ex, viverra vitae ante vel, blandit feugiat ligula. Fusce
              fermentum iaculis nibh, at sodales leo maximus a. Nullam ultricies
              sodales nunc, in pellentesque lorem mattis quis. Cras imperdiet
              est in nunc tristique lacinia. Nullam aliquam mauris eu accumsan
              tincidunt. Suspendisse velit ex, aliquet vel ornare vel, dignissim
              a tortor.
            </p>
            <p className={style.myProductDescription_div5_para2}>
              Morbi ut sapien vitae odio accumsan gravida. Morbi vitae erat
              auctor, eleifend nunc a, lobortis neque. Praesent aliquam
              dignissim viverra. Maecenas lacus odio, feugiat eu nunc sit amet,
              maximus sagittis dolor. Vivamus nisi sapien, elementum sit amet
              eros sit amet, ultricies cursus ipsum. Sed consequat luctus
              ligula. Curabitur laoreet rhoncus blandit. Aenean vel diam ut arcu
              pharetra dignissim ut sed leo. Vivamus faucibus, ipsum in
              vestibulum vulputate, lorem orci convallis quam, sit amet
              consequat nulla felis pharetra lacus. Duis semper erat mauris, sed
              egestas purus commodo vel.
            </p>
          </div>
        ) : (
          <div className={style.myProductReview_div5}>
            {reviewObject.map((obj, index) => {
              return (
                <div className={style.myProductReview_div5_review}>
                  <div className={style.myProductReview_div5_review_imgDiv}>
                    <div className={style.reviewerImage}>
                      <img src={userImg} alt="" />
                    </div>
                    <div className={style.reviewerInfo}>
                      <p className={style.reviewerInfo_name}>{obj.userName}</p>
                      <div className={style.reviewerInfo_review}>
                        <p className={style.reviewerInfo_points}>5.0</p>
                        <div className={style.reviewerInfo_stars}>
                          <img src={star} alt="" />
                          <img src={star} alt="" />
                          <img src={star} alt="" />
                          <img src={star} alt="" />
                          <img src={star} alt="" />
                        </div>
                        <p className={style.reviewerInfo_reviewDate}>
                          1 Month ago
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className={style.reviewerInfo_comment}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.{" "}
                  </p>
                </div>
              );
            })}
          </div>
        )}
        {!reviewSection && <RelatedPages />}
        <Footer />
      </div>
    </div>
  );
};

export default ProductDescription;
