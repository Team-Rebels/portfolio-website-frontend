// src/pages/dashboard/pages/Projects.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import PagesLayout from '../layouts/pagesLayout';

const Projects = ({ projects }) => {
  const navigate = useNavigate();

  return (
    <PagesLayout
      headerText="Projects"
      headerTextClassName="text-[#0F1431]" 
      buttonText="Add New Project"
      onClick={() => navigate('/dashboard/projects/addProject')}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-20">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md p-5 flex flex-col mb-4">
            {project.thumbnailImage && (
              <img
                src={project.thumbnailImage}
                alt={project.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
            )}
            <div className="mt-3 text-lg font-semibold">{project.title}</div>
           
          </div>
        ))}
      </div>
    </PagesLayout>
  );
};

export default Projects;

