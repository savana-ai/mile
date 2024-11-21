
// App.js
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './config/firebase';
import { DesignPad } from './screens/DesignPad/DesignPad';
import Navbar from './screens/Navbar/Navbar';
import Landing from './screens/Landing/Landing';
import About from './screens/About/About';
import Login from './screens/Login/Login';
import FeedbackForm from './screens/FeedbackForm/FeedbackForm';

const PrivateRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return isAuthenticated ? children : <Navigate to="/login" />;
};

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
    });
    return unsubscribe;
  }, []);

  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/design"
          element={
            <PrivateRoute>
              <DesignPad />
            </PrivateRoute>
          }
        />
        <Route
          path="/feedback"
          element={
            <PrivateRoute>
              <FeedbackForm />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;