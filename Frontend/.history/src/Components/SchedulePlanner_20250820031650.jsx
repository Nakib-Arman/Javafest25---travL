import React, { useState } from "react";
import "../CSS/SchedulePlanner.css";

export default function SchedulePlanner() {
  // Example preferences (these come from form submission ideally)
  const preferences = [
    "Tourist Spots",
    "Relaxing Cafes",
    "Parks",
    "Museums",
    "Shopping",
    "Local Food"
  ];

  // Example results for each preference
  const resultsData = {
    "Tourist Spots": [
      { title: "Eiffel Tower", desc: "Iconic landmark in Paris with stunning views." },
      { title: "Statue of Liberty", desc: "Historic symbol of freedom in New York City." }
    ],
    "Relaxing Cafes": [
      { title: "Blue Bottle Cafe", desc: "Minimalist cafe with specialty coffee." },
      { title: "Cafe de Flore", desc: "Historic Parisian cafe with charm." }
    ],
    "Parks": [
      { title: "Central Park", desc: "Green oasis in the middle of NYC." },
      { title: "Hyde Park", desc: "Famous London park with lakes & walking trails." }
    ],
    "Museums": [
      { title: "Louvre Museum", desc: "World’s largest art museum in Paris." },
      { title: "The British Museum", desc: "A treasure of human history in London." }
    ],
    "Shopping": [
      { title: "Champs-Élysées", desc: "Luxury shopping avenue in Paris." },
      { title: "Fifth Avenue", desc: "World-renowned shopping street in NYC." }
    ],
    "Local Food": [
      { title: "Tsukiji Market", desc: "Famous for sushi in Tokyo." },
      { title: "La Boqueria", desc: "Bustling food market in Barcelona." }
    ]
  };

  const [activePreference, setActivePreference] = useState(preferences[0]);

  return (
    <div className="schedule-planner">
      {/* Sidebar */}
      <div className="preferences-sidebar">
        <h3 className="sidebar-title">Preferences</h3>
        {preferences.map((pref, idx) => (
          <button
            key={idx}
            className={`preference-btn ${
              activePreference === pref ? "active" : ""
            }`}
            onClick={() => setActivePreference(pref)}
          >
            {pref}
          </button>
        ))}
      </div>

      {/* Main Content */}
      <div className="results-section">
        <h2 className="results-title">{activePreference}</h2>
        <div className="results-container">
          {resultsData[activePreference].map((item, idx) => (
            <div className="result-card" key={idx}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
