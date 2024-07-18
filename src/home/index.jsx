import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../home/Home.css'; 

const Home = () => {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate('/signup');
  };

  const handleSearchClick = () => {
  };

  return (
    <div className="home-page">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="hero-section"
      >
        <h1 className="hero-title">Welcome to Captura</h1>
        <p className="hero-subtitle">We host the Best Junior Web Developers</p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="signup-button"
          onClick={handleSignUpClick}
        >
          Get discovered! Sign up on Captura
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="search-button"
          onClick={handleSearchClick}
        >
          Need talents? Search Captura
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Home;
