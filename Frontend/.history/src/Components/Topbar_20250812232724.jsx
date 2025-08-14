// Topbar.jimport React from 'react';
import '../CSS/Topbar.css';

export default function Topbar() {
  return (
    <nav className="topbar">
      <div className="logo">MySite</div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}
