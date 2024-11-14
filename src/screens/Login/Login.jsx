import React, { useState } from 'react';
import { auth } from '../../config/firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import Header from "../../components/Header/Header"
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignup, setIsSignup] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isSignup) {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
      navigate('/design');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div id="login" className="modal" role="dialog">
      <Header />
      <div className={`sign-container ${isSignup ? 'right-panel-active' : ''}`}>
        {/* Sign In Form */}
        <div className="form-container sign-in-container">
          <form onSubmit={handleSubmit}>
            <h1 id="sign">Sign In</h1>
            {error && <p className="error-message">{error}</p>}
            <div className="social-container">
              <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
              <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
            </div>
            <span>or use your account</span>
            <input 
              type="email" 
              placeholder="Email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
            <input 
              type="password" 
              placeholder="Password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
            <a href="#">Forgot your password?</a>
            <button className="sign-btn" type="submit">Sign In</button>
            <button 
              type="button"
              onClick={() => setIsSignup(true)} 
              className="toggle-button"
            >
              Need an account? Sign Up
            </button>
          </form>
        </div>

        {/* Sign Up Form */}
        <div className="form-container sign-up-container">
          <form onSubmit={handleSubmit}>
            <h1 id="sign">Sign Up</h1>
            {error && <p className="error-message">{error}</p>}
            <div className="social-container">
              <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
              <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
            </div>
            <span>or use your email for registration</span>
            <input 
              type="email" 
              placeholder="Email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
            <input 
              type="password" 
              placeholder="Password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
            <button className="sign-btn" type="submit">Sign Up</button>
            <button 
              type="button"
              onClick={() => setIsSignup(false)} 
              className="toggle-button"
            >
              Already have an account? Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;