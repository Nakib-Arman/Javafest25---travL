// src/components/Home.js
import React, { useState, useEffect } from 'react';
import '../CSS/Home.css';
import Topbar from './Topbar';

// Import travel-related images
import img1 from '../assets/travel1.jpg';
import img2 from '../assets/travel2.jpg';
import img3 from '../assets/travel3.jpg';

export default function Home() {
  const images = [img1, img2, img3];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // change image every 3 seconds
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="background-container">
      <Topbar />
      <div className="content">
        <h1>Welcome to My Page</h1>
        <p>This page has a beautiful background image.</p>

        <div className="slideshow-container">
          <img
            src={images[currentIndex]}
            alt="Travel destination"
            className="slide-image"
          />
        </div>
      </div>
    </div>
  );
}
