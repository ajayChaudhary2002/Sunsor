import React from "react";
import style from "../styles/TopFooterPart.module.css";
import insta from "../assetss/instagram 1.png";
import fb from "../assetss/facebook 1.png";
import pinterest from "../assetss/pinterest 1.png";
import yt from "../assetss/youtube 1.png";

const TopFooterPart = () => {
  return (
    <div className={style.TopFooterPart_container}>
      <p className={style.TopFooterPart_txt1}>Sharing is Caring</p>
      <p className={style.TopFooterPart_txt2}>Follow us @Sunsor</p>
      <div className={style.TopFooterPart_socials}>
        <div className={style.TopFooterPart_socialMedia}>
          <img src={insta} alt="insta" />
        </div>
        <div className={style.TopFooterPart_socialMedia}>
          <img src={fb} alt="fb" />
        </div>
        <div className={style.TopFooterPart_socialMedia}>
          <img src={pinterest} alt="pinterest" />
        </div>
        <div className={style.TopFooterPart_socialMedia}>
          <img src={yt} alt="yt" />
        </div>
      </div>
    </div>
  );
};

export default TopFooterPart;
