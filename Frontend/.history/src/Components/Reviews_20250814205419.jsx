import React from "react";
import '../CSS/Reviews.css';

export default function Reviews() {
    return(
        <div className="review-section">
        <h2 className="review-title">See what our users say</h2>

        <div className="review-slideshow">
          <div className="review-line top-line"></div>

          <div
            className="review-track"
            style={{ transform: `translateX(-${reviewIndex * cardWidth}px)` }}
          >
            {reviews.map((review, idx) => (
              <div
                className="review-card"
                key={idx}
                ref={idx === 0 ? cardRef : null}
              >
                <p className="review-text">“{review.text}”</p>
                <span className="review-author">— {review.name}</span>
              </div>
            ))}
          </div>

          <div className="review-line bottom-line"></div>
        </div>
      </div>
    )
}