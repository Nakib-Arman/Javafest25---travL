// src/components/Topbar.js
import React, { useState } from 'react';
import '../CSS/Topbar.css';
import Sidebar from './Sidebar';

export default function Topbar(props) {
  return (
    <div>
      <nav className="topbar">

        <div className="left-section">
          <div className="hamburger" onClick={props.toggleSidebar}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <a href="/" className="logo-link"></a>
        </div>
        <div className="nav-buttons">
          <button>Log In</button>
          <button>Sign Up</button>
          <button>Contact Us</button>
        </div>
      </nav>
      <Sidebar 
        sidebarClass={props.isSidebarOpen ? "sidebar" : "sidebar-show"} 
        toggleSidebar={props.to}
        onPlanTripClick={props.onPlanTripClick} 
      />
    </div>
  );
}
