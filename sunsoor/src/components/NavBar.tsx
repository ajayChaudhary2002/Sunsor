import React from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import style from '../styles/NavBar.module.css'
import magnify from '../assetss/Magnify.svg'
import userIcon from '../assetss/userIcon.svg'
import sunsorHeader from '../assetss/Sunsor Thumbnail for Header.png';
const NavBar = () => {
    const location=useLocation();
  return (
    <div className={style.navBarHead}>

        {/* SUNSOOR LOGO */}
        <div className={style.sunsoorHeaderDiv}>
            <NavLink to='/' >
            <img src={sunsorHeader} alt='' className={style.sunsoorLogo}/>
            </NavLink>
        </div>



        {/* LIST OF ALL THE PAGES */}
        <div className={style.navBarLinks}>
        <ul style={{ listStyle: 'none', padding: 0 }} className={style.navLinksText}>
    <li style={{ display: 'inline', marginRight: '20px' }}>
        <NavLink 
            to="/" 
            style={{
                textDecoration: 'none',
                fontWeight: 'normal',  // Removed active check
                color: 'black'  // Default color
            }}
        >
            Our Product
        </NavLink>
    </li>
    <li style={{ display: 'inline', marginRight: '20px' }}>
        <NavLink 
            to="/ourStory" 
            style={{
                textDecoration: 'none',
                fontWeight: 'normal',
                color: 'black'
            }}
        >
            Our Story
        </NavLink>
    </li>
    <li style={{ display: 'inline', marginRight: '20px' }}>
        <NavLink 
            to="/blogs" 
            style={{
                textDecoration: 'none',
                fontWeight: 'normal',
                color: 'black'
            }}
        >
            Blogs
        </NavLink>
    </li>
    <li style={{ display: 'inline', marginRight: '20px' }}>
        <NavLink 
            to="/aboutUs" 
            style={{
                textDecoration: 'none',
                fontWeight: 'normal',
                color: 'black'
            }}
        >
            About Us
        </NavLink>
    </li>
    <li style={{ display: 'inline', marginRight: '20px' }}>
        <NavLink 
            to="/contactUs" 
            style={{
                textDecoration: 'none',
                fontWeight: 'normal',
                color: 'black'
            }}
        >
            Contact Us
        </NavLink>
    </li>
</ul>

        </div>

        {/* SEARCH ICON AND USER ICON */}
        <div className={style.navIcons}>
            <div className={style.searchIcon}>
                <img src={magnify} alt='' className={style.magnify}/>
            </div>
            <div className={style.userIcon}>
                <img src={userIcon} alt='' className={style.userIcon}/>
            </div>
        </div>
    </div>
  )
}

export default NavBar