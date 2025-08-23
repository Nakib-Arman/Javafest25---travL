import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/Login.css";

export default function Login() {
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
    <div className="auth-compact">
      <div className="auth-box">
        {/* Left: Form */}
        <div className="auth-form">
          <h2>{isLogin ? "Login" : "Sign Up"}</h2>

          <form onSubmit={handleSubmit}>
            {!isLogin && (
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" placeholder="Enter your name" required />
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

          <p className="switch-text">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <span onClick={() => setIsLogin(!isLogin)}>
              {isLogin ? "Sign Up" : "Login"}
            </span>
          </p>
        </div>

        {/* Right: Illustration */}
        <div className="auth-side">
          <img
            src="https://img.icons8.com/fluency/200/airport.png"
            alt="Travel Icon"
          />
          <h3>{isLogin ? "Welcome Back!" : "Join travL"}</h3>
          <p>
            {isLogin
              ? "Access your business trips, manage schedules, and optimize your free time."
              : "Sign up to explore curated suggestions, track your meetings, and travel smarter."}
          </p>
        </div>
      </div>
    </div>
  );
}
