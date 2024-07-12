
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
      onClick={() => navigate("./pages/dashboard/pages/addSkill")}
    > 
      <div className="grid grid-cols-4 gap-6">
        {D.SKILLS.map(({ name, levelOfProficiency }, index) => (
          <div key={index} className="rounded-xl h-40 shadow-md flex flex-col p-5">
            <span>{name}</span>
            <span>{levelOfProficiency}</span>
            <div className="flex mt-auto">
              <span className="mr-2 p-2">
                <TrashIcon className="text-black" />
              </span>
              <span>
                <Edit className="text-black" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </PagesLayout>
  );
};

export default Skills;