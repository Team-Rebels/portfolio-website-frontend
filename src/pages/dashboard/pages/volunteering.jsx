import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PagesLayout from '../layouts/pagesLayout';
import { TrashIcon, Edit } from 'lucide-react';
import { apiGetVolunteering, apiDeleteVolunteering } from '../../../services/volunteering'; // Ensure this import is correct
import PageLoader from '../../../components/PageLoader';
import Nodata from '../../../assets/images/nodata.svg';
import Loader from '../../../components/loader';
import D from '../../../constants/navlinks';

const Volunteering = () => {
  const navigate = useNavigate();
  const [volunteering, setVolunteering] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);

  // Fetch all volunteering experiences from API
  const fetchVolunteering = async () => {
    setIsLoading(true);
    try {
      const res = await apiGetVolunteering();
      setVolunteering(res.data); // Adjust based on your API response structure
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle delete volunteering experience
  const handleDelete = async (id) => {
    setIsDeleting(true);
    try {
      const res = await apiDeleteVolunteering(id);
      console.log(res.data);
      setVolunteering(volunteering.filter(item => item.id !== id));
    } catch (error) {
      console.log(error);
    } finally {
      setIsDeleting(false);
    }
  };

  useEffect(() => {
    fetchVolunteering();
  }, []);

  return (
    <PagesLayout
      headerText="Volunteering"
      headerTextClassName="text-[#0F1431]"
      buttonText="Add New Volunteering"
      onClick={() => navigate('/dashboard/volunteering/addvolunteering')}
    >
      {isLoading ? (
        <PageLoader />
      ) : volunteering.length === 0 ? (
        <div className="flex flex-col items-center">
          <img src={Nodata} alt="No data" className="w-48 h-48" />
          <p>No volunteering experience added yet</p>
        </div>
      ) : (
        <div className="flex flex-col pt-20 gap-4">
          {D.VOLUNTEERING.map((volunteering) => (
            <div key={volunteering.id} className="bg-white rounded-xl shadow-md p-5 flex flex-col mb-4">
              <div className="flex items-center mb-3 text-lg font-semibold">
                {volunteering.role} at {volunteering.organization}
              </div>
              <div className="text-black">{volunteering.description}</div>
              <div className="text-black">{volunteering.location}</div>
              <div className="text-black">{volunteering.startDate} - {volunteering.endDate}</div>
              <div className="flex mt-3">
                <div className="mr-auto flex space-x-2">
                  {D.VOLUNTEERING.map((skill, index) => (
                    <span key={index} className="text-xs text-white bg-[#0F1431] px-2 py-1 rounded">
                      {skill}
                    </span>
                  ))}
                </div>
                <button
                  className="p-2 hover:bg-red-400 rounded"
                  onClick={() => handleDelete(volunteering.id)}
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

export default Volunteering;
