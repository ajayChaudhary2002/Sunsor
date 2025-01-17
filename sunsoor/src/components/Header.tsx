import React from "react";
import Location from "../assetss/Location.svg";

import { NavLink, useLocation } from "react-router-dom";

import { FaLocationDot } from "react-icons/fa6";

import starHeader from "../assetss/star.png";
import { useState } from "react";
import style from "../styles/Header.module.css";
import NavBar from "./NavBar";
import LocationPopUp from "./PopUps/LocationPopUp";
import { useEffect } from "react";
const Header = ({ setLoginPopup, setCreatePopup, showProfile }: any) => {
  const [currentRoute, setCurrentRoute] = useState<string>("");
  const [openLocation, setOpenLocation] = useState(false);

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
  const isMobile = viewportWidth <= 425;
  return (
    <div style={{width:"100%"}}>
      {openLocation && <LocationPopUp />}
      
      <div className={style.headerPart}>
        {/* LEFT PART */}
        <div className={style.starDiv}>
          <img src={starHeader} alt="" className={style.starImg} />
          <p className={style.starDivText}>
            {" "}
            Get 5% Off your first order,{" "}
            <span className={style.starDivBoldPart}>Promo: ORDER5</span>
          </p>
        </div>
        {/* RIGHT PART */}
        <div className={style.addressDiv}>
          <div className={style.headerLocarionDiv}>
            <FaLocationDot
              style={{ fill: "#CE2225" }}
              onClick={() => {
                setOpenLocation(true);
              }}
            />
          </div>
          {!isMobile &&  <div className={style.locationTextDiv}>
           
              <p className={style.LocationText}>
              Dehradun, Uttarakhand  - 248171, INDIA
            </p>
           
          </div> }
        </div>
      </div>
      

      {/* NAV BAR */}

      <NavBar
        setLoginPopup={setLoginPopup}
        setCreatePopup={setCreatePopup}
        showProfile={showProfile}
      />
    </div>
  );
};

export default Header;
