// src/components/Topbar.js
import React, { useState } from 'react';
import '../CSS/Topbar.css';
import Sidebar from './Sidebar';

export default function Topbar() {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  setIsSidebarOpen()
  {
    
  }

  return (
    <div>
    <nav className="topbar">

      <div className="left-section">
        <div className="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <a href="/" className="logo-link"></a>
      </div>
      <div className="nav-buttons">
        <button>Home</button>
        <button>About</button>
        <button>Services</button>
        <button>Contact</button>
      </div>
    </nav>
    <Sidebar/>
    </div>
  );
}
