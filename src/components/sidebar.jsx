import React from 'react';
import { NavLink, Link } from 'react-router-dom'; // Import NavLink and Link
import D from '../constants/navlinks';
import { LogOut } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import { apiLogout } from "../services/auth";
import { toast } from "react-toastify";

const Sidebar = () => {
  const navigate = useNavigate();

  const logout = async () => {
    try {
      await apiLogout();
      toast.success("Logged out successfully");
      navigate("/login");
    } catch (error) {
      toast.error("An error occurred");
    }
  };

  return (
    <div className="h-dvh w-[300px] bg-[#0F1431] text-white p-4 flex flex-col rounded-sm">
      <div className="mb-6">
        <span className="text-2xl font-bold">CAPTURA</span>
      </div>
      <div className="flex-grow">
        {D.NAVLINKS.map(({ icon, text, link }, index) => (
          <NavLink
            to={link}
            key={index}
            className={({ isActive }) =>
              `flex gap-x-0 items-center p-2 hover:bg-[#4338CA] rounded-md ${isActive ? 'text-white' : 'text-gray-400'}`
            }
            end
          >
            <span className="text-white p-2">{icon}</span>
            <span>{text}</span>
          </NavLink>
        ))}
      </div>
      <div className="mt-4">
        <Link to="/preview" className="block bg-[#4338CA] text-center py-2 rounded-full text-white font-bold hover:bg-[#6B46C1] transition">
          Your Profile
        </Link>
      </div>
      <div className="mt-auto">
        <button className="flex gap-x-4 items-center p-2"
          onClick={logout}
        >
          <span className="text-white p-2 rounded-sm">
            <LogOut />
          </span>
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;


