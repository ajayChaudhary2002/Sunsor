import React from 'react'
import style from '../../styles/Popups_styling/NavBarOptions.module.css'
import { NavLink } from 'react-router-dom'
const NavBarOptions = () => {
  const handleLinkClick = (event: any) => {
    event.stopPropagation(); // Prevent click from propagating outside the dropdown
  };
  
  return (
    <div>
        <div className={style.NavBarOptionNavLinksText}>
    <NavLink to="/" style={{ textDecoration: "none",width:"100%" }} onClick={handleLinkClick}>
      <p className={`${style.NavBarOptionNavLinkText} `}>Home</p>
    </NavLink>

    <NavLink to="/ourProduct" style={{ textDecoration: "none",width:"100%" }} onClick={handleLinkClick}>
      <p className={`${style.NavBarOptionNavLinkText} `}>Our Product</p>
    </NavLink>

    <NavLink to="/ourStory" style={{ textDecoration: "none" }} onClick={handleLinkClick}>
      <p className={`${style.NavBarOptionNavLinkText} `}>Our Story</p>
    </NavLink>

    <NavLink to="/blogs" style={{ textDecoration: "none" }} onClick={handleLinkClick}>
      <p className={`${style.NavBarOptionNavLinkText} `}>Blogs</p>
    </NavLink>

    <NavLink to="/aboutUs" style={{ textDecoration: "none" }} onClick={handleLinkClick}>
      <p className={`${style.NavBarOptionNavLinkText}`}>About Us</p>
    </NavLink>

    <NavLink to="/contactUs" style={{ textDecoration: "none" }} onClick={handleLinkClick}>
      <p className={`${style.NavBarOptionNavLinkText}`}>Contact Us</p>
    </NavLink>
        </div>

    </div>
  )
}

export default NavBarOptions
