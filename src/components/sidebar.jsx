
import React from 'react';
import { Link } from 'react-router-dom';
import  D  from '../constants/navlinks';
import { LogOut } from 'lucide-react';
import BannerImage from '../assets/images/Banner.png';



const Sidebar = () => {
  return (
    <div className="h-dvh w-[300px] bg-[#0F1431] text-white p-4 flex flex-col rounded-sm">
      <div className="mb-6">
        <span className="text-2xl font-bold">CAPTURA</span>
      </div>
      <div className="flex-grow">
        {D.NAVLINKS.map(({ icon, text, link }, index) => (
          <Link to={link} key={index} className="flex gap-x-0 items-center p-2 hover:bg-[#4338CA] rounded-md">
            <span className="text-white p-2">{icon}</span>
            <span>{text}</span>
          </Link>
        ))}
      </div>
      <div className="mt-4">
        <Link to="/preview" className="block bg-[#4338CA] text-center py-2 rounded-full text-white font-bold hover:bg-[#6B46C1] transition">
          Your Profile
        </Link>
      </div>
      <div className="mt-auto">
        <button className="flex gap-x-4 items-center p-2 hover:bg-[#4338CA] rounded-full">
          <span className="text-white p-2 rounded-full"><LogOut /></span>
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
