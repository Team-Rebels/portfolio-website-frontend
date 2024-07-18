import BImage from '../../../assets/images/Banner.png';
import Charles from '../../../assets/images/profile.jpg';
import PagesLayout from '../layouts/pagesLayout';
import React, { useState, useEffect } from 'react';

import D from "../../../constants/navlinks";
import { apiGetSkills } from '../../../services/skills';
import { apiGetAchievements } from '../../../services/achievements';
import { apiGetProjects } from '../../../services/projects';
import { apiGetVolunteering } from '../../../services/volunteering';
import { apiGetExperience } from '../../../services/experience';
import { apiGetEducation } from '../../../services/education';
import PageLoader from '../../../components/PageLoader';


const Overview = () => {

  const [data, setData] = useState({
    skills: 0,
    projects: 0,
    achievements: 0,
    volunteering: 0,
    education: 0,
    experience: 0,

  });
  const [isLoading, setIsLoading] = useState(false)

  const getData = async() => {
    setIsLoading(true)
    try {
      const [totalSkills, totalAchievements, totalProjects, totalVolunteering, totalEducation, totalExperience] = await Promise.all([ 
        apiGetSkills(),
        apiGetAchievements(),
        apiGetProjects(),
        apiGetVolunteering(),
        apiGetEducation(),
        apiGetExperience(),

      ]);
      console.log("Total Skills", totalSkills);

      const newData = {
        skills: totalSkills.length,
        projects: totalProjects.length,
        achievements: totalAchievements.length,
        volunteering: totalVolunteering.length,
        education: totalEducation.length,
        experience: totalExperience.length,
    

      };
      console.log(newData);


      setData(newData);


    } catch (error) {
      console.log(error)
    }finally {
      setIsLoading(false);
    }
  }; 

  useEffect(() => {
   getData();
  }, []);


  return (
    <>
      {isLoading ? (
        <PageLoader />
      ) : (
        <div className="p-8 bg-white-100">
          <div className="grid grid-cols-3 gap-6">
            {D.OVERVIEW.map(({ icon, text, total }, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 flex flex-col"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-full bg-indigo-100 text-indigo-600">
                    {icon}
                  </div>
                  <p className="text-lg font-semibold text-gray-600">{text}</p>
                </div>
                <p className="text-2xl font-semibold text-gray-800 mt-auto">
                  {total}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Overview;
