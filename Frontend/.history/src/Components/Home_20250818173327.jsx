import React, { useState, useEffect, useRef } from 'react';
import '../CSS/Home.css';

import img1 from '../assets/travel1.jpg';
import img2 from '../assets/travel2.jpg';
import img3 from '../assets/travel3.jpg';

import Topbar from './Topbar';
import Planform from './Planform';
import Reviews from './Reviews';
import Footer from './Footer';

export default function Home() {
  const images = [img1, img2, img3];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const planFormRef = useRef(null);



  const toggleSidebar = () => {
    if (isSidebarOpen) {
      setIsSidebarOpen(false);
    }
    else {
      setIsSidebarOpen(true);
    }
  };

  const scrollToPlanForm = () => {
    console.log("Hello");
    planFormRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [images.length]);



  return (
    <div className="home-container">
      {/* 1. Topbar */}
      <Topbar 
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        onPlanTripClick={scrollToPlanForm} />
      {isSidebarOpen && (
        <div className='overlay'
      )}

      {/* 2.sliding images */}
      <div className="slideshow-container">
        <div
          className="slide-track"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((src, idx) => (
            <img key={idx} src={src} alt={`Slide ${idx}`} className="slide-image" />
          ))}
        </div>

        <div className="overlay-text">
          <div className="overlay-buttons">
            <button className="btn signup-btn">Sign Up</button>
            <button className="btn login-btn">Log In</button>
          </div>
          <h1>Find your pause, wherever you go</h1>
          <p>Plan your business trips with ease and find the perfect spots to unwind.
            Experience the perfect balance between productivity and relaxation.</p>
        </div>
      </div>

      {/* 3. Planning Form */}
      <div ref={planFormRef}>
        <Planform/>
      </div>

      {/* 4. Reviews */}
      <Reviews/>

      {/* 5. Footer  */}
      <Footer/>

    </div>
  );
}
