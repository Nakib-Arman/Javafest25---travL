// src/components/Topbar.js
import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import '../CSS/Topbar.css';
import Sidebar from './Sidebar';

export default function Topbar(props) {
  const navigate = useNavigate();
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
          <button onClick={() => navigate("/auth?mode=login")}>Log In</button>
          <button onClick={() => navigate("/signup")}>Sign Up</button>
          <button onClick={() => navigate("/contactus")}>Contact Us</button>
        </div>
      </nav>
      <Sidebar 
        sidebarClass={props.isSidebarOpen ? "sidebar" : "sidebar-show"} 
        toggleSidebar={props.toggleSidebar}
        onPlanTripClick={props.onPlanTripClick} 
        onReviewClick={props.onReviewClick}
      />
    </div>
  );
}
