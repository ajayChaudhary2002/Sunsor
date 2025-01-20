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
import NavBarOptions from "./PopUps/NavBarOptions";
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
  const userIconRef = useRef<HTMLDivElement | null>(null);
  const [login, setLogin] = useState(false);
  const [openOption,setOpenOption]=useState(false);
  const hamburgerRef=useRef<HTMLDivElement | null>(null);
  const toggleHamburger = () => {
    setOpenOption(prev => !prev); 
    if (accountDropDown) {
      setAccountDropDown(false); 
    }
  };
  
  const toggleUserIcon = () => {
    setAccountDropDown(prev => !prev); 
    if (openOption) {
      setOpenOption(false); 
    }
  };
  
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (
        (hamburgerRef.current && !hamburgerRef.current.contains(event.target)) &&
        (userIconRef.current && !userIconRef.current.contains(event.target)) &&
        !event.target.closest(`.${style2.headerForProductContainer_DropDown}`) 
      ) {
        setAccountDropDown(false);
        setOpenOption(false);
      }
    };
  
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  
  
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
    
      
      useEffect(() => {
        const handleResize = () => {
          setViewportWidth(window.innerWidth);
        };
    
        
        window.addEventListener('resize', handleResize);
    
        
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
  const isTablet = viewportWidth <= 768;
    const isSmTablet = viewportWidth <= 480;
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
            {}
            
          
            {}
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
          {(isSmTablet || isTablet) &&(
    <div
      style={{
        cursor: "pointer",
        fontSize: "24px",
        position:"relative"
      }}
    >
      <div className={style.HamburgerIcon} onClick={toggleHamburger} ref={hamburgerRef}>
      <FaBars />
        </div>
        {
          openOption && <NavBarOptions/>
        }
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
                onClick={toggleUserIcon}
                ref={userIconRef}
              >
                <img src={accountLogo} alt="" style={{ cursor: "pointer",width:isSmTablet ? "44%":"" }} />
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
