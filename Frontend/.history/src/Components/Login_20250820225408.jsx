import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/Login.css";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      console.log("Logging in...");
      navigate("/schedule-form");
    } else {
      console.log("Signing up...");
      navigate("/schedule-form");
    }
  };

  return (
    <div className="auth-page">
      {/* Hero Section */}
      <div className="auth-hero">
        <img
          src="https://img.freepik.com/free-photo/travel-items-assortment-still-life_23-2149078497.jpg"
          alt="Travel Planning"
        />
        <div className="hero-text">
          <h1>{isLogin ? "Welcome Back" : "Start Your Journey"}</h1>
          <p>
            {isLogin
              ? "Login to manage your business trips and make the most of your free time."
              : "Create your account to plan trips, track meetings, and explore curated suggestions."}
          </p>
        </div>
      </div>

      {/* Form Section */}
      <div className="auth-card">
        <div className="auth-toggle">
          <button
            className={isLogin ? "active" : ""}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={!isLogin ? "active" : ""}
            onClick={() => setIsLogin(false)}
          >
            Sign Up
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                placeholder="Enter your full name"
                required
              />
            </div>
          )}

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" required />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter password" required />
          </div>

          {!isLogin && (
            <div className="form-group">
              <label htmlFor="confirm">Confirm Password</label>
              <input
                type="password"
                id="confirm"
                placeholder="Re-enter password"
                required
              />
            </div>
          )}

          <button type="submit" className="auth-submit">
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
}
