import BImage from '../../../assets/images/Banner.png';
import Charles from '../../../assets/images/profile.jpg';
import React, { useState, useEffect } from 'react';
import CountUp from "react-countup";
import { Link, useOutletContext } from "react-router-dom";

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
    experiences: 0,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [profile] = useOutletContext();

  const getPreviewLink = () => {
    if (!profile) return "/preview/theody";

    return `/preview/${profile.userName}`;
  };

  const getData = async () => {
    setIsLoading(true);
    try {
      const [
        totalSkills,
        totalAchievements,
        totalProjects,
        totalVolunteering,
        totalEducation,
        totalExperiences,
      ] = await Promise.all([
        apiGetSkills(),
        apiGetAchievements(),
        apiGetProjects(),
        apiGetVolunteering(),
        apiGetEducation(),
        apiGetExperiences(),
      ]);

      console.log("Total skills: ", totalSkills.data.Skills.length);

      const newData = {
        skills: totalSkills.data.Skills.length ?? 0,
        projects: totalProjects.data.projects.length ?? 0,
        achievements: totalAchievements.data.Achievements.length ?? 0,
        volunteering: totalVolunteering.data.Volunteerings.length ?? 0,
        education: totalEducation.data.education.length ?? 0,
        experiences: totalExperiences.data.Experience.length ?? 0,
      };

      setData(newData);
    } catch (error) {
      console.log(error);
    } finally {
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
           <Link
            to={getPreviewLink()}
            className="bg-pink text-white ml-auto px-6 py-3 rounded-lg"
          >
            View Preview
          </Link>
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
                <CountUp
                  className="text-2xl font-semibold"
                  start={0}
                  end={data[id]}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Overview;

