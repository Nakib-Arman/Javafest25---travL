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

      /* Results Section */
.results-section {
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 25px;
}

/* Card Container */
.result-card {
  display: flex;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  transition: transform 0.2s ease;
  min-height: 220px;
}

.result-card:hover {
  transform: translateY(-4px);
}

/* Image Section */
.result-image {
  flex: 1.2;
  overflow: hidden;
}

.result-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Details Section */
.result-details {
  flex: 2;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.result-title {
  font-size: 1.6rem;
  font-weight: bold;
  margin-bottom: 5px;
}

.result-location {
  font-size: 1rem;
  color: #555;
  margin-bottom: 10px;
}

.result-rating {
  color: #f4b400; /* gold stars */
  font-size: 1.2rem;
  margin-bottom: 12px;
}

.result-description {
  font-size: 0.95rem;
  color: #333;
  margin-bottom: 16px;
}

/* Buttons */
.result-actions {
  display: flex;
  gap: 10px;
}

.btn-primary {
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 8px 14px;
  border-radius: 8px;
  cursor: pointer;
}

.btn-secondary {
  background-color: #eee;
  color: #333;
  border: none;
  padding: 8px 14px;
  border-radius: 8px;
  cursor: pointer;
}

    </div>
  );
}
