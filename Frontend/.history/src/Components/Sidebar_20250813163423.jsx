import React from 'react';
import '../CSS/Sidebar.css';

export default function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <div className={`sidebar-overlay ${isOpen ? 'open' : ''}`} onClick={toggleSidebar}>
      <div className="sidebar" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={toggleSidebar}>×</button>
        <button>Home</button>
        <button>About</button>
        <button>Services</button>
        <button>Contact</button>
      </div>
    </div>
  );
}
