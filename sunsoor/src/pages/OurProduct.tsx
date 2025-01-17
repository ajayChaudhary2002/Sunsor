import React from "react";
import style from "../styles/OurProduct.module.css";
import Header from "../components/Header";
import bgImg from "../assetss/ourProductBgImg.png";
import atta from "../assetss/image 15.png";
import { FaAngleLeft } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import ReusableHeroSection2 from "../components/ReusableHeroSection2";
import TopFooterPart from "../components/TopFooterPart";
import Footer from "../components/Footer";
import { useEffect } from "react";
import { useState } from "react";
import Login from "../components/PopUps/Login";
import CreateAccount from "../components/PopUps/CreateAccount";
const OurProduct = () => {
  useEffect(() => {
    // Scroll to the top of the page
    window.scrollTo(0, 0);
  }, []);
  const [loginPopup, setLoginPopup] = useState(false);
  const [createPopup, setCreatePopup] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("All");

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
      <div className={style.ourProduct_container}>
        <div className={style.ourProduct_container_leftDiv}>
          <p className={style.ourProduct_container_para1}>
            Home {">"} Our Product {">"}{" "}
            <span className={style.ourProduct_container_para1Span}>
              Sunsor Chakki Atta
            </span>
          </p>
          <p className={style.ourProduct_container_heading}>
            Sunsor Chakki Atta
          </p>
          <p className={style.ourProduct_container_para2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className={style.ourProduct_container_rightDiv}>
          <img
            src={atta}
            alt=""
            className={style.ourProduct_container_rightDiv_img}
          />
        </div>
      </div>

      <div className={style.ourProduct_container_ourProductSection}>
        <p className={style.ourProduct_container_ourProductSection_para}>
          Our Product
        </p>

        {!isMobileView ? (
          <div
            className={style.ourProduct_container_ourProductSection_allItems}
          >
            <p
              className={
                style.ourProduct_container_ourProductSection_allItems_item
              }
            >
              All
            </p>
            <p
              className={
                style.ourProduct_container_ourProductSection_allItems_item
              }
              style={{ backgroundColor: "#CE2225", color: "white" }}
            >
              Atta <FaAngleLeft style={{ transform: "rotate(270deg)" }} />
            </p>
            <p
              className={
                style.ourProduct_container_ourProductSection_allItems_item
              }
            >
              Maida <FaAngleLeft style={{ transform: "rotate(270deg)" }} />
            </p>
            <p
              className={
                style.ourProduct_container_ourProductSection_allItems_item
              }
            >
              Mustard Oil{" "}
              <FaAngleLeft style={{ transform: "rotate(270deg)" }} />
            </p>
            <p
              className={
                style.ourProduct_container_ourProductSection_allItems_item
              }
            >
              Suji <FaAngleLeft style={{ transform: "rotate(270deg)" }} />
            </p>
            <p
              className={
                style.ourProduct_container_ourProductSection_allItems_item
              }
            >
              Rice <FaAngleLeft style={{ transform: "rotate(270deg)" }} />
            </p>
            <p
              className={
                style.ourProduct_container_ourProductSection_allItems_item
              }
            >
              Wheat Bran <FaAngleLeft style={{ transform: "rotate(270deg)" }} />
            </p>
          </div>
        ) : (
          <div className={style.ourProduct_mobileView_allItems}>
            <p
              className={
                style.ourProduct_container_ourProductSection_allItems_item
              }
              style={{backgroundColor:"#ce2225",color:"#fafafa"}}
              onClick={() => {
                setIsDropdownOpen((prev) => !prev);
              }}
            >
              {selectedItem} <FaAngleLeft style={{ transform: isDropdownOpen? "rotate(90deg)":"rotate(270deg)" , transition:"all 300ms"}} />
            </p>

            {isDropdownOpen && (
              <div className={style.ourProduct_mobileView_allItems_dropDown}>
                <p
                  className={`${style.ourProduct_mobileView_allItems_dropDown_item} ${style.ourProduct_mobileView_allItems_dropDown_item1}`}
                  onClick={()=>{setSelectedItem('All'); setIsDropdownOpen(false)}}
                >
                  All
                </p>
                <p
                  className={style.ourProduct_mobileView_allItems_dropDown_item}
                  onClick={()=>{setSelectedItem('Atta'); setIsDropdownOpen(false)}}
                >
                  Atta
                </p>
                <p
                  className={style.ourProduct_mobileView_allItems_dropDown_item}
                  onClick={()=>{setSelectedItem('Maida'); setIsDropdownOpen(false)}}
                >
                  Maida
                </p>
                <p
                  className={style.ourProduct_mobileView_allItems_dropDown_item}
                  onClick={()=>{setSelectedItem('Mustard Oil'); setIsDropdownOpen(false)}}
                >
                  Mustard Oil
                </p>
                <p
                  className={style.ourProduct_mobileView_allItems_dropDown_item}
                  onClick={()=>{setSelectedItem('Suji'); setIsDropdownOpen(false)}}
                >
                  Suji
                </p>
                <p
                  className={style.ourProduct_mobileView_allItems_dropDown_item}
                  onClick={()=>{setSelectedItem('Rice'); setIsDropdownOpen(false)}}
                >
                  Rice
                </p>
                <p
                  className={`${style.ourProduct_mobileView_allItems_dropDown_item} ${style.ourProduct_mobileView_allItems_dropDown_itemLast}`}
                  onClick={()=>{setSelectedItem('Wheat Bran'); setIsDropdownOpen(false)}}
                >
                  Wheat Bran
                </p>
              </div>
            )}
          </div>
        )}

        <div
          className={style.ourProduct_container_ourProductSection_selectedItem}
        >
          <div
            className={
              style.ourProduct_container_ourProductSection_allItems_likeDiv
            }
          >
            <p
              className={
                style.ourProduct_container_ourProductSection_allItems_likeDiv_txt
              }
            >
              Sunsor Chakki Atta
            </p>
            <div
              className={
                style.ourProduct_container_ourProductSection_allItems_likeDiv_icon
              }
            >
              {" "}
              <CiHeart
                style={{ fontSize: "20px" }}
                className={
                  style.ourProduct_container_ourProductSection_allItems_likeDiv_heart
                }
              />{" "}
            </div>
          </div>
          <div
            className={
              style.ourProduct_container_ourProductSection_allItems_img
            }
          >
            <img
              src={atta}
              alt=""
              className={
                style.ourProduct_container_ourProductSection_allItems_imgMain
              }
            />
          </div>
          <div
            className={
              style.ourProduct_container_ourProductSection_selectedItem_addToCart
            }
          >
            Add to Cart
          </div>
        </div>
      </div>
      <ReusableHeroSection2 />
      <TopFooterPart />
      <Footer />
    </div>
  );
};

export default OurProduct;
