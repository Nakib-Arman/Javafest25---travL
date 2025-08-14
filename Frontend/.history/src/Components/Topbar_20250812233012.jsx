// src/components/Topbar.js
import React from 'react';
import '../CSS/Topbar.css';

export default function Topbar() {
  return (
    <nav className="topbar">
      <a className="logo-link" href="/"></a>

      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}
