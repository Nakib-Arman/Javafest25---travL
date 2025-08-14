import React, { useState, useEffect, useRef } from 'react';
import '../CSS/Home.css';

import img1 from '../assets/travel1.jpg';
import img2 from '../assets/travel2.jpg';
import img3 from '../assets/travel3.jpg';

import Topbar from './Topbar';
import Planform from './Planform';
import Reviews from './Reviews';

export default function Home() {
  const images = [img1, img2, img3];
  const [currentIndex, setCurrentIndex] = useState(0);


  const cardRef = useRef(null);


  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [images.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      setReviewIndex(prev => {
        const maxIndex = reviews.length - 3; // max starting index
        return prev < maxIndex ? prev + 1 : 0; // reset to 0 after last slide
      });
    }, 3000);
    return () => clearInterval(timer);
  }, [reviews.length]);
  

  useEffect(() => {
    if (cardRef.current) {
      setCardWidth(cardRef.current.offsetWidth + 15);
    }
  }, []);


  return (
    <div className="home-container">
      {/* 1. Topbar */}
      <Topbar />

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
      <Planform/>

      {/* 4. Reviews */}
      <Reviews/>

    </div>
  );
}
