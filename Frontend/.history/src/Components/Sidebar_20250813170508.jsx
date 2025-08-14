// src/components/Sidebar.js
import React from 'react';
import '../CSS/Sidebar.css';

export default function Sidebar(className) {
  return (
    <div className="sidebar">
      {/* <div className="left-section">
        <div className="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <a href="/" className="logo-link"></a>
      </div> */}
      <button>Dashboard</button>
      <button>Destinations</button>
      <button>Bookings</button>
      <button>Profile</button>
    </div>
  );
}
