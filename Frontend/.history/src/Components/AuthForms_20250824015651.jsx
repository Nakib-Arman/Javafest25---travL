import React, { useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import '../CSS/AuthForms.css';

export default function AuthForms() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const initMode = searchParams.get('mode') || 'login';
  const [isLogin, setIsLogin] = useState(initMode === 'login');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
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
        {/* Back to Home button */}
        <button 
          className="back-home-btn" 
          onClick={() => navigate('/')}
        >
          Home
        </button>

        <div className="auth-content">
          <div className="auth-card">
            {/* ...rest of your form JSX */}
          </div>

          <div className="auth-promo">
            {/* ...promo content */}
          </div>
        </div>
      </div>
    </div>
  );
}
