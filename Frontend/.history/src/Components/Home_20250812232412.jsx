// src/components/Home.js
import React from 'react';
import '../CSS/Home.css';
import Topbar from './Topbar';

export default function Home() {
  return (
    <div className="background-container">
      <Topbar />
      <div className="content">
        <h1>Welcome to My Page</h1>
        <p>This page has a beautiful background image.</p>
      </div>
    </div>
  );
}
