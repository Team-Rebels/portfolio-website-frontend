

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PagesLayout from '../layouts/pagesLayout';
import { apiGetEducation, apiDeleteEducation } from '../../../services/education'; // Update path if necessary
import { TrashIcon, Edit } from 'lucide-react';
import PageLoader from '../../../components/PageLoader';
import Nodata from '../../../assets/images/nodata.svg';
import Loader from '../../../components/loader';
import D from '../../../constants/navlinks';

const Education = () => {
  const navigate = useNavigate();
  const [education, setEducation] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);

  // Fetch all education records from API
  const fetchEducation = async () => {
    setIsLoading(true);
    try {
      const res = await apiGetEducation();
      setEducation(res.data); // Adjust based on your API response structure
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle delete of an education record
  const handleDelete = async (id) => {
    setIsDeleting(true);
    try {
      await apiDeleteEducation(id);
      setEducation(education.filter(item => item.id !== id));
    } catch (error) {
      console.log(error);
    } finally {
      setIsDeleting(false);
    }
  };

  useEffect(() => {
    fetchEducation();
  }, []);

  return (
    <PagesLayout
      headerText="Education"
      headerTextClassName="text-[#0F1431]"
      buttonText="Add New Education"
      onClick={() => navigate('/dashboard/education/addEducation')}
    >
      {isLoading ? (
        <PageLoader />
      ) : education.length === 0 ? (
        <div className="flex flex-col items-center">
          <img src={Nodata} alt="No data" className="w-48 h-48" />
          <p>No education records added yet</p>
        </div>
      ) : (
        <div className="flex flex-col pt-20 gap-4">
          {D.NAVLINKS.map((education) => (
            <div key={education.id} className="bg-white rounded-xl shadow-md p-5 flex flex-col mb-4">
              <div className="flex items-center mb-3 text-lg font-semibold">
                {education.program} at {education.schoolName}
              </div>
              <div className="text-gray-600">{education.qualification}, {education.grade}</div>
              <div className="text-gray-600">{education.location}</div>
              <div className="text-gray-600">{education.startDate} - {education.endDate}</div>
              <div className="flex mt-3">
                <button
                  className="mr-2 p-2 hover:bg-green-400 rounded"
                  onClick={() => navigate(`/dashboard/education/edit/${education.id}`)}
                >
                  <Edit className="w-5 h-5 text-green-600" />
                </button>
                <button
                  className="p-2 hover:bg-red-400 rounded"
                  onClick={() => handleDelete(education.id)}
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

export default Education;