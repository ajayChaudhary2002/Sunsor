import React from "react";
import Header from "../components/Header";
import bgImg from "../assetss/Rectangle 40.png";
import style from "../styles/ourStory.module.css";
import eclipseImg from "../assetss/ourStoryEclipse.png";
import { FaAngleRight } from "react-icons/fa6";
import ReusableHeroSection2 from "../components/ReusableHeroSection2";
import ReusableHeroSection1 from "../components/ReusableHeroSection1";
import TopFooterPart from "../components/TopFooterPart";
import Footer from "../components/Footer";
import { useEffect } from "react";
import { useState } from "react";
import Login from "../components/PopUps/Login";
import CreateAccount from "../components/PopUps/CreateAccount";
const OurStory = () => {
  useEffect(() => {
    // Scroll to the top of the page
    window.scrollTo(0, 0);
  }, []);
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
      <div className={style.ourStory_container}>
        <p className={style.ourStory_container_heading}>Our Story</p>
        <p className={style.ourStory_container_para}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
      </div>

      {/* OURSTORY SECTION 2 */}

      <div className={style.ourStory_section2_container}>
        <div
          className={style.ourStory_section2_innerContainer_sideScroll_right}
        >
          <FaAngleRight size={40} color="#BBBBBB" />
        </div>
        <div className={style.ourStory_section2_innerContainer}>
          <div className={style.ourStory_section2_innerContainer_imgContainer}>
            <img src={eclipseImg} alt="" />
          </div>
          <p className={style.ourStory_section2_innerContainer_Heading}>
            John Ben
          </p>
          <p className={style.ourStory_section2_innerContainer_para}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <div className={style.ourStory_section2_innerContainer_sideScroll}>
            <FaAngleRight size={40} color="white" />
          </div>
        </div>
      </div>
      <ReusableHeroSection1 />
      <div className={style.ourStoryBreakBetweenTwoSections}></div>
      <TopFooterPart />
      <Footer />
    </div>
  );
};

export default OurStory;
