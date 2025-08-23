// src/Components/Auth/AuthForms.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../CSS/AuthForms.css';

export default function Log({ mode = 'login' }) {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(mode === 'login');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle authentication
    console.log(isLogin ? 'Logging in:' : 'Signing up:', formData);
    
    // After successful auth, redirect to dashboard or schedule page
    navigate('/');
  };

  const switchMode = () => {
    setIsLogin(!isLogin);
    setFormData({ name: '', email: '', password: '', confirmPassword: '' });
  };

  return (
    <div className='auth-container'>
      <div className='auth-wrapper'>
        {/* LEFT COLUMN - Consistent with ScheduleForm */}
        <div className="auth-left">
          <img
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Travel Planning"
          />
          <div className='headline'>
            <h1>Plan your perfect business trip</h1>
            <p>
              Join thousands of professionals who use our platform to organize their business travel,
              schedule meetings, and discover local experiences during their free time.
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN - Auth Form */}
        <div className="auth-form-container">
          <div className="auth-header">
            <h2>{isLogin ? 'Welcome Back' : 'Create Account'}</h2>
            <p>{isLogin ? 'Sign in to continue planning your trip' : 'Join us to start planning your business trips'}</p>
          </div>

          <form onSubmit={handleSubmit}>
            {!isLogin && (
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                />
              </div>
            )}

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
              />
            </div>

            {!isLogin && (
              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your password"
                  required
                />
              </div>
            )}

            {isLogin && (
              <div className="auth-options">
                <label className="remember-me">
                  <input type="checkbox" />
                  Remember me
                </label>
                <Link to="/forgot-password" className="forgot-password">
                  Forgot password?
                </Link>
              </div>
            )}

            <button type="submit" className="auth-submit-btn">
              {isLogin ? 'Sign In' : 'Create Account'}
            </button>

            <div className="auth-switch">
              <p>
                {isLogin ? "Don't have an account? " : "Already have an account? "}
                <button type="button" onClick={switchMode} className="switch-mode-btn">
                  {isLogin ? 'Sign up' : 'Sign in'}
                </button>
              </p>
            </div>

            {isLogin && (
              <div className="social-auth">
                <div className="divider">
                  <span>Or continue with</span>
                </div>
                <div className="social-buttons">
                  <button type="button" className="social-btn google-btn">
                    Google
                  </button>
                  <button type="button" className="social-btn linkedin-btn">
                    LinkedIn
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}