// src/components/Sidebar.js
import React from 'react';
import '../CSS/Sidebar.css';

export default function Sidebar(props) {
  return (
    <div className={props.sidebarClass}>
      {/* Sidebar Header */}
      <div className="sidebar-header">
        <div className="hamburger" onClick={props.toggleSidebar}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <a href="/" className="logo-link"></a>
      </div>

      {/* Sidebar Buttons */}
      <div className="sidebar-buttons">
        <button onClick={props.onPlanTripClick}>Plan a Schedule</button>
        <button onClick={}>Reviews</button>
        <button>About Us</button>
      </div>
    </div>
  );
}
