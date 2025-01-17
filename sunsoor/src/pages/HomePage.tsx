import React from "react";
import Header from "../components/Header";
import HomePageHeroSection from "../components/HomePageHeroSection";
import Footer from "../components/Footer";
import TopFooterPart from "../components/TopFooterPart";
import LocationPopUp from "../components/PopUps/LocationPopUp";
import { useState } from "react";
import Login from "../components/PopUps/Login";
import CreateAccount from "../components/PopUps/CreateAccount";
import { useEffect } from "react";
const HomePage = () => {
  const [open, setOpen] = useState(true);
  const handleClose = () => {
    setOpen(false);
  };
  const [loginPopup, setLoginPopup] = useState(false);
  const [createPopup, setCreatePopup] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  useEffect(() => {
    // Scroll to the top of the page
    window.scrollTo(0, 0);
  }, []);
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
      {!loginPopup && !createPopup && (
        <LocationPopUp open={open} handleClose={handleClose} />
      )}
      <div>
        <Header
          setLoginPopup={setLoginPopup}
          setCreatePopup={setCreatePopup}
          showProfile={showProfile}
        />
        <HomePageHeroSection />
        <TopFooterPart />
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
