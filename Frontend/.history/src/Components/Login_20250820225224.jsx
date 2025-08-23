import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/Login.css";

export default function Login() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      console.log("Logging in...");
      navigate("/schedule-form"); // redirect after login
    } else {
      console.log("Signing up...");
      navigate("/schedule-form"); // redirect after signup
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-wrapper">
        {/* LEFT SIDE */}
        <div className="auth-left">
          <img
            src="https://img.freepik.com/free-photo/businessman-suit-typing-laptop-working-online-remote-from-home_1150-45540.jpg"
            alt="Auth Illustration"
          />
          <div className="overlay-text">
            <h1>{isLogin ? "Welcome Back!" : "Join Us Today"}</h1>
            <p>
              {isLogin
                ? "Log in to access your travel planner and manage your schedule."
                : "Create an account to plan your trips and explore exciting suggestions."}
            </p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="auth-form-container">
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
                <input type="password" id="confirm" placeholder="Re-enter password" required />
              </div>
            )}

            <button type="submit" className="auth-btn">
              {isLogin ? "Login" : "Sign Up"}
            </button>
          </form>

          <div className="toggle-text">
            {isLogin ? (
              <p>
                Don’t have an account?{" "}
                <button onClick={() => setIsLogin(false)}>Sign Up</button>
              </p>
            ) : (
              <p>
                Already have an account?{" "}
                <button onClick={() => setIsLogin(true)}>Login</button>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
