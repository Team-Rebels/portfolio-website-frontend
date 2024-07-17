// src/pages/dashboard/pages/Volunteering.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PagesLayout from '../layouts/pagesLayout';

const Volunteering = () => {
  const navigate = useNavigate();

  // Updated data for volunteering experiences
  const [volunteeringExperiences, setVolunteeringExperiences] = useState([
    {
      id: 1,
      organization: 'Volunteers’ Aid',
      description: 'An NGO which links volunteers to organisations.',
      skills: ['HTML', 'CSS', 'React'],
      responsibilities: ['Built the website for the organisation'],
      role: 'Full Stack Developer',
      location: 'Accra',
      startDate: '2024-01-01',
      endDate: '2024-07-31', // Changed to end of July 2024
      projectName: 'ProjectBuild',
    },
    {
      id: 2,
      organization: 'Youth Development Program',
      description: 'Mentored youth in leadership and personal development.',
      skills: ['Mentorship', 'Leadership Development'],
      responsibilities: ['Guided youth', 'Facilitated workshops'],
      role: 'Youth Mentor',
      location: 'City, Country',
      startDate: '2019-03-15',
      endDate: '2020-12-31',
      projectName: 'Youth Leadership Initiative',
    },
  ]);

  // Function to delete a volunteering experience
  const handleDelete = (id) => {
    // Example: You might implement logic to delete from database or update state
    const updatedExperiences = volunteeringExperiences.filter(item => item.id !== id);
    setVolunteeringExperiences(updatedExperiences);
  };

  return (
    <PagesLayout
      headerText="Volunteering Experiences"
      headerTextClassName="text-[#0F1431]"
      buttonText="Add New Volunteering"
      onClick={() => navigate('/dashboard/volunteering/addvolunteering')}
    >
      <div className="flex flex-cols-1 pt-20 gap-4">
        {volunteeringExperiences.map((experience, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md p-5 flex flex-col mb-4">
            <div className="flex items-center mb-3 text-lg font-semibold">
              {experience.role} at {experience.organization}
            </div>
            <div className="text-black">{experience.description}</div>
            <div className="text-black">{experience.location}</div>
            <div className="text-black">{experience.startDate} - {experience.endDate}</div>
            <div className="flex mt-3">
              <div className="mr-auto flex space-x-2">
                {experience.skills.map((skill, index) => (
                  <span key={index} className="text-xs text-[white] bg-[#0F1431] px-2 py-1 rounded">
                    {skill}
                  </span>
                ))}
              </div>
              <button
                className="p-2 hover:bg-red-400 rounded"
                onClick={() => handleDelete(experience.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </PagesLayout>
  );
};

export default Volunteering;
