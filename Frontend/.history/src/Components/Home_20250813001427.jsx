// src/components/Home.js
import React, { useState, useEffect } from 'react';
import '../CSS/Home.css';
import Topbar from './Topbar';
import Sidebar from './Sidebar';

import img1 from '../assets/travel1.jpg';
import img2 from '../assets/travel2.jpg';
import img3 from '../assets/travel3.jpg';

export default function Home() {
  const images = [img1, img2, img3];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="home-container">
      <Topbar />
      <Sidebar />

      <div className="slideshow-container">
        <img
          src={images[currentIndex]}
          alt="Travel"
          className="slide-image"
        />
        <div className="overlay-text">
          <h1>Explore the World</h1>
          <p>Find your pause, wherever you go.</p>
        </div>
      </div>
    </div>
  );
}
