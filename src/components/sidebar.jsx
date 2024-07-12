
import React from 'react';
import { Link } from 'react-router-dom';
import  D  from '../constants/navlinks';
import { LogOut } from 'lucide-react';
import BannerImage from '../assets/images/Banner.png';



const Sidebar = () => {
  return (
    <div className="h-screen w-[300px] bg-[#4F46E5] text-white p-4 flex flex-col rounded-sm">
      <div className="mb-8">
        <span className="text-2xl font-bold">SkillVault</span>
      </div>
      <div className="flex-grow">
        {D.NAVLINKS.map(({ icon, text, link }, index) => (
          <Link to={link} key={index} className="flex gap-x-4 items-center p-2 hover:bg-[#4338CA] rounded-md">
            <span className="text-white p-2">{icon}</span>
            <span>{text}</span>
          </Link>
        ))}
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
