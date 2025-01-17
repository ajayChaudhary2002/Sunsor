import React, { useState } from "react";
import style from "../../styles/Popups_styling/Location.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import locationIcon from "../../assetss/Location.svg";
const LocationPopUp = ({ open, handleClose }: any) => {
  const navigate = useNavigate();
  const [location, setLocation] = useState("");
  const handleChange = (event: any) => {
    setLocation(event.target.value); // Update location state on input change
  };

  return (
    <>
      {open && (
        <div className={style.LocationPopUp_container}>
          <div className={style.LocationPopUp_container_div}>
            <div className={style.LocationPopUp_container_crossDiv}>
              <p className={style.LocationPopUp_container_para1}>Location</p>
              <RxCross2
                onClick={() => {
                  handleClose();
                }}
                size={20}
                className={style.LocationPopUp_container_crossBtn}
              />
            </div>
            <div className={style.LocationPopUp_container_simpleLine}></div>
            <p className={style.LocationPopUp_container_para2}>
              Select Location
            </p>
            <input
              type="text"
              placeholder="Your Location Or Pincode"
              value={location}
              onChange={handleChange}
              className={style.locationInput}
            />
            <button className={style.locationPopup_Button}>Continue</button>
            <p className={style.LocationPopUp_container_div_orPara}>Or</p>
            <div className={style.LocationPopUp_container_div_locationDiv}>
              <div className={style.LocationPopUp_container_div_location}>
                <img
                  src={locationIcon}
                  alt=""
                  height={16}
                  width={16}
                  color="#CE2225"
                />

                <p>Your Current Location</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LocationPopUp;
