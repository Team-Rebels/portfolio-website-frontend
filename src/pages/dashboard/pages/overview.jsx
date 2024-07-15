import BImage from '../../../assets/images/Banner.png';
import Charles from '../../../assets/images/profile.jpg';
import PagesLayout from '../layouts/pagesLayout';

import D from "../../../constants/navlinks";


const Overview = () => {
  return (
    <div className="p-8 bg-white-100">
      <div className="grid grid-cols-3 gap-6">
        {D.OVERVIEW.map(({ icon, text, total }, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 flex flex-col"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-full bg-indigo-100 text-indigo-600">
                {icon}
              </div>
              <p className="text-lg font-semibold text-gray-600">{text}</p>
            </div>
            <p className="text-2xl font-semibold text-gray-800 mt-auto">{total}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Overview;


