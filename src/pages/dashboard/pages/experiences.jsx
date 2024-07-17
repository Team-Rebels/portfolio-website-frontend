import { useNavigate } from 'react-router-dom';
import PagesLayout from '../layouts/pagesLayout';
import experienceData from '../../../constants/experienceData';
import {TrashIcon} from 'lucide-react'
import { Edit } from 'lucide-react';


const Experiences = () => {
  const navigate = useNavigate();

  return (
    <PagesLayout
      headerText="Experiences"
      headerTextClassName="text-[#0F1431]" 
      buttonText="Add New Experience"
      onClick={() => navigate('/dashboard/experiences/addExperience')}
    >
      <div className="flex flex-cols-1 pt-20 gap-4">
        {experienceData.map((experience, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md p-5 flex flex-col mb-4">
            <div className="flex items-center mb-3 text-lg font-semibold">
              {experience.title}
            </div>
            <div className="text-gray-600">
              <span className="font-semibold">{experience.company}</span> - {experience.employmentType}
            </div>
            <div className="text-gray-600">{experience.duration}</div>
            <div className="text-gray-600">{experience.location}</div>
            <div className="flex mt-auto">
              <button className="mr-2 p-2 hover:bg-green-400 rounded">
                <Edit className="w-5 h-5 text-green-600" />
              </button>
              <button className="p-2 hover:bg-red-400 rounded">
                <TrashIcon className="w-5 h-5 text-red-600" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </PagesLayout>
  );
};

export default Experiences