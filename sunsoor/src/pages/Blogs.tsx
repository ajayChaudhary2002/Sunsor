import React from "react";
import Header from "../components/Header";
import style2 from "../styles/ourStory.module.css";
import style from "../styles/Blogs.module.css";
import d1 from "../assetss/dish1.png";
import d2 from "../assetss/dish2.png";
import d3 from "../assetss/dish3.png";
import d4 from "../assetss/dish4.png";
import d5 from "../assetss/dish5.png";
import d6 from "../assetss/dish6.png";
import d7 from "../assetss/dish7.png";
import d8 from "../assetss/dish8.png";
import d9 from "../assetss/dish9.png";
import TopFooterPart from "../components/TopFooterPart";
import Footer from "../components/Footer";
import { useEffect } from "react";
import { useState } from "react";
import Login from "../components/PopUps/Login";
import CreateAccount from "../components/PopUps/CreateAccount";
const Blogs = () => {
  const blogsObject = [
    {
      img: d1,
      text: "Delicious Dal Puri from Sunsor atta and Oil",
    },
    {
      img: d2,
      text: "Samosa Made from Sunsor SAtta",
    },
    {
      img: d3,
      text: "Super Delicious Kachori from Sunsor atta and Oil",
    },
    {
      img: d4,
      text: "Super Delicious Aalu Puri from Sunsor atta and Oil",
    },
    {
      img: d5,
      text: "Kachori Made from Sunsor Atta",
    },
    {
      img: d6,
      text: "Super Delicious Samosa from Sunsor atta and Oil",
    },
    {
      img: d7,
      text: "Delicious Aalu Chane from Sunsor atta and Oil",
    },
    {
      img: d8,
      text: "Samosa Chhane Made from Sunsor Atta and Oil",
    },
    {
      img: d9,
      text: "Super Delicious Kachori from Sunsor atta and Oil",
    },
  ];
  useEffect(() => {
    // Scroll to the top of the page
    window.scrollTo(0, 0);
  }, []);
  const [loginPopup, setLoginPopup] = useState(false);
  const [createPopup, setCreatePopup] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  return (
    <div>
      {loginPopup && (
        <Login
          setLoginPopup={setLoginPopup}
          setCreatePopup={setCreatePopup}
          setShowProfile={setShowProfile}
        />
      )}
      {createPopup && (
        <CreateAccount
          setCreatePopup={setCreatePopup}
          setLoginPopup={setLoginPopup}
          setShowProfile={setShowProfile}
        />
      )}
      <Header
        setLoginPopup={setLoginPopup}
        setCreatePopup={setCreatePopup}
        showProfile={showProfile}
      />
      <div className={style2.ourStory_container}>
        <p className={style2.ourStory_container_heading}>Blogs</p>
        <p className={style2.ourStory_container_para}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
      </div>

      <div className={style.BlogsContainer}>
        {blogsObject.map((item, index) => {
          return (
            <div key={index} className={style.BlogsContainer_perticularItemDiv}>
              <div className={style.BlogsContainer_perticularItemDiv_imageDiv}>
                <img src={item.img} alt="" />

                <p
                  className={style.BlogsContainer_perticularItemDiv_commonPara}
                >
                  Recipes | Stories
                </p>
                <p className={style.BlogsContainer_perticularItemDiv_itemTitle}>
                  {item.text}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <TopFooterPart />
      <Footer />
    </div>
  );
};

export default Blogs;
