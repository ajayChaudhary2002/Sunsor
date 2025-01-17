import React from "react";
import Header from "../components/Header";
import styleFromOurStory from "../styles/ourStory.module.css";
import style from "../styles/AboutUs.module.css";
import img1 from "../assetss/Quality.svg";
import img2 from "../assetss/Fast Delivery.svg";
import img3 from "../assetss/Cash On Delivery.svg";
import img4 from "../assetss/prize.svg";
import { FaArrowRightLong } from "react-icons/fa6";
import img5 from "../assetss/abousUsSectionImg2.png";
import TopFooterPart from "../components/TopFooterPart";
import Footer from "../components/Footer";
import { useEffect } from "react";
import { useState } from "react";
import Login from "../components/PopUps/Login";
import CreateAccount from "../components/PopUps/CreateAccount";
const AboutUs = () => {
  useEffect(() => {
    // Scroll to the top of the page
    window.scrollTo(0, 0);
  }, []);
  const [loginPopup, setLoginPopup] = useState(false);
  const [createPopup, setCreatePopup] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
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
      <Header
        setLoginPopup={setLoginPopup}
        setCreatePopup={setCreatePopup}
        showProfile={showProfile}
      />
      <div className={style.ourStory_container}>
        <p className={styleFromOurStory.ourStory_container_heading}>About Us</p>
        <p className={styleFromOurStory.ourStory_container_para}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
      </div>

      {/* SECTION 2 */}
      <div className={style.ourStory_section2_container}>
        <p className={style.ourStory_section2_container_Heading}>
          Why Choosing Us
        </p>
        <p className={style.ourStory_section2_container_para}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
        <div className={style.ourStory_section2_container_attributeDiv}>
          <div
            className={style.ourStory_section2_container_attributeDiv_content}
          >
            <img src={img1} alt="" />
            <p
              className={
                style.ourStory_section2_container_attributeDiv_content_para1
              }
            >
              Top Quality
            </p>
            <p
              className={
                style.ourStory_section2_container_attributeDiv_content_para2
              }
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.{" "}
            </p>
          </div>
          <div
            className={style.ourStory_section2_container_attributeDiv_content}
          >
            <img src={img2} alt="" />
            <p
              className={
                style.ourStory_section2_container_attributeDiv_content_para1
              }
            >
              Fast Delivery
            </p>
            <p
              className={
                style.ourStory_section2_container_attributeDiv_content_para2
              }
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.{" "}
            </p>
          </div>
          <div
            className={style.ourStory_section2_container_attributeDiv_content}
          >
            <img src={img3} alt="" />
            <p
              className={
                style.ourStory_section2_container_attributeDiv_content_para1
              }
            >
              COD Service
            </p>
            <p
              className={
                style.ourStory_section2_container_attributeDiv_content_para2
              }
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.{" "}
            </p>
          </div>
          <div
            className={style.ourStory_section2_container_attributeDiv_content}
          >
            <img src={img4} alt="" />
            <p
              className={
                style.ourStory_section2_container_attributeDiv_content_para1
              }
            >
              100% Original Products
            </p>
            <p
              className={
                style.ourStory_section2_container_attributeDiv_content_para2
              }
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.{" "}
            </p>
          </div>
        </div>
        <div className={style.ourStory_section2_container_bottomImage}>
          <p className={style.ourStory_section2_container_bottomImage_header}>
            Don't miss out on special offers
          </p>
          <p className={style.ourStory_section2_container_bottomImage_para}>
            Register to receive news about the latest, savings combos, discount
            codes...
          </p>
          <div className={style.ourStory_section2_container_bottomImage_num}>
            <div className={style.ourStory_section2_container_bottomImage_num1}>
              1
            </div>
            <p
              className={
                style.ourStory_section2_container_bottomImage_num1_text
              }
            >
              Savings combos
            </p>
          </div>
          <div className={style.ourStory_section2_container_bottomImage_num}>
            <div className={style.ourStory_section2_container_bottomImage_num2}>
              2
            </div>
            <p
              className={
                style.ourStory_section2_container_bottomImage_num1_text
              }
            >
              Freeship
            </p>
          </div>
          <div className={style.ourStory_section2_container_bottomImage_num}>
            <div className={style.ourStory_section2_container_bottomImage_num3}>
              3
            </div>
            <p
              className={
                style.ourStory_section2_container_bottomImage_num1_text
              }
            >
              Premium deals
            </p>
          </div>
          <div className={style.ourStory_section2_container_bottomImage_email}>
            <p
              className={
                style.ourStory_section2_container_bottomImage_email_placeHolder
              }
            >
              Enter email
            </p>
            <div
              className={
                style.ourStory_section2_container_bottomImage_email_icon
              }
            >
              <FaArrowRightLong />
            </div>
          </div>
        </div>
      </div>
      <div className={style.ourStory_section2_container_bottomImage_image}>
        <img
          src={img5}
          alt=""
          className={style.ourStory_section2_container_bottomImage_actualImg}
        />
      </div>
      <TopFooterPart />
      <Footer />
    </div>
  );
};

export default AboutUs;
