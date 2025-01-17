import React, { useState } from "react";
import HomeBgImg from "../assetss/HomepageBackgroundImg.png";
import sunsoorLogo from "../assetss/Sunsoor Logo.png";
import { FaArrowRightLong } from "react-icons/fa6";
import randomImg1 from "../assetss/Ellipse 5.png";
import randomImg2 from "../assetss/Ellipse 6.png";
import randomImg3 from "../assetss/Ellipse 7.png";
import star2 from "../assetss/star2.png";
import star6 from "../assetss/Star 6.png";
import heroProduct1 from "../assetss/image 15.png";
import heroProduct2 from "../assetss/image 16.png";
import heroProduct3 from "../assetss/image 17.png";
import heroProduct4 from "../assetss/image 18.png";
import heroProduct5 from "../assetss/image 19.png";
import heroProduct6 from "../assetss/image 20.png";
import darkShadow from "../assetss/image (1).png";
import bgStar from "../assetss/Star 7.png";
import checkBox from "../assetss/Vector.png";
import gradiant from "../assetss/Rectangle 40.png";
import style from "../styles/HomePageHeroSection.module.css";
import { text } from "stream/consumers";
import check from "../assetss/Vector (1).png";
import { privateDecrypt } from "crypto";
import like from "../assetss/heart.png";
import arrow from "../assetss/leftArrow.png";
import ReusableHeroSection1 from "./ReusableHeroSection1";
import ReusableHeroSection2 from "./ReusableHeroSection2";
import { NavLink } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import img2 from "../assetss/sliderImg1.png";
import img3 from "../assetss/sliderImg2.png";

