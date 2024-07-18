import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './LandingPage.css';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate('/signup');
  };

  const handleSearchClick = () => {
  };

  return (
    <div className="landing-page">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="hero-section"
      >
        <h1 className="hero-title">Welcome to Captura</h1>
        <p className="hero-subtitle">Discover and showcase your talents</p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="signup-button"
          onClick={handleSignUpClick}
        >
          Need your talent discovered? Sign up on Captura
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="search-button"
          onClick={handleSearchClick}
        >
          Looking for talents? Search Captura
        </motion.button>
      </motion.div>
    </div>
  );
};

export default LandingPage;
