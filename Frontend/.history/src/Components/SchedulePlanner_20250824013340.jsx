import React, { useState } from "react";
import "../CSS/SchedulePlanner.css";
import Topbar from "./Topbar";

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
      {
        name: "Eiffel Tower",
        location: "Paris, France",
        rating: 5,
        description:
          "Iconic landmark offering panoramic views of Paris. Must-visit for first-time travelers.",
        image: "https://cdn.britannica.com/82/183382-050-D832EC3A/Detail-head-crown-Statue-of-Liberty-New.jpg"
      },
      {
        name: "Statue of Liberty",
        location: "New York City, USA",
        rating: 4,
        description:
          "Historic symbol of freedom with ferry rides and museum tours.",
        image: "https://source.unsplash.com/600x400/?statue,liberty,newyork"
      },
      {
        name: "Eiffel Tower",
        location: "Paris, France",
        rating: 5,
        description:
          "Iconic landmark offering panoramic views of Paris. Must-visit for first-time travelers.",
        image: "https://source.unsplash.com/600x400/?eiffel,tower,paris"
      },
      {
        name: "Statue of Liberty",
        location: "New York City, USA",
        rating: 4,
        description:
          "Historic symbol of freedom with ferry rides and museum tours.",
        image: "https://source.unsplash.com/600x400/?statue,liberty,newyork"
      },
      {
        name: "Eiffel Tower",
        location: "Paris, France",
        rating: 5,
        description:
          "Iconic landmark offering panoramic views of Paris. Must-visit for first-time travelers.",
        image: "https://source.unsplash.com/600x400/?eiffel,tower,paris"
      },
      {
        name: "Statue of Liberty",
        location: "New York City, USA",
        rating: 4,
        description:
          "Historic symbol of freedom with ferry rides and museum tours.",
        image: "https://source.unsplash.com/600x400/?statue,liberty,newyork"
      }
    ],
    "Relaxing Cafes": [
      {
        name: "Blue Bottle Cafe",
        location: "San Francisco, USA",
        rating: 4,
        description:
          "Minimalist cafe with specialty coffee and cozy atmosphere.",
        image: "https://source.unsplash.com/600x400/?cafe,coffee"
      },
      {
        name: "Cafe de Flore",
        location: "Paris, France",
        rating: 5,
        description:
          "Historic Parisian cafe with charm and delicious pastries.",
        image: "https://source.unsplash.com/600x400/?cafe,paris"
      }
    ],
    "Parks": [
      {
        name: "Central Park",
        location: "New York City, USA",
        rating: 5,
        description:
          "Green oasis in the middle of NYC with walking trails and lakes.",
        image: "https://source.unsplash.com/600x400/?central,park,newyork"
      },
      {
        name: "Hyde Park",
        location: "London, UK",
        rating: 4,
        description:
          "Famous London park perfect for picnics, walks, and outdoor events.",
        image: "https://source.unsplash.com/600x400/?hyde,park,london"
      }
    ],
    "Museums": [
      {
        name: "Louvre Museum",
        location: "Paris, France",
        rating: 5,
        description:
          "World’s largest art museum housing masterpieces like the Mona Lisa.",
        image: "https://source.unsplash.com/600x400/?louvre,museum"
      },
      {
        name: "The British Museum",
        location: "London, UK",
        rating: 5,
        description:
          "A treasure trove of human history with artifacts from around the world.",
        image: "https://source.unsplash.com/600x400/?british,museum"
      }
    ],
    "Shopping": [
      {
        name: "Champs-Élysées",
        location: "Paris, France",
        rating: 4,
        description:
          "Luxury shopping avenue with boutiques, cafes, and theaters.",
        image: "https://source.unsplash.com/600x400/?champs,elysees,paris"
      },
      {
        name: "Fifth Avenue",
        location: "New York City, USA",
        rating: 5,
        description:
          "World-renowned shopping street with flagship stores and high fashion.",
        image: "https://source.unsplash.com/600x400/?fifth,avenue,newyork"
      }
    ],
    "Local Food": [
      {
        name: "Tsukiji Market",
        location: "Tokyo, Japan",
        rating: 5,
        description:
          "Famous for sushi, fresh seafood, and vibrant market experience.",
        image: "https://source.unsplash.com/600x400/?tsukiji,market,tokyo"
      },
      {
        name: "La Boqueria",
        location: "Barcelona, Spain",
        rating: 4,
        description:
          "Bustling food market offering local produce, tapas, and seafood.",
        image: "https://source.unsplash.com/600x400/?la,boqueria,barcelona"
      }
    ]
  };

  const [activePreference, setActivePreference] = useState(preferences[0]);

  // Map the results for the current active preference
  const results = resultsData[activePreference] || [];

  return (
    <div className="schedule-planner">
      <Topbar/>
      
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
                {"★".repeat(result.rating)}
                {"☆".repeat(5 - result.rating)}
              </div>

              {/* Description */}
              <p className="result-description">{result.description}</p>

              {/* Actions */}
              <div className="result-actions">
                <button className="btn-primary">View Details</button>
                <button className="btn-secondary">Add to My Plan</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
