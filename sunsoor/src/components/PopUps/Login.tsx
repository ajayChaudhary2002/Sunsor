import React from "react";
import style from "../../styles/Popups_styling/CreateAccount.module.css";
import user from "../../assetss/User.png";
import lock from "../../assetss/Lock.png";
import Eye from "../../assetss/Eye.png";
import facebook from "../../assetss/facebook.png";
import google from "../../assetss/image 47.png";
import style2 from "../../styles/Popups_styling/Login.module.css";
const Login = ({ setLoginPopup, setCreatePopup, setShowProfile }: any) => {
  return (
    <div style={{ overflow: "hidden" }}>
      <div className={style.CreateAccountPopUp}>
        <div className={style.CreateAccountPopUp_container}>
          <div className={style.CreateAccountPopUp_container_main}>
            <p className={style.CreateAccountPopUp_container_main_Header}>
              Login
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
          <div className={style2.loginPage_additionalDiv}>
            <div className={style2.loginPage_additionalDiv_left}>
              <input
                type="checkbox"
                className={style2.loginPage_additionalDiv_left_checkbox}
              />
              <p>Remember Me</p>
            </div>
            <p className={style2.loginPage_additionalDiv_para}>
              Forgot password?
            </p>
          </div>
          <div
            className={style.CreateAccountPopUp_CREATE}
            style={{ marginBottom: "2rem", cursor: "pointer" }}
            onClick={() => {
              setShowProfile(true);
              setLoginPopup(false);
            }}
          >
            Register
          </div>
          <p className={style.CreateAccountPopUp_txt}>Continue With</p>
          <div className={style.CreateAccountPopUp_socials}>
            <img src={facebook} alt="" />
            <img src={google} alt="" />
          </div>

          <p className={style.CreateAccountPopUp_txt2}>
            Don't have an account yet?
            <span
              onClick={() => {
                setLoginPopup(false);
                setCreatePopup(true);
              }}
              style={{ cursor: "pointer" }}
            >
              {" "}
              Create Account
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
