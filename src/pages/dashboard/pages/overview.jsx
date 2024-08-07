
import React, { useState, useEffect } from 'react';
import CountUp from "react-countup";
import { Link, useOutletContext } from "react-router-dom";

import D from "../../../constants/navlinks"; 
import { apiGetSkills } from '../../../services/skills';
import { apiGetAchievement } from '../../../services/achievement';
import { apiGetProject } from '../../../services/project';
import { apiGetVolunteering } from '../../../services/volunteering';
import { apiGetExperience } from '../../../services/experience';
import { apiGetEducation } from '../../../services/education';
import PageLoader from '../../../components/PageLoader';


const Overview = () => {

  const [data, setData] = useState({
    skills: 0,
    project: 0,
    achievement: 0,
    volunteering: 0,
    education: 0,
    experience: 0,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [profile] = useOutletContext();

  const getPreviewLink = () => {
    if (!profile) return "/preview/";

    return `/preview/${profile.userName}`;
  };

  const getData = async () => {
    setIsLoading(true);
    try {
      const [
        totalSkills,
        totalAchievement,
        totalProject,
        totalVolunteering,
        totalEducation,
        totalExperience,
      ] = await Promise.all([
        apiGetSkills(),
        apiGetAchievement(),
        apiGetProject(),
        apiGetVolunteering(),
        apiGetEducation(),
        apiGetExperience(),
      ]);
  
      console.log("API Responses:", {
        totalSkills,
        totalAchievement,
        totalProject,
        totalVolunteering,
        totalEducation,
        totalExperience,
      });
  
      const newData = {
        skills: totalSkills?.data?.Skills?.length ?? 0,
        project: totalProject?.data?.project?.length ?? 0,
        achievement: totalAchievement?.data?.Achievement?.length ?? 0,
        volunteering: totalVolunteering?.data?.Volunteerings?.length ?? 0,
        education: totalEducation?.data?.education?.length ?? 0,
        experience: totalExperience?.data?.Experience?.length ?? 0,
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
            className=" text-[#4338CA] ml-auto px-6 py-3 rounded-lg"
          >
            View Preview
          </Link>
          <div className="grid grid-cols-3 gap-6">
            {D.OVERVIEW.map(({ icon, text, id, total }, index) => (
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

