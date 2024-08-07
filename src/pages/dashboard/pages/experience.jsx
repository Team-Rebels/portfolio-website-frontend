import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PagesLayout from '../layouts/pagesLayout';
import { TrashIcon, Edit } from 'lucide-react';
import { apiGetExperience, apiDeleteExperience } from '../../../services/experience';
import PageLoader from '../../../components/PageLoader';
import Nodata from '../../../assets/images/nodata.svg';
import Loader from '../../../components/loader';
import D from '../../../constants/navlinks';

const Experience = () => {
  const navigate = useNavigate();
  const [experience, setExperience] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);

  // Fetch all experiences from API
  const fetchExperience = async () => {
    setIsLoading(true);
    try {
      const res = await apiGetExperience();
      console.log(res.data); // Log API response to check its structure
      if (res.data && Array.isArray(res.data.user)) {
        setExperience(res.data.user); // Access the array inside the user key
      } else {
        console.error('API response is not an array:', res.data);
      }
    } catch (error) {
      console.error('Error fetching experiences:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle delete experience
  const handleDelete = async (id) => {
    setIsDeleting(true);
    try {
      await apiDeleteExperience(id);
      setExperience(experience.filter(exp => exp.id !== id));
    } catch (error) {
      console.error('Error deleting experience:', error);
    } finally {
      setIsDeleting(false);
    }
  };

  useEffect(() => {
    fetchExperience();
  }, []);

  return (
    <PagesLayout
      headerText="Experiences"
      headerTextClassName="text-[#0F1431]"
      buttonText="Add New Experience"
      onClick={() => navigate('/dashboard/experience/addExperience')}
    >
      {isLoading ? (
        <PageLoader />
      ) : experience.length === 0 ? (
        <div className="flex flex-col items-center">
          <img src={Nodata} alt="No data" className="w-48 h-48" />
          <p>No experience added yet</p>
        </div>
      ) : (
        <div className="flex flex-col pt-20 gap-4">
          {experience.map((experience) => (
            <div key={experience.id} className="bg-white rounded-xl shadow-md p-5 flex flex-col mb-4">
              <div className="flex items-center mb-3 text-lg font-semibold">
                {experience.role} at {experience.companyName}
              </div>
              <div className="text-gray-600">{experience.location}</div>
              <div className="text-gray-600">
                {experience.startDate} - {experience.endDate ? experience.endDate : 'Present'}
              </div>
              <div className="text-gray-600">
                <span className="font-semibold">Skills: </span>{experience.skills.join(', ')}
              </div>
              <div className="text-gray-600">
                <span className="font-semibold">Responsibilities: </span>{experience.responsibilities.join(', ')}
              </div>
              <div className="flex mt-auto">
                <button 
                  className="mr-2 p-2 hover:bg-green-400 rounded"
                  onClick={() => navigate(`/dashboard/experience/edit/${experience.id}`)}
                >
                  <Edit className="w-5 h-5 text-green-600" />
                </button>
                <button
                  onClick={() => handleDelete(experience.id)}
                  className="p-2 hover:bg-red-400 rounded"
                >
                  {isDeleting ? <Loader /> : <TrashIcon className="w-5 h-5 text-red-600" />}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </PagesLayout>
  );
};

export default Experience;