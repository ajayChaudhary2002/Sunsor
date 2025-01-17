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
const NavBar = ({ setLoginPopup, setCreatePopup, showProfile }: any) => {
  const location = useLocation();

  const [accountDropDown, setAccountDropDown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
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
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle the menu visibility

    // Toggle the menu visibility
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  return (
    <div className={style.navBarHead}>
      {/* SUNSOOR LOGO */}
      <div className={style.sunsoorHeaderDiv}>
        <NavLink to="/">
          <img src={sunsorHeader} alt="" className={style.sunsoorLogo} />
        </NavLink>
      </div>

      {/* LIST OF ALL THE PAGES */}
      <div className={style.navBarLinks}>
  {/* Hamburger icon, only visible when width is less than 425px (isSmTablet) */}
  

  {/* Normal navbar for larger screens */}
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





      {/* SEARCH ICON AND USER ICON */}
      <div className={style.navIcons}>
      {isSmTablet && (
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
            onClick={() => setAccountDropDown((prev) => !prev)}
            ref={dropdownRef}
          >
            <img src={userIcon} alt="" />
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
