import React from "react";
import style from "../styles/HeaderForProduct.module.css";
import magnify from "../assetss/Magnify.svg";
import sunsorLogo from "../assetss/Sunsor Thumbnail for Header.png";
import heartShape from "../assetss/heartForProject.png";
import cartLogo from "../assetss/cartLogo.png";
import accountLogo from "../assetss/accountLogo.png";
import { FaLocationDot } from "react-icons/fa6";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useRef } from "react";
import { useEffect } from "react";
import style2 from "../styles/NavBar.module.css";
import userIcon from "../assetss/userIcon.svg";
import style3 from "../styles/NavBar.module.css";
import { FaBars } from "react-icons/fa";
const HeaderForProduct = ({
  inCart,
  showNavOption,
  setWishList,
  setLoginPopup,
  setCreatePopup,
  showProfile,
}: any) => {
  const [openLocation, setOpenLocation] = useState(false);
  const [accountDropDown, setAccountDropDown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const [login, setLogin] = useState(false);

  

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setAccountDropDown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
    
      // Update viewport width on window resize
      useEffect(() => {
        const handleResize = () => {
          setViewportWidth(window.innerWidth);
        };
    
        // Add resize event listener
        window.addEventListener('resize', handleResize);
    
        // Clean up the event listener when the component is unmounted
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
  const isTablet = viewportWidth <= 768;
    const isSmTablet = viewportWidth <= 425;
  return (
    <div>
      <div
        className={style.headerForProductContainer}
        style={{
          borderBottom: showNavOption && "none",
          marginBottom: showNavOption && "0",
        }}
      >
        <NavLink to="/">
          <img src={sunsorLogo} alt="" />
        </NavLink>
        <div className={style.headerForProductContainer_right}>
          {!inCart && (
            <div className={style.headerForProductContainer_searchContainer}>
              <input
                type="text"
                placeholder="Search Item here"
                className={style.headerForProductContainer_input}
              />
              <div className={style.headerForProductContainer_searchButton}>
                <img src={magnify} alt="" />
              </div>
            </div>
          )}

          {showNavOption && (
            <div className={style2.navBarLinks}>
            {/* Hamburger icon, only visible when width is less than 425px (isSmTablet) */}
            
          
            {/* Normal navbar for larger screens */}
            {!isSmTablet && !isTablet &&(
            <div className={style2.navLinksText}>
              <NavLink to="/ourProduct" style={{ textDecoration: "none" }}>
                <p className={`${style2.navLinkText} ${isTablet ? style2.tabletFontSize : ''}`}>Our Product</p>
              </NavLink>
          
              <NavLink to="/ourStory" style={{ textDecoration: "none" }}>
                <p className={`${style2.navLinkText} ${isTablet ? style2.tabletFontSize : ''}`}>Our Story</p>
              </NavLink>
          
              <NavLink to="/blogs" style={{ textDecoration: "none" }}>
                <p className={`${style2.navLinkText} ${isTablet ? style2.tabletFontSize : ''}`}>Blogs</p>
              </NavLink>
          
              <NavLink to="/aboutUs" style={{ textDecoration: "none" }}>
                <p className={`${style2.navLinkText} ${isTablet ? style2.tabletFontSize : ''}`}>About Us</p>
              </NavLink>
          
              <NavLink to="/contactUs" style={{ textDecoration: "none" }}>
                <p className={`${style2.navLinkText} ${isTablet ? style2.tabletFontSize : ''}`}>Contact Us</p>
              </NavLink>
            </div>
          )}
          
          
          </div>
          )}
          {isSmTablet || isTablet &&(
    <div
      style={{
        cursor: "pointer",
        fontSize: "24px",
      }}
    >
      <div className={style.HamburgerIcon}>
      <FaBars />
        </div>
    </div>
  )}
          <div className={style.searchIconDiv}>
          <div className={`${style2.searchIcon} ${style.icon}`}>
            <img src={magnify} alt="" className={style.magnify} />
          </div>
          </div>
          <div
            className={`${style.headerForProductContainer_logo}` } 
            onClick={() => setWishList(true)}
          >
            <img src={heartShape} alt="" className={style.heartShape}/>
          </div>
          <div className={`${style.headerForProductContainer_logo}`}>
            <img src={cartLogo} alt="" className={style.cartLogo} />
          </div>
          {showProfile ? (
            <div className={style.userIconShape}>
              <NavLink to="/Profile" className={`${style3.userIcon} ${style.userIcon}`}>
              <img src={userIcon} alt=""  className={style.userIconImg}/>
            </NavLink>
              </div>
          ) : (
            !login && (
              <div
                className={style.headerForProductContainer_logo}
                onClick={() => setAccountDropDown((prev) => !prev)}
                ref={dropdownRef}
              >
                <img src={accountLogo} alt="" style={{ cursor: "pointer" }} />
                {accountDropDown && (
                  <div className={style.headerForProductContainer_DropDown}>
                    <p
                      className={style.headerForProductContainer_DropDown_text}
                      onClick={() => setLoginPopup(true)}
                    >
                      Login
                    </p>

                    <p
                      className={
                        style.headerForProductContainer_DropDown_breaker
                      }
                    >
                      Or
                    </p>
                    <p
                      className={style.headerForProductContainer_DropDown_text}
                    >
                      New in Sunsor?
                    </p>

                    <p
                      className={
                        style.headerForProductContainer_DropDown_createAccounts
                      }
                      onClick={() => setCreatePopup(true)}
                    >
                      Create Account
                    </p>
                  </div>
                )}
              </div>
            )
          )}
          {!showNavOption && (
            <div className={style.headerForProductContainer_addressDiv}>
              <div
                className={style.headerForProductContainer_headerLocarionDiv}
              >
                {login ? (
                  <img
                    src={accountLogo}
                    alt=""
                    height={15}
                    width={15}
                    style={{ cursor: "pointer" }}
                  />
                ) : (
                  <FaLocationDot
                    style={{ fill: "#CE2225" }}
                    onClick={() => {
                      setOpenLocation(true);
                    }}
                  />
                )}
              </div>
              <div className={style.headerForProductContainer_locationTextDiv}>
                <p className={style.LocationText}>
                  Dehradun, Uttarakhand  - 248171, INDIA
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeaderForProduct;
