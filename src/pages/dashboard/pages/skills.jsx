import PagesLayout from '../layouts/pagesLayout';
import  D  from '../../../constants/navlinks';
import {TrashIcon} from 'lucide-react'
import { Edit } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Skills = () => {

  const navigate = useNavigate()
  return (
    <PagesLayout
      headerText="Skills"
      buttonText="Add New Skill"
      onClick={() => navigate('/dashboard/skills/addSkill')}
    > 
      <div className="grid grid-cols-4 gap-6">
        {D.SKILLS.map(({ name, levelOfProficiency }, index) => (
          <div key={index} className="rounded-xl h-40 shadow-md flex flex-col p-5">
            <span>{name}</span>
            <span>{levelOfProficiency}</span>
            <div className="flex mt-auto">
              <button className="mr-2 p-2 hover:bg-green-400 rounded">
                <Edit className="text-green-600 w-5 h-5" />
              </button>
              <button className="p-2 hover:bg-red-400 rounded">
                <TrashIcon className="text-red-600 w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </PagesLayout>
  );
};

export default Skills;
