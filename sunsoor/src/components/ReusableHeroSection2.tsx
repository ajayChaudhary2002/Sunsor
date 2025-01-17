import React from "react";
import style from "../styles/ReusableHeroSection2.module.css";
import dish1 from "../assetss/dish1.png";
import dish2 from "../assetss/dish2.png";
import dish3 from "../assetss/dish3.png";
import plyBtn from "../assetss/Polygon 1.png";
const ReusableHeroSection2 = () => {
  const objVid = [
    {
      img: dish1,
      dishName: "Delicious Dal Puri from Sunsor atta and Oil",
    },
    {
      img: dish2,
      dishName: "Samosa Made from Sunsor Atta",
    },
    {
      img: dish3,
      dishName: "Super Delicious Kachori from Sunsor atta and Oil",
    },
  ];
  return (
    <div className={style.ReusableHeroSection2_container}>
      <div className={style.ReusableHeroSection2_Videos_div}>
        <p className={style.ReusableHeroSection2_Videos_text}>Videos</p>

        <div className={style.ReusableHeroSection2_Videos_container}>
          {objVid.map((vids, index) => {
            return (
              <div className={style.ReusableHeroSection2_Videos_boxes}>
                <div className={style.ReusableHeroSection2_Videos_boxes_img}>
                  <img
                    src={vids.img}
                    alt=""
                    className={style.ReusableHeroSection2_Videos_imgg}
                  />
                  <div className={style.ReusableHeroSection2_Videos_playbtn}>
                    <img
                      src={plyBtn}
                      alt=""
                      className={style.ReusableHeroSection2_Videos_playbtn_icon}
                    />
                  </div>
                </div>

                <p className={style.ReusableHeroSection2_Videos_descText}>
                  Recipes | Stories
                </p>
                <p className={style.ReusableHeroSection2_Videos_name}>
                  {vids.dishName}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ReusableHeroSection2;
