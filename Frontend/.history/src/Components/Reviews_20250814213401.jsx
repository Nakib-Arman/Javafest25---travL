import React, { useState, useEffect,useRef } from "react";
import '../CSS/Reviews.css';

export default function Reviews() {

    const reviews = [
        { name: "Sophia L.", text: "This service completely transformed my business trips. I now actually look forward to traveling!" },
        { name: "James T.", text: "Finding places to relax between meetings was a game changer for my productivity." },
        { name: "Aisha M.", text: "Seamless planning, beautiful spots, and stress-free scheduling. Highly recommend!" },
        { name: "Michael R.", text: "I’ve discovered hidden gems in every city I’ve visited thanks to this app!" },
        { name: "Emily W.", text: "Perfect balance between work and relaxation — exactly what I needed." },
        { name: "David K.", text: "No more stress trying to figure out where to go. Everything’s planned perfectly." },
        { name: "Priya S.", text: "It’s like having a local guide and personal assistant rolled into one." },
        { name: "Liam P.", text: "Made my work trips more enjoyable than ever before!" },
        { name: "Hannah G.", text: "Smart recommendations and easy scheduling. Love it!" }
    ];


    const [reviewIndex, setReviewIndex] = useState(0);
    const [cardWidth, setCardWidth] = useState(0);
    const cardRef = useRef(null);



    useEffect(() => {
        const timer = setInterval(() => {
            setReviewIndex(prev => {
                const maxIndex = reviews.length - 3; // max starting index
                return prev < maxIndex ? prev + 1 : 0; // reset to 0 after last slide
            });
        }, 3000);
        return () => clearInterval(timer);
    }, [reviews.length]);


    useEffect(() => {
        if (cardRef.current) {
            setCardWidth(cardRef.current.offsetWidth + 15);
        }
    }, []);

    return (
        <div className="review-section">
            <h2 className="review-title">See what other users say</h2>

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
    );
}