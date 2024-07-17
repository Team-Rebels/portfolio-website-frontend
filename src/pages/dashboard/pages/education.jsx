// src/pages/dashboard/pages/Education.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PagesLayout from '../layouts/pagesLayout';

const Education = () => {
  const navigate = useNavigate();
  
  // Example data fetched or managed from AddEducation page
  const [educationItems, setEducationItems] = useState([
    {
      id: 1,
      schoolName: 'University of Example',
      program: 'Bachelor of Science in Computer Science',
      qualification: 'BSc',
      grade: 'A',
      location: 'Example City',
      startDate: '2018-09-01',
      endDate: '2022-06-30',
    },
    {
      id: 2,
      schoolName: 'Tech Institute',
      program: 'Master of Science in Software Engineering',
      qualification: 'MSc',
      grade: 'A+',
      location: 'Tech City',
      startDate: '2022-09-01',
      endDate: '2024-06-30',
    },
  ]);

  // Function to delete an education item
  const handleDelete = (id) => {
    // Example: You might implement logic to delete from database or update state
    const updatedEducationItems = educationItems.filter(item => item.id !== id);
    setEducationItems(updatedEducationItems);
  };

  return (
    <PagesLayout
      headerText="Education"
      headerTextClassName="text-[#0F1431]"
      buttonText="Add New Education"
      onClick={() => navigate('/dashboard/education/addeducation')}
    >
      <div className="flex flex-cols-1 pt-20 gap-4">
        {educationItems.map((education, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md p-5 flex flex-col mb-4">
            <div className="flex items-center mb-3 text-lg font-semibold">
              {education.program} at {education.schoolName}
            </div>
            <div className="text-gray-600">{education.qualification}, {education.grade}</div>
            <div className="text-gray-600">{education.location}</div>
            <div className="text-gray-600">{education.startDate} - {education.endDate}</div>
            <div className="flex mt-auto">
              <button
                className="mr-2 p-2 hover:bg-green-400 rounded"
                onClick={() => navigate(`/dashboard/education/edit/${education.id}`)}
              >
                Edit
              </button>
              <button
                className="p-2 hover:bg-red-400 rounded"
                onClick={() => handleDelete(education.id)}
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

export default Education;
