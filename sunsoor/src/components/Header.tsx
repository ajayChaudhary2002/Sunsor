import React from 'react'
import Location from '../assetss/Location.svg';

import { NavLink, useLocation } from 'react-router-dom';


import starHeader from '../assetss/star.png'
import {useState} from 'react'
import style from '../styles/Header.module.css'
import NavBar from './NavBar';
const Header = () => {
    const [currentRoute,setCurrentRoute]=useState<string>('');
    const location=useLocation();
    
    
  return (
    <div>
        <div className={style.headerPart}>
            {/* LEFT PART */}
            <div className={style.starDiv}>
                <img src={starHeader} alt='' className={style.starImg}/>
                <p className={style.starDivText}> Get 5% Off your first order, <span className={style.starDivBoldPart}>Promo: ORDER5</span></p>
            </div>
            {/* RIGHT PART */}
            <div className={style.addressDiv}>
                <div className={style.headerLocarionDiv}>
                    <img src={Location} alt='' className={style.LocationIcon} style={{ fill: '#CE2225' }} />
                </div>
                <div className={style.locationTextDiv}>
                    <p className={style.LocationText}>Dehradun, Uttarakhand 
                    - 248171, INDIA</p>
                </div>
            </div>
        </div>

        {/* NAV BAR */}

        <NavBar/>

        
    </div>

    
  )
}

export default Header