// src/components/Sidebar.js
import React from 'react';
import '../CSS/Sidebar.css';

export default function Sidebar(props) {

  const handleClick =

  return (
    <div className={props.className}>
      <button onClick={ props.onPlanTripClick }>Plan a Schedule</button>
      <button>Reviews</button>
      <button>About Us</button>
    </div>
  );
}
