// src/components/Sidebar.js
import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import '../CSS/Sidebar.css';

export default function Sidebar(props) {
  const navigate = useNavigate();
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
        <button onClick={props.onReviewClick}>Reviews</button>
        <button onClick={() => Navigate("/aboutus")}>About Us</button>
      </div>
    </div>
  );
}
