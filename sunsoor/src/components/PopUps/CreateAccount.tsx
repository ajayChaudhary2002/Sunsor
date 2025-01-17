import React from "react";
import style from "../../styles/Popups_styling/CreateAccount.module.css";
import user from "../../assetss/User.png";
import lock from "../../assetss/Lock.png";
import Eye from "../../assetss/Eye.png";
import facebook from "../../assetss/facebook.png";
import google from "../../assetss/image 47.png";

const CreateAccount = ({
  setCreatePopup,
  setLoginPopup,
  setShowProfile,
}: any) => {
  return (
    <div style={{ overflow: "hidden" }}>
      <div className={style.CreateAccountPopUp}>
        <div className={style.CreateAccountPopUp_container}>
          <div className={style.CreateAccountPopUp_container_main}>
            <p className={style.CreateAccountPopUp_container_main_Header}>
              Create Account
            </p>
            <label
              className={style.CreateAccountPopUp_container_main_email_label}
            >
              <p className={style.CreateAccountPopUp_container_main_email}>
                Email
              </p>
              <input
                type="text"
                placeholder="email@email.com"
                required
                className={style.CreateAccountPopUp_container_main_email_input}
              />
              <img
                src={user}
                alt=""
                className={style.CreateAccountPopUp_container_main_email_img}
              />
            </label>
            <label
              className={style.CreateAccountPopUp_container_main_password_label}
            >
              <p className={style.CreateAccountPopUp_container_main_password}>
                Password
              </p>
              <input
                type="password"
                placeholder="••••••"
                required
                className={
                  style.CreateAccountPopUp_container_main_password_input
                }
              />
              <img
                src={lock}
                alt=""
                className={
                  style.CreateAccountPopUp_container_main_password_input_img1
                }
              />
              <img
                src={Eye}
                alt=""
                className={
                  style.CreateAccountPopUp_container_main_password_input_img2
                }
              />
            </label>
          </div>
          <div
            className={style.CreateAccountPopUp_CREATE}
            style={{ cursor: "pointer" }}
            onClick={() => {
              setCreatePopup(false);
              setShowProfile(true);
            }}
          >
            Create Account
          </div>
          <p className={style.CreateAccountPopUp_txt}>Continue With</p>
          <div className={style.CreateAccountPopUp_socials}>
            <img src={facebook} alt="" />
            <img src={google} alt="" />
          </div>
          <p className={style.CreateAccountPopUp_txt2}>
            Already have an Account?
            <span
              onClick={() => {
                setLoginPopup(true);
                setCreatePopup(false);
              }}
              style={{ cursor: "pointer" }}
            >
              {" "}
              Login
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