const HomePageHeroSection = () => {

  
  const section2Object = [
    {
      starImg: star6,
      bgStarImg: bgStar,
      InnerImg: heroProduct1,
      text: "Atta",
    },
    {
      starImg: star6,
      bgStarImg: bgStar,
      InnerImg: heroProduct2,
      text: "Mustered Oil",
    },
    {
      starImg: star6,
      bgStarImg: bgStar,
      InnerImg: heroProduct3,
      text: "Rice",
    },
    {
      starImg: star6,
      bgStarImg: bgStar,
      InnerImg: heroProduct4,
      text: "Maida",
    },
    {
      starImg: star6,
      bgStarImg: bgStar,
      InnerImg: heroProduct5,
      text: "suji",
    },
    {
      starImg: star6,
      bgStarImg: bgStar,
      InnerImg: heroProduct6,
      text: "Wheat Bran",
    },
  ];

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

  const section5Object = [
    {
      section5Img: heroProduct2,
      text: "Mustard Oil",
    },
    {
      section5Img: heroProduct5,
      text: "Suji",
    },
    {
      section5Img: heroProduct1,
      text: "Atta",
    },
    {
      section5Img: heroProduct6,
      text: "Wheat Bran",
    },
    {
      section5Img: heroProduct3,
      text: "Rice",
    },
    {
      section5Img: heroProduct4,
      text: "Maida",
    },
  ];
  const [isHovered, setIsHovered] = useState<number | null>(null);
  const [imgNumber, setImgNumber] = useState<number>(0);
  return (
    <div>
      {/* SECTION 1 */}
      <div
        className={`${
          imgNumber === 0
            ? style.section1Container
            : imgNumber === 1
            ? style.section1Container1
            : style.section1Container2
        }`}
      >
        <img
          src={sunsoorLogo}
          alt=""
          
          className={style.HomePageHeroSectionSunsoorLogo}
        />

        <p className={style.section1LargeText}>The Sunsor Quality</p>
        <p className={style.section1Para}>
          Hand - picked Ingredients, careful processing and untouched packaging
          ensuring superior quality.
        </p>

        <NavLink
          to="/heroSectionExplore"
          style={{ zIndex: "1" }}
          onClick={() => window.scrollTo(0, 0)}
        >
          <button className={style.exploreButton}>Explore →</button>
        </NavLink>

        <div className={style.imgSection}>
          <div className={style.randomImages}>
            <div className={style.childDiv1}>
              <img src={randomImg1} alt="" />
            </div>
            <div className={style.childDiv2}>
              <img src={randomImg2} alt="" />
            </div>
            <div className={style.childDiv3}>
              <img src={randomImg3} alt="" />
            </div>
          </div>
          <div className={style.someText}>
            <p className={style.someTextUpper}>Our Happy Customer</p>
            <div className={style.littleText}>
              <img src={star2} alt="" />
              <p>4.8</p>
              <p>(12.5k Review)</p>
            </div>
          </div>
        </div>
        <div className={style.homepageSlider}>
          <div
            className={style.homepageSlider_leftSlide}
            onClick={() => setImgNumber((prev) => (prev - 1) % 3)}
          >
            <FaArrowLeftLong />
          </div>
          <div
            className={style.homepageSlider_rightSlide}
            onClick={() => setImgNumber((prev) => (prev + 1) % 3)}
          >
            <FaArrowRightLong />
          </div>
        </div>
      </div>

      {/* SECTION 2 */}
      <div className={style.heroSectionRedPart}>
        <p className={style.heroSectionRedPartHeading}>Our Product</p>
        <p className={style.heroSectionRedPartPara}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>

        <div className={style.heroSectionRedPartObjectDiv}>
          {section2Object.map((obj, index) => (
            <NavLink to="/Product">
              <div key={index} className={style.heroSectionItem}>
                <img src={obj.starImg} alt="star" className={style.starImage} />
                <img
                  src={obj.bgStarImg}
                  alt="background star"
                  className={style.bgStarImage}
                />
                <div className={style.heroProductImageDiv}>
                  <img
                    src={obj.InnerImg}
                    alt={`hero product ${index + 1}`}
                    className={style.heroProductImage}
                  />
                </div>
                <p className={style.heroSectionProductText}>{obj.text}</p>
              </div>
            </NavLink>
          ))}
        </div>

        <div className={style.heroSectionRedPartFooterDiv}>
          <div className={style.heroSectionRedPartFooter}>
            <p className={style.heroSectionRedPartFooter_heading}>
              Delicious Chole bhatture
            </p>
            <div className={style.heroSectionRedPartFooter_paragraphs}>
              <div className={style.heroSectionRedPartFooter_para1}>
                <div className={style.heroSectionRedPartFooter_para1_icons}>
                  <img src={check} alt="" />
                </div>
                <p>Our superior-quality,</p>
              </div>
              <div className={style.heroSectionRedPartFooter_para1}>
                <div className={style.heroSectionRedPartFooter_para1_icons}>
                  {" "}
                  <img src={check} alt="" />
                </div>
                <p>contact-less packaging, </p>
              </div>
              <div className={style.heroSectionRedPartFooter_para1}>
                <div className={style.heroSectionRedPartFooter_para1_icons}>
                  {" "}
                  <img src={check} alt="" />
                </div>
                <p>the trust of millions of mothers.</p>
              </div>
            </div>

            <img
              src={heroProduct2}
              alt=""
              className={style.heroSectionRedPartFooter_oilImage}
            />
          </div>
        </div>
      </div>

      {/* SECTION 3 */}

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

      {/* SECTION 4 */}

      <ReusableHeroSection1 />

      {/* SECTION 5 */}

      <div className={style.section5container}>
        <div className={style.section5container_imageContainer}>
          {section5Object.map((item, index) => {
            return (
              <div className={style.section5container_imageContainer_item}>
                <img
                  src={item.section5Img}
                  alt=""
                  className={style.section5container_imageContainer_item_img}
                />
                <p className={style.section5container_imageContainer_item_txt}>
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* SECTION 6 */}
      <ReusableHeroSection2 />
    </div>
  );
};

export default HomePageHeroSection;
