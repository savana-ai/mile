import React, { useState, useEffect } from 'react';
import { auth } from '../../config/firebase';
import { useNavigate } from 'react-router-dom';
import Header from "../../components/Header/Header";
import { onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignup, setIsSignup] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [firebaseInitialized, setFirebaseInitialized] = useState(false);
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, () => {
      setFirebaseInitialized(true);
    });
  
    return () => unsubscribe();
  }, []);
  

  // Basic email validation
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Password validation
  const isValidPassword = (password) => {
    return password.length >= 6;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!firebaseInitialized) {
      setError('Firebase is still initializing. Please try again.');
      return;
    }
    setError('');
    setIsLoading(true);

    // Input validation
    if (!isValidEmail(email)) {
      setError('Please enter a valid email address.');
      setIsLoading(false);
      return;
    }

    if (!isValidPassword(password)) {
      setError('Password must be at least 6 characters long.');
      setIsLoading(false);
      return;
    }

    try {
      if (isSignup) {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
      navigate('/design');
    } catch (error) {
      console.error('Auth error:', error.code, error.message);

      // Enhanced error mapping
      const errorMessages = {
        'auth/email-already-in-use': 'This email is already registered. Please sign in instead.',
        'auth/weak-password': 'Password should be at least 6 characters long.',
        'auth/wrong-password': 'Incorrect password. Please try again.',
        'auth/user-not-found': 'No account found with this email. Please sign up.',
        'auth/invalid-email': 'Please enter a valid email address.',
        'auth/network-request-failed': 'Network error. Please check your connection.',
        'auth/too-many-requests': 'Too many attempts. Please try again later.',
        'auth/operation-not-allowed': 'Email/password sign-in is not enabled. Please contact support.'
      };

      setError(errorMessages[error.code] || 'An unexpected error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div id="login" className="modal" role="dialog">
      <Header />
      <div className={`sign-container ${isSignup ? 'right-panel-active' : ''}`}>
        {isSignup ? (
          <div className="form-container sign-up-container">
            <form onSubmit={handleSubmit}>
              <h1 id="sign">Sign Up</h1>
              {error && <p className="error-message">{error}</p>}
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value.trim())}
                disabled={isLoading}
                required
                aria-label="Email"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isLoading}
                required
                aria-label="Password"
                minLength={6}
              />
              <button className="sign-btn" type="submit">Sign Up</button>
              <button
                type="button"
                onClick={() => {
                  setIsSignup(false);
                  setError('');
                }}
                className="toggle-button"
              >
                Already have an account? Sign In
              </button>
            </form>
          </div>
        ) : (
          <div className="form-container sign-in-container">
            <form onSubmit={handleSubmit}>
              <h1 id="sign">Sign In</h1>
              {error && <p className="error-message">{error}</p>}
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value.trim())}
                disabled={isLoading}
                required
                aria-label="Email"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isLoading}
                required
                aria-label="Password"
                minLength={6}
              />
              <a href="#">Forgot your password?</a>
              <button className="sign-btn" type="submit">Sign In</button>
              <button
                type="button"
                onClick={() => {
                  setIsSignup(true);
                  setError('');
                }}
                className="toggle-button"
              >
                Need an account? Sign Up
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
