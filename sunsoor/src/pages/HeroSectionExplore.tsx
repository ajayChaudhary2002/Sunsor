import React from "react";
import style from "../styles/HeroSectionExplore.module.css";
import Header from "../components/Header";
import aata from "../assetss/image 15.png";
import ReusableHeroSection1 from "../components/ReusableHeroSection1";
import ReusableHeroSection2 from "../components/ReusableHeroSection2";
import ReusableContent3 from "../components/ReusableContent3";
import Footer from "../components/Footer";
import TopFooterPart from "../components/TopFooterPart";
import { useState } from "react";
import Login from "../components/PopUps/Login";
import CreateAccount from "../components/PopUps/CreateAccount";
const HeroSectionExplore = () => {
  const [loginPopup, setLoginPopup] = useState(false);
  const [createPopup, setCreatePopup] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  return (
    <div>
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

      <div className={style.HeroSectionExplore_container}>
        <div className={style.HeroSectionExplore_container_topDiv}>
          <p className={style.HeroSectionExplore_container_topDiv_para}>
            Home {">"} Our Product {">"}{" "}
            <span className={style.HeroSectionExplore_container_topDiv_span}>
              Sunsor Chakki Atta
            </span>
          </p>
        </div>
        <div className={style.HeroSectionExplore_container_bottomDiv}>
          <div className={style.HeroSectionExplore_container_bottomDiv_leftImg}>
            <img
              src={aata}
              alt=""
              
            />
          </div>
          <div
            className={style.HeroSectionExplore_container_bottomDiv_rightText}
          >
            <p className={style.HeroSectionExplore_container_bottomDiv_Heading}>
              Sunsor Chakki Atta
            </p>
            <p
              className={
                style.HeroSectionExplore_container_bottomDiv_rightText_para
              }
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.{" "}
            </p>
            <p
              className={
                style.HeroSectionExplore_container_bottomDiv_rightText_para2
              }
            >
              Available Package Size
            </p>
            <div
              className={style.HeroSectionExplore_container_bottomDiv_twoDivs}
            >
              <div
                className={
                  style.HeroSectionExplore_container_bottomDiv_rightText_leftDiv
                }
              >
                5 Kg
              </div>
              <div
                className={
                  style.HeroSectionExplore_container_bottomDiv_rightText_rightDiv
                }
              >
                10 Kg
              </div>
            </div>
            <div
              className={
                style.HeroSectionExplore_container_bottomDiv_rightText_btn
              }
            >
              Buy Now
            </div>
          </div>
        </div>
      </div>
      <ReusableHeroSection1 />
      <ReusableContent3 />
      <ReusableHeroSection2 />
      <TopFooterPart />
      <Footer />
    </div>
  );
};

export default HeroSectionExplore;
