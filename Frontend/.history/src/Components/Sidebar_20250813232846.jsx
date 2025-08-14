// src/components/Sidebar.js
import React from 'react';
import '../CSS/Sidebar.css';

export default function Sidebar(props) {
  return (
    <div className={props.className}>
      {/* <div className="left-section">
        <div className="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <a href="/" className="logo-link"></a>
      </div> */}
      <button>Plan a Schedule</button>
      <button>Reviews</button>
      <button>About Us</button>
    </div>
  );
}
