// src/components/Topbar.js
import React from 'react';
import '../CSS/Topbar.css';

export default function Topbar() {
  return (
    <nav className="topbar">
      <a className="logo-link" href="/"></a>
      <div className="hamburger">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="nav-buttons">
        <button>Home</button>
        <button>About</button>
        <button>Services</button>
        <button>Contact</button>
      </div>
    </nav>
  );
}
