import React from "react";
import Header from "../components/Header";
import style from "../styles/ContactUs.module.css";
import style2 from "../styles/ourStory.module.css";
import { useState } from "react";
import location from "../assetss/Location.svg";
import call from "../assetss/Call.png";
import email from "../assetss/Email.png";
import TopFooterPart from "../components/TopFooterPart";
import Footer from "../components/Footer";
import { useEffect } from "react";
import CreateAccount from "../components/PopUps/CreateAccount";
import Login from "../components/PopUps/Login";
const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    subject: "",
    termsAccepted: false,
  });

  // Step 2: Handle input changes
  const handleInputChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value, // Handle checkbox specifically
    });
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form submitted with data:", formData);
  };
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
        <p className={style2.ourStory_container_heading}>Contact us</p>
        <p className={style2.ourStory_container_para}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
      </div>

      {/* FORM SECTION */}
      <div className={style.fromSection_container}>
        {/* LEFT DIV */}
        <form onSubmit={handleSubmit} className={style.fromSection_form}>
          <div className={style.fromSection_form_div}>
            <label htmlFor="name" className={style.fromSection_form_text}>
              Name*
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className={style.ContactUs_inputField}
            />
          </div>

          <div className={style.fromSection_form_div}>
            <label htmlFor="email" className={style.fromSection_form_text}>
              Email*
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className={style.ContactUs_inputField}
            />
          </div>

          <div className={style.fromSection_form_div}>
            <label
              htmlFor="phoneNumber"
              className={style.fromSection_form_text}
            >
              Phone Number*
            </label>
            <textarea
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              required
              className={style.ContactUs_inputField}
            />
          </div>
          <div className={style.fromSection_form_div}>
            <label htmlFor="subject" className={style.fromSection_form_text}>
              Subject*
            </label>
            <textarea
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              required
              className={style.ContactUs_inputField}
              style={{ height: "119px" }}
            />
          </div>

          <div className={style.fromSection_formSubmit_div}>
            <label className={style.fromSection_form_text}>
              <input
                type="checkbox"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleInputChange}
                required
                className={style.fromSection_form_checkbox}
                id="checkbox"
              />
              Accept Terms & Conditions
            </label>
            <button type="submit" className={style.fromSection_form_submit}>
              Submit
            </button>
          </div>
        </form>

        {/* RIGHT PART */}
        <div className={style.ContactUs_RightPart}>
          <div className={style.ContactUs_RightPart_container}>
            <p className={style.ContactUs_RightPart_container_text}>Contact</p>
            <div className={style.ContactUs_RightPart_container_div}>
              <img src={location} alt="" style={{ paddingTop: "6px" }} />
              <p className={style.ContactUs_RightPart_container_div_text}>
                Third Floor, Dhaka Tower, GMS Rd, Dehradun, Uttarakhand -
                248171, INDIA
              </p>
            </div>
            <div className={style.ContactUs_RightPart_container_div}>
              <img src={call} alt="" />
              <p className={style.ContactUs_RightPart_container_div_text}>
                +1234567890
              </p>
            </div>
            <div className={style.ContactUs_RightPart_container_div}>
              <img src={email} alt="" />
              <p className={style.ContactUs_RightPart_container_div_text}>
                Sunsor@support.com
              </p>
            </div>
          </div>
        </div>
      </div>
      <TopFooterPart />
      <Footer />
    </div>
  );
};

export default ContactUs;
