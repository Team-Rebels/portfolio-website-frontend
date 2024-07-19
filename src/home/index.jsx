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
    <div className="home-page bg-slate-600 bg-blend-overlay">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="hero-section"
      >
        <h1 className="hero-title mt-[-80px] text-[105px] font-[right]">Welcome to Captura</h1>
        <p className="hero-subtitle mt-[-20px] text-[30px] mb-[60px] font-[rubik]">We host the Best Junior Web Developers</p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="signup-button font-[rubik] ml-[50px] mb-[20px]"
          onClick={handleSignUpClick}
        >
          Get discovered! Sign up on Captura
        </motion.button>
        <div class="relative rounded-2xl bg-green-400 px-6 pt-2 pb-2 shadow-xl ring-1 ring-black sm:mx-auto sm:max-w-lg sm:px-10">
          <div class="mx-auto max-w-md">


        <form action="" class="relative mx-auto w-max">
          <input type="search" 
              class="peer cursor-pointer relative z-10 h-12 w-12 rounded-full border bg-transparent pl-12 outline-none focus:w-full focus:cursor-text focus:border-white focus:pl-16 focus:pr-4" />
            <svg xmlns="http://www.w3.org/2000/svg" class="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-gray-500 px-3.5 peer-focus:border-white peer-focus:stroke-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        </form>
        <div className='font-[rubik] text-[25px] text-white'>We have the Best Talents,Search HERE</div>
    </div>
  </div>
      </motion.div>
    </div>
  );
};

export default Home;
