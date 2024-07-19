
import PagesLayout from '../layouts/pagesLayout';
import  D  from '../../../constants/navlinks';
import {TrashIcon} from 'lucide-react'
import { Edit } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState, } from 'react';
import { apiDeleteSkill, apiGetSkills } from '../../../services/skills';
import PageLoader from '../../../components/PageLoader';
import Nodata from '../../../assets/images/nodata.svg'
import Loader from '../../../components/loader';

const Skills = () => {
  const navigate = useNavigate();
  const [skills, setSkills] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const fetchSkills = async () => {
    setIsLoading(true);
    try {
      const res = await apiGetSkills();
      console.log(res.data);
      setSkills(res.data.user);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
 const handleDelete = async (_id) => {
  try {
    const res = await apiDeleteSkill(_id)
    console.log(res.data)
    toast.success(res.data.message);
    
  } catch (error) {
    console.log(error);
    toast.error("An error occured");
    
  }

 };

  useEffect(() => {
    fetchSkills();
  }, []);

  return (
    <PagesLayout
      headerText="Skills"
      headerTextClassName="text-[#0F1431]"
      buttonText="Add New Skill"
      onClick={() => navigate('/dashboard/skills/addSkill')}
    >
      {isLoading ? (
        <PageLoader />
      ) : skills.length == 0 ? (
        <div className="flex flex-col items-center">
          <img src={Nodata} alt="No data" className="w-48 h-48" />
          <p>No skill added yet</p>
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-6 pt-20">
          {D.SKILLS.map(({ name, levelOfProficiency, image , _id}, index) => (
            <div key={index} className="rounded-xl h-40 shadow-md flex flex-col bg-white p-5">
              <span>{name}</span>
              <span>{levelOfProficiency}</span>
              <span>{image}</span>
              <div className="flex mt-auto">
                <button className="mr-2 p-2 hover:bg-green-400 rounded">
                  <Edit className="text-green-600 w-5 h-5" />
                </button>
               
                <button onClick={() => handleDelete(_id)} className="p-2 hover:bg-red-400 rounded">
                 {
                  isDeleting ? <Loader/> : <TrashIcon/>
                 }
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </PagesLayout>
  );
};

export default Skills;