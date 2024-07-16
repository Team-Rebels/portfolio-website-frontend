import PagesLayout from "../layouts/pagesLayout"
import { useNavigate } from 'react-router-dom';
import D from '../../../constants/navlinks';
import { TrashIcon, Edit } from 'lucide-react';

const Socials = () => {
  const navigate = useNavigate();

  return (
    <PagesLayout
      headerText="Socials"
      buttonText="Add New Social Link"
      onClick={() => navigate('/dashboard/socials/addsocial')}
    >
      <div className="flex flex-cols-1 pt-20 gap-4">
        {D.SOCIALLINKS.map(({ icon, platform, url }, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md flex flex-col p-5">
            <div className="flex items-center mb-3">
              <img src={icon} alt={`${platform} icon`} className="w-8 h-8 mr-3" />
              <span className="font-semibold">{platform}</span>
            </div>
            <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline mb-3">
              {url}
            </a>
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

export default Socials;













