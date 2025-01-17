import React from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import Resources from './pages/Resources';
import OurStory from './pages/OurStory';
import Blogs from './pages/Blogs';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import { Routes, Route } from 'react-router-dom';
import HeroSectionExplore from './pages/HeroSectionExplore';
import OurProduct from './pages/OurProduct';
import Product from './pages/Product';
import ProductDescription from './pages/ProductDescription';
import CreateAccount from './components/PopUps/CreateAccount';
import Login from './components/PopUps/Login';
import MyCart from './pages/MyCart';
import CheckOut from './pages/CheckOut';
import CheckoutPopUp from './components/PopUps/CheckoutPopUp';
import Profile from './pages/Profile';
function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={ <HomePage/>}/>
      <Route path='/ourProduct' element={ <OurProduct/>}/>
      <Route path='/resources' element={ <Resources/>}/>
      <Route path='/ourStory' element={ <OurStory/>}/>
      <Route path='/blogs' element={ <Blogs/>}/>
      <Route path='/aboutUs' element={ <AboutUs/>}/>
      <Route path='/contactUs' element={ <ContactUs/>}/>
      <Route path='/heroSectionExplore' element={ <HeroSectionExplore/>}/>
      <Route path='/product' element={ <Product/>}/>
      <Route path='/productDescription' element={ <ProductDescription/>}/>
      {/* <Route path='/createAccount' element={ <CreateAccount/>}/>
      <Route path='/loginPage' element={ <Login/>}/> */}
      <Route path='/myCart' element={ <MyCart/>}/>
      <Route path='/checkout' element={ <CheckOut/>}/>
      {/* <Route path='/checkoutPopup' element={ <CheckoutPopUp/>}/> */}
      <Route path='/profile' element={ <Profile/>}/>
      
    </Routes>
     
    </>
  );
}

export default App;
