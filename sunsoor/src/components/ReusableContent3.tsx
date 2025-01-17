import React from "react";
import star2 from "../assetss/star2.png";

import heroProduct1 from "../assetss/image 15.png";

import heroProduct4 from "../assetss/image 18.png";
import heroProduct5 from "../assetss/image 19.png";
import heroProduct6 from "../assetss/image 20.png";

import like from "../assetss/heart.png";
import arrow from "../assetss/leftArrow.png";
import style from "../styles/HomePageHeroSection.module.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
const ReusableContent3 = () => {
  const [isHovered, setIsHovered] = useState<number | null>(null);
  const sectionObject3 = [
    {
      imageContent: heroProduct1,
      off: "30% off",
      productName: "Sunsor Chakki Atta",
      price: "₹248.00",
      oldPrice: "₹430.00",
    },
    {
      imageContent: heroProduct4,
      off: "50% off",
      productName: "Natural Original Maida",
      price: "₹342.00",
      oldPrice: "₹602.00",
    },
    {
      imageContent: heroProduct5,
      off: "25% off",
      productName: "Natural Original  Suji",
      price: "₹418.00",
      oldPrice: "₹602.00",
    },
    {
      imageContent: heroProduct6,
      off: "10% off",
      productName: "Natural Original  Wheat Bran ",
      price: "₹228.00",
      oldPrice: "₹430.00",
    },
  ];
  return (
    <div>
      <div className={style.heroSectionBestSeller}>
        <div className={style.heroSectionBestSeller_headingDiv}>
          <p className={style.heroSectionBestSeller_heading}>Best Sellers</p>
          <div className={style.heroSectionBestSeller_headingDivNavigate}>
            <div
              className={style.heroSectionBestSeller_headingDiv_NavigateLeft}
            >
              <img src={arrow} alt="leftArrow" />
            </div>
            <div
              className={style.heroSectionBestSeller_headingDiv_NavigateRight}
            >
              <img src={arrow} alt="leftArrow" />
            </div>
          </div>
        </div>

        <div className={style.heroSectionBestSeller_contentDiv}>
          {sectionObject3.map((obj, index) => {
            return (
              <div
                key={index}
                className={style.heroSectionBestSeller_contentBox}
              >
                <div
                  className={style.heroSectionBestSeller_mainContent}
                  onMouseOver={() => setIsHovered(index)}
                  onMouseLeave={() => setIsHovered(null)} // Reset hover when mouse leaves
                  style={{
                    border: isHovered === index ? "1px solid #CE2225" : "",
                  }}
                >
                  <div
                    className={style.heroSectionBestSeller_mainContent_header}
                  >
                    <div
                      className={
                        style.heroSectionBestSeller_mainContent_header_stock
                      }
                    >
                      In Stock
                    </div>
                    <div
                      className={
                        style.heroSectionBestSeller_mainContent_header_Like
                      }
                    >
                      <img src={like} alt="" />
                    </div>
                  </div>

                  <img src={obj.imageContent} alt={obj.productName} />

                  <div
                    className={style.heroSectionBestSeller_mainContent_footer}
                  >
                    <p
                      className={
                        style.heroSectionBestSeller_mainContent_footer_para
                      }
                    >
                      {obj.off}
                    </p>
                    {isHovered === index && (
                      <NavLink to="/productDescription">
                        <div
                          className={
                            style.heroSectionBestSeller_mainContent_AddToCart
                          }
                        >
                          Add to Cart
                        </div>
                      </NavLink>
                    )}
                  </div>
                </div>

                <div className={style.heroSectionBestSeller_restContent}>
                  <p
                    className={
                      style.heroSectionBestSeller_restContent_productName
                    }
                  >
                    {obj.productName}
                  </p>
                  <p
                    className={style.heroSectionBestSeller_restContent_inStock}
                  >
                    IN STOCK
                  </p>

                  <div
                    className={
                      style.heroSectionBestSeller_restContent_AmountDetails
                    }
                  >
                    <div
                      className={
                        style.heroSectionBestSeller_restContent_AmountDiv
                      }
                    >
                      <p
                        className={
                          style.heroSectionBestSeller_restContent_currentAmount
                        }
                      >
                        {obj.price}
                      </p>
                      <p
                        className={
                          style.heroSectionBestSeller_restContent_oldAmount
                        }
                      >
                        {obj.oldPrice}
                      </p>
                    </div>

                    <div
                      className={
                        style.heroSectionBestSeller_restContent_ratingsDiv
                      }
                    >
                      <img
                        src={star2}
                        alt="star"
                        style={{ position: "relative", bottom: "1px" }}
                      />
                      <p
                        className={
                          style.heroSectionBestSeller_restContent_ratings
                        }
                      >
                        4.5 (23 reviews)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ReusableContent3;
