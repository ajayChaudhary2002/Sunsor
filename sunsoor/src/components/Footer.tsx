import React from "react";
import style from "../styles/Footer.module.css";
import sunsorLogo from "../assetss/Sunsoor Logo.png";

const Footer = () => {
  return (
    <div className={style.Footer_container}>
      <div className={style.mainFooter}>
        <div className={style.mainFooter_div1}>
          <img src={sunsorLogo} alt="" className={style.mainFooter_div1_img} />
          <p className={style.mainFooter_div1_txt1}>Can’t get enough?</p>
          <p className={style.mainFooter_div1_txt2}>
            Stay up to date with our secret Product!
          </p>
          <div className={style.mainFooter_div1_EmailDiv}>
            <input
              type="email"
              placeholder="Email"
              className={style.mainFooter_div1_emailBox}
            />
            <button className={style.mainFooter_div1_submitBtn}>Submit</button>
          </div>
        </div>

        <div className={style.mainFooter_div_right}>
          <div className={style.mainFooter_div2}>
            <div className={style.mainFooter_div2_topPart}>
              <p className={style.mainFooter_div2_topPart_header}>
                Important Links
              </p>
              <p className={style.mainFooter_div2_topPart_txt}>Our Product</p>
              <p className={style.mainFooter_div2_topPart_txt}>Contact us</p>
              <p className={style.mainFooter_div2_topPart_txt}>About Us</p>
            </div>
            <div className={style.mainFooter_div2_bottomPart}>
              <p className={style.mainFooter_div2_bottomPart_para}>
                info@Sunsor.com
              </p>
            </div>
          </div>
          <div className={style.mainFooter_div3_breakLine}></div>
          <div className={style.mainFooter_div3}>
            <div className={style.mainFooter_div2_topPart}>
              <p className={style.mainFooter_div2_topPart_header}>Terms</p>
              <p className={style.mainFooter_div2_topPart_txt}>FAQ</p>
              <p className={style.mainFooter_div2_topPart_txt}>OUR POLICY</p>
              <p className={style.mainFooter_div2_topPart_txt}>
                Cancellation & Return Policy
              </p>
            </div>
            <div className={style.mainFooter_div3_bottomPart}>
              <p className={style.mainFooter_div3_bottomPart_para}>
                +11 123 456 7890
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={style.bottomOfFooter}>
        <p className={style.bottomOfFooter_para1}>
          Copyright © 2024 Sunsor  All Rights Reserved.
        </p>
        <p className={style.bottomOfFooter_para1}>Terms & Conditions</p>
      </div>
    </div>
  );
};

export default Footer;
