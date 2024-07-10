import Preview from "../preview";
import React from 'react';
import { Link } from 'react-router-dom'; 

const Dashboard = () => {
  return (
    <div>
      <div  className=" w-1/4 fixed h-full bg-[#4F46E5]">

      <input type="text" placeholder="Search.." className="mb-8 p-2 border border-grey-300 rounded" />
      <Link to="/preview">Go to About Page</Link>
      <Link to="/preview">Projects</Link>
      <Link to="/preview">Skills</Link>
      <Link to="/preview">Acheivements</Link>
      <Link to="/preview">Social Links</Link>
      </div>
    </div>
  )
}

export default Dashboard