
import React from 'react'
import Sidebar from '../../../components/sidebar'
import { Outlet } from 'react-router-dom'

const DashLayout = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-grow p-4 bg-gray-100">
        <Outlet />
      </div>
    </div>
  );
};


export default DashLayout