import React from 'react'
import Sidebar from '../../../components/sidebar'
import { Link, Navigate, Outlet } from "react-router-dom";
//import { apiGetProfile } from "../../../services/profile";
import { useEffect, useState } from "react";
import { getDetails } from "../../../services/config";

import { SquareMenu } from "lucide-react";



const DashLayout = () => {
  const [user, setUser] = useState();

  const { token, firstName, lastName, userName } = getDetails();

  useEffect(() => {
    if (token) {
      setUser({
        firstName,
        lastName,
        userName,
      });
    }
  }, []);

  if (!token) {
    return <Navigate to="/login" />;
  }

  const getAvatar = () => {
    if (!user) return "N/A";
    const initials = `${firstName[0]}${lastName[0]}`;
    return initials.toUpperCase();
  };

  return (
    <div className="flex h-screen flex-grow bg-cover bg-[#F8FAFC] bg-center opacity-100 " >
      <Sidebar />
      <div className=" w-full">
        <div className="flex px-16 bg-white py-5 shadow items-center">
          <span className="p-3 bg-pink text-white rounded-full shadow-md hover:bg-white hover:text-pink">
            <SquareMenu className="size-8" />
          </span>
          <Link
            to="/dashboard/profile"
            className="ml-auto bg-pink p-4 rounded-full cursor-pointer"
          >
            <span className="text-xl font-semibold text-white">
              {getAvatar()}
            </span>
          </Link>
        </div>
      <div className="flex-grow p-4 ">
        <Outlet context={[user, setUser]}/>
      </div>
    </div>
    </div>

  );
};


export default DashLayout
