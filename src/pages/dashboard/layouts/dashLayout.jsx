
import React from 'react'
import Sidebar from '../../../components/sidebar'
import { Outlet } from 'react-router-dom'
import DashboardBg from '../../../assets/images/dashboard-bg.png';



const DashLayout = () => {
  return (
    <div className="flex h-screen flex-grow bg-cover bg-center opacity-100" style={{ backgroundImage: `url(${DashboardBg})` }} >
      <Sidebar />
      <div className="flex-grow p-4 ">
        <Outlet />
      </div>
    </div>
  );
};


export default DashLayout