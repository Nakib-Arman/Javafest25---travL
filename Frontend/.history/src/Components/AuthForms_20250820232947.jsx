import React, { useState } from 'react';
import { Link, useNavigate,useSearchParams } from 'react-router-dom';
import '../CSS/AuthForms.css';

export default function AuthForms({ mode = 'login' }) {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(mode === 'login');
  const [formData, setFormData] = useState({
    name: '',
    emadlkslkil: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    console.log(isLogin ? 'Logging in:' : 'Signing up:', formData);
    navigate('/');
  };

  const switchMode = () => {
    setIsLogin(!isLogin);
    setFormData({ name: '', email: '', password: '', confirmPassword: '' });
  };

  const inputField = (name, type, placeholder, Icon) => (
    <div className="input-group">
      <div className="input-icon">{Icon}</div>
      <input
        type={type}
        name={name}
        value={formData[name]}
        onChange={handleChange}
        placeholder={placeholder}
        required
      />
    </div>
  );

  const features = [
    'Smart meeting scheduling',
    'Local experience recommendations',
    'Time optimization tools'
  ];

  return (
    <div className="auth-background">
      <div className="auth-overlay"></div>
      <div className="auth-container">
        <div className="auth-content">
          <div className="auth-card">
            <div className="auth-header">
              <h2>{isLogin ? 'Welcome Back' : 'Join Our Community'}</h2>
              <p>{isLogin ? 'Sign in to continue your journey' : 'Create an account to start planning'}</p>
            </div>

            <form onSubmit={handleSubmit} className="auth-form">
              {!isLogin &&
                inputField(
                  'name',
                  'text',
                  'Full Name',
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
                  </svg>
                )
              }

              {inputField(
                'email',
                'email',
                'Email Address',
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
              )}

              {inputField(
                'password',
                'password',
                'Password',
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" clipRule="evenodd" />
                </svg>
              )}

              {!isLogin &&
                inputField(
                  'confirmPassword',
                  'password',
                  'Confirm Password',
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" clipRule="evenodd" />
                  </svg>
                )
              }

              {isLogin && (
                <div className="auth-options">
                  <label className="remember-me">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                    Remember me
                  </label>
                  <Link to="/forgot-password" className="forgot-password">Forgot password?</Link>
                </div>
              )}

              <button type="submit" className="auth-submit-btn">
                {isLogin ? 'Sign In' : 'Create Account'}
              </button>

              <div className="auth-divider"><span>or</span></div>

              <div className="social-auth">
                <button type="button" className="social-btn google-btn">Continue with Google</button>
                <button type="button" className="social-btn linkedin-btn">Continue with LinkedIn</button>
              </div>

              <div className="auth-switch">
                <p>
                  {isLogin ? "Don't have an account? " : "Already have an account? "}
                  <button type="button" onClick={switchMode} className="switch-mode-btn">
                    {isLogin ? 'Sign up' : 'Sign in'}
                  </button>
                </p>
              </div>
            </form>
          </div>

          <div className="auth-promo">
            <h3>Plan Your Perfect Business Trip</h3>
            <p>Join thousands of professionals who optimize their business travel with our platform. Schedule meetings, discover local experiences, and make the most of your business trips.</p>
            <div className="feature-list">
              {features.map(f => (
                <div key={f} className="feature">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                  </svg>
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
