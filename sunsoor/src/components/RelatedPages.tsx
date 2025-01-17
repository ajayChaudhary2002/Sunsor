import React, { useState } from "react";
import style from "../styles/RelatedPages.module.css";
import { FaArrowLeftLong } from "react-icons/fa6";
import heroProduct1 from "../assetss/image 15.png";
import heroProduct4 from "../assetss/image 18.png";
import heroProduct5 from "../assetss/image 19.png";
import heroProduct6 from "../assetss/image 20.png";
import like from "../assetss/heart.png";
import star2 from "../assetss/star2.png";
import style2 from "../styles/HomePageHeroSection.module.css";
const RelatedPages = () => {
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
  const [isHover, setIsHover] = useState<number | null>(null);
  return (
    <div>
      <div className={style.RelatedPagesContainer}>
        <div className={style.RelatedPagesContainer_HeadingDiv}>
          <p className={style.RelatedPagesContainer_Heading}>Related Product</p>
          <div className={style.RelatedPagesContainer_HeadingDiv_icons}>
            <div className={style.RelatedPagesContainer_HeadingDiv_icon}>
              <FaArrowLeftLong />
            </div>
            <div className={style.RelatedPagesContainer_HeadingDiv_icon}>
              <FaArrowLeftLong style={{ transform: "rotate(180deg)" }} />
            </div>
          </div>
        </div>
        <div className={style2.heroSectionBestSeller_contentDiv}>
          {sectionObject3.map((obj, index) => {
            return (
              <div
                key={index}
                className={style2.heroSectionBestSeller_contentBox}
              >
                <div
                  className={style2.heroSectionBestSeller_mainContent}
                  onMouseOver={() => setIsHover(index)}
                  onMouseLeave={() => setIsHover(null)}
                  style={{
                    border: isHover === index ? "1px solid #CE2225" : "",
                  }}
                >
                  <div
                    className={style2.heroSectionBestSeller_mainContent_header}
                  >
                    <div
                      className={
                        style2.heroSectionBestSeller_mainContent_header_stock
                      }
                    >
                      In Stock
                    </div>
                    <div
                      className={
                        style2.heroSectionBestSeller_mainContent_header_Like
                      }
                    >
                      <img src={like} alt="" />
                    </div>
                  </div>

                  <img src={obj.imageContent} alt={obj.productName} />

                  <div
                    className={style2.heroSectionBestSeller_mainContent_footer}
                  >
                    <p
                      className={
                        style2.heroSectionBestSeller_mainContent_footer_para
                      }
                    >
                      {obj.off}
                    </p>
                    {isHover === index && (
                      <div
                        className={
                          style2.heroSectionBestSeller_mainContent_AddToCart
                        }
                      >
                        Add to Cart
                      </div>
                    )}
                  </div>
                </div>

                <div className={style2.heroSectionBestSeller_restContent}>
                  <p
                    className={
                      style2.heroSectionBestSeller_restContent_productName
                    }
                  >
                    {obj.productName}
                  </p>
                  <p
                    className={style2.heroSectionBestSeller_restContent_inStock}
                  >
                    IN STOCK
                  </p>

                  <div
                    className={
                      style2.heroSectionBestSeller_restContent_AmountDetails
                    }
                  >
                    <div
                      className={
                        style2.heroSectionBestSeller_restContent_AmountDiv
                      }
                    >
                      <p
                        className={
                          style2.heroSectionBestSeller_restContent_currentAmount
                        }
                      >
                        {obj.price}
                      </p>
                      <p
                        className={
                          style2.heroSectionBestSeller_restContent_oldAmount
                        }
                      >
                        {obj.oldPrice}
                      </p>
                    </div>

                    <div
                      className={
                        style2.heroSectionBestSeller_restContent_ratingsDiv
                      }
                    >
                      <img src={star2} alt="star" />
                      <p
                        className={
                          style2.heroSectionBestSeller_restContent_ratings
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

export default RelatedPages;
