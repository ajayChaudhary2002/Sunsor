import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import style from "../styles/NavBar.module.css";
import magnify from "../assetss/Magnify.svg";
import userIcon from "../assetss/userIcon.svg";
import sunsorHeader from "../assetss/Sunsor Thumbnail for Header.png";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import style2 from "../styles/HeaderForProduct.module.css";
import { FaBars } from "react-icons/fa";
import NavBarOptions from "./PopUps/NavBarOptions";
const NavBar = ({ setLoginPopup, setCreatePopup, showProfile }: any) => {
  const location = useLocation();

  const [accountDropDown, setAccountDropDown] = useState(false);
  const hamburgerRef = useRef<HTMLDivElement | null>(null); 
  const userIconRef = useRef<HTMLDivElement | null>(null); 

  const [openOption,setOpenOption]=useState(false);
  const toggleHamburger = () => {
    
    if (accountDropDown) {
      setAccountDropDown(false);
    }
    
    setOpenOption(prev => !prev);
  };
  
  const toggleUserIcon = () => {
    
    if (openOption) {
      setOpenOption(false);
    }
    
    setAccountDropDown(prev => !prev);
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
    const isSmTablet = viewportWidth <= 425;
    const [isMenuOpen, setIsMenuOpen] = useState(false); 

    
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  return (
    <div className={style.navBarHead}>
      {}
      <div className={style.sunsoorHeaderDiv}>
        <NavLink to="/">
          <img src={sunsorHeader} alt="" className={style.sunsoorLogo} />
        </NavLink>
      </div>

      {}
      <div className={style.navBarLinks}>
  {}
  

  {}
  {!isSmTablet && (
  <div className={style.navLinksText}>
    <NavLink to="/ourProduct" style={{ textDecoration: "none" }}>
      <p className={`${style.navLinkText} ${isTablet ? style.tabletFontSize : ''}`}>Our Product</p>
    </NavLink>

    <NavLink to="/ourStory" style={{ textDecoration: "none" }}>
      <p className={`${style.navLinkText} ${isTablet ? style.tabletFontSize : ''}`}>Our Story</p>
    </NavLink>

    <NavLink to="/blogs" style={{ textDecoration: "none" }}>
      <p className={`${style.navLinkText} ${isTablet ? style.tabletFontSize : ''}`}>Blogs</p>
    </NavLink>

    <NavLink to="/aboutUs" style={{ textDecoration: "none" }}>
      <p className={`${style.navLinkText} ${isTablet ? style.tabletFontSize : ''}`}>About Us</p>
    </NavLink>

    <NavLink to="/contactUs" style={{ textDecoration: "none" }}>
      <p className={`${style.navLinkText} ${isTablet ? style.tabletFontSize : ''}`}>Contact Us</p>
    </NavLink>
  </div>
)}


</div>





      {}
      <div className={style.navIcons}>
      {isSmTablet && (
    <div
      style={{
        cursor: "pointer",
        fontSize: "24px",
        position:"relative"
      }}
      
    >
      <div className={style.HamburgerIcon} onClick={toggleHamburger} ref={hamburgerRef} >
      <FaBars />
        </div>
        {
          openOption && <NavBarOptions/>
        }
    </div>
  )}
        <div className={style.searchIcon}>
          <img src={magnify} alt="" className={style.magnify} />
        </div>
        {showProfile ? (
          <NavLink to="/Profile" className={style.userIcon}>
            <img src={userIcon} alt="" />
          </NavLink>
        ) : (
          <div
            className={style.userIcon}
            onClick={toggleUserIcon}
            ref={userIconRef}
          >
            <img src={userIcon} alt=""  />
            {accountDropDown && (
              <div className={style2.headerForProductContainer_DropDown}>
                <p
                  className={style2.headerForProductContainer_DropDown_text}
                  onClick={() => setLoginPopup((prev: boolean) => !prev)}
                >
                  Login
                </p>

                <p
                  className={style2.headerForProductContainer_DropDown_breaker}
                >
                  Or
                </p>
                <p className={style2.headerForProductContainer_DropDown_text}>
                  New in Sunsor?
                </p>

                <p
                  className={
                    style2.headerForProductContainer_DropDown_createAccounts
                  }
                  onClick={() => setCreatePopup(true)}
                >
                  Create Account
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
