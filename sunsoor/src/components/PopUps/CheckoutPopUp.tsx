import React from "react";
import style from "../../styles/Popups_styling/CheckoutPopUp.module.css";
import frame from "../../assetss/Frame 11.png";
import { NavLink } from "react-router-dom";
const CheckoutPopUp = () => {
  return (
    <div style={{ overflow: "hidden" }}>
      <div className={style.CheckoutPopUp_Container}>
        <div className={style.CheckoutPopUp}>
          <img src={frame} alt="" style={{ marginBottom: "2rem" }} />
          <p className={style.CheckoutPopUp_Container_para}>
            Thank you for shopping
          </p>
          <p className={style.CheckoutPopUp_Container_txt}>
            Your order has been successfully placed and is now being processed.
          </p>
          <NavLink to="/" className={style.CheckoutPopUp_Container_navLink}>
            <div className={style.CheckoutPopUp_Container_btn}>
              Go to Home Page
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPopUp;
