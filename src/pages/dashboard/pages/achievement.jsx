import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PagesLayout from '../layouts/pagesLayout';
import { apiGetAchievement, apiDeleteAchievement } from '../../../services/achievement'; // Update path if necessary
import { TrashIcon, Edit } from 'lucide-react';
import PageLoader from '../../../components/PageLoader';
import Nodata from '../../../assets/images/nodata.svg';
import Loader from '../../../components/loader';
import D from '../../../constants/navlinks';

const Achievement = () => {
  const navigate = useNavigate();
  const [achievement, setAchievement] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);

  // Fetch all achievements records from API
  const fetchAchievement = async () => {
    setIsLoading(true);
    try {
      const res = await apiGetAchievement();
      console.log(res.data);
      setAchievement(res.data.user); // Adjust based on your API response structure
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle delete of an achievement record
  const handleDelete = async (id) => {
    setIsDeleting(true);
    try {
      await apiDeleteAchievement(id);
      setAchievement(achievement.filter(item => item.id !== id));
    } catch (error) {
      console.log(error);
    } finally {
      setIsDeleting(false);
    }
  };

  useEffect(() => {
    fetchAchievement();
  }, []);

  return (
    <PagesLayout
      headerText="Achievements"
      headerTextClassName="text-[#0F1431]"
      buttonText="Add New Achievement"
      onClick={() => navigate('/dashboard/achievement/addAchievement')}
    >
      {isLoading ? (
        <PageLoader />
      ) : achievement.length === 0 ? (
        <div className="flex flex-col items-center">
          <img src={Nodata} alt="No data" className="w-48 h-48" />
          <p>No achievements added yet</p>
        </div>
      ) : (
        <div className="flex flex-col pt-20 gap-4">
          {achievement.map((achievement) => (
            <div key={achievement.id} className="bg-white rounded-xl shadow-md p-5 flex flex-col mb-4">
              <div className="flex items-center mb-3 text-lg font-semibold">
                {achievement.title}
              </div>
              <div className="text-black">{achievement.description}</div>
              <div className="text-black">{achievement.date}</div>
              <div className="text-black">{achievement.award}</div>
              <div className="text-black">{achievement.institution}</div>
              <div className="flex mt-3">
              <button 
              className="mr-2 p-2 hover:bg-green-400 rounded"
              onClick={() => navigate(`/dashboard/achievement/edit/${achievement.id}`)}
            >
              <Edit className="w-5 h-5 text-green-600" />
            </button>
                <button
                  className="p-2 hover:bg-red-400 rounded"
                  onClick={() => handleDelete(achievement.id)}
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

export default Achievement;


