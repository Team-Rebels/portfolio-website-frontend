// src/pages/dashboard/pages/Achievements.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import PagesLayout from '../layouts/pagesLayout';

const Achievements = () => {
  const navigate = useNavigate();
  const achievements = [
    {
      title: 'Certified React Developer',
      description: 'Completed the official React Developer Certification.',
      date: '2022-05-12',
    },
    {
      title: 'Top 10 in Web Dev Hackathon',
      description: 'Secured a top 10 position in the annual Web Development Hackathon.',
      date: '2021-11-23',
    },
    {
      title: 'Built a High-Traffic E-commerce Site',
      description: 'Developed and launched an e-commerce website that handles over 10,000 users per day.',
      date: '2023-01-15',
    },
    {
      title: 'Open Source Contributor',
      description: 'Contributed to multiple open-source projects on GitHub, improving community tools and resources.',
      date: '2023-03-09',
    },
 
  ];

  return (
    <PagesLayout
      headerText="Achievements"
      headerTextClassName="text-[#0F1431]" 
      buttonText="Add New Achievement"
      onClick={() => navigate('/dashboard/achievements/addAchievement')}
    >
      <div className="flex flex-cols-1 pt-20 gap-4">
        {achievements.map((achievement, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md p-5 flex flex-col mb-4">
            <div className="flex items-center mb-3 text-lg font-semibold">
              {achievement.title}
            </div>
            <div className="text-gray-600">{achievement.description}</div>
            <div className="text-gray-600">{achievement.date}</div>
            <div className="flex mt-auto">
              <button className="mr-2 p-2 hover:bg-green-400 rounded">
                Edit
              </button>
              <button className="p-2 hover:bg-red-400 rounded">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </PagesLayout>
  );
};

export default Achievements;
