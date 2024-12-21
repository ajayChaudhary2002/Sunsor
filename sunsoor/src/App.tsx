import React from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import Resources from './pages/Resources';
import OurStory from './pages/OurStory';
import Blogs from './pages/Blogs';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={ <HomePage/>}/>
      <Route path='/resources' element={ <Resources/>}/>
      <Route path='/ourStory' element={ <OurStory/>}/>
      <Route path='/blogs' element={ <Blogs/>}/>
      <Route path='/aboutUs' element={ <AboutUs/>}/>
      <Route path='/contactUs' element={ <ContactUs/>}/>
    </Routes>
     
    </>
  );
}

export default App;
