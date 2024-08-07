import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PagesLayout from '../layouts/pagesLayout';
import { TrashIcon, Edit } from 'lucide-react';
import { apiGetProject, apiDeleteProject } from '../../../services/project'; // Ensure this import is correct
import PageLoader from '../../../components/PageLoader';
import Nodata from '../../../assets/images/nodata.svg';
import Loader from '../../../components/loader';
import D from '../../../constants/navlinks';

const Project = () => {
  const navigate = useNavigate();
  const [project, setProject] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);

  // Fetch all projects from API
  const fetchProject = async () => {
    setIsLoading(true);
    try {
      const res = await apiGetProject();
      console.log(res.data)
      setProject(res.data.user); // Adjust based on your API response structure
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle delete project
  const handleDelete = async (id) => {
    setIsDeleting(true);
    try {
      const res = await apiDeleteProject(id);
      console.log(res.data);
      setProject(project.filter(item => item.id !== id));
    } catch (error) {
      console.log(error);
    } finally {
      setIsDeleting(false);
    }
  };

  useEffect(() => {
    fetchProject();
  }, []);

  return (
    <PagesLayout
      headerText="Projects"
      headerTextClassName="text-[#0F1431]"
      buttonText="Add New Project"
      onClick={() => navigate('/dashboard/project/addproject')}
    >
      {isLoading ? (
        <PageLoader />
      ) : project.length === 0 ? (
        <div className="flex flex-col items-center">
          <img src={Nodata} alt="No data" className="w-48 h-48" />
          <p>No projects added yet</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-20">
          {project.map((project) => (
            <div key={project.id} className="bg-white rounded-xl shadow-md p-5 flex flex-col mb-4">
              {project.thumbnailImage && (
                <img
                  src={project.thumbnailImage}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              )}
              <div className="mt-3 text-lg font-semibold">{project.title}</div>
              <div className="text-gray-600">{project.description}</div>
              <div className="flex mt-auto">
                <button
                  className="mr-2 p-2 hover:bg-green-400 rounded"
                  onClick={() => navigate(`/dashboard/project/edit/${project.id}`)}
                >
                  <Edit className="w-5 h-5 text-green-600" />
                </button>
                <button
                  className="p-2 hover:bg-red-400 rounded"
                  onClick={() => handleDelete(project.id)}
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

export default Project;