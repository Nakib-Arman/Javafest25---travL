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
                        className={`preference-btn ${activePreference === pref ? "active" : ""
                            }`}
                        onClick={() => setActivePreference(pref)}
                    >
                        {pref}
                    </button>
                ))}
            </div>

            {/* Results */}
            <div className="results-section">
                {results.map((result, idx) => (
                    <div className="result-card" key={idx}>
                        {/* Left: Image */}
                        <div className="result-image">
                            <img src={result.image} alt={result.name} />
                        </div>

                        {/* Right: Details */}
                        <div className="result-details">
                            <h3 className="result-title">{result.name}</h3>
                            <p className="result-location">📍 {result.location}</p>

                            {/* Stars */}
                            <div className="result-rating">
                                {"★".repeat(result.rating)}{"☆".repeat(5 - result.rating)}
                            </div>

                            {/* Description */}
                            <p className="result-description">{result.description}</p>

                            {/* Actions */}
                            <div className="result-actions">
                                <button className="btn-primary">View Details</button>
                                <button className="btn-secondary">Save</button>
                            </div>
                        </div>
                    </div>
                ))}
            <
