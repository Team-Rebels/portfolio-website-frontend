import { PlusCircleIcon } from 'lucide-react'
import { Link } from 'react-router-dom';
import DashboardBg from '../../../assets/images/dashboard-bg.png';


const PagesLayout = ({ headerText, buttonText, headerTextClassName, children, onClick }) => {
  return (
    <div className="relative p-10 flex flex-col gap-y-16 flex-grow bg-[#F8FAFC]">
      {/* Background image with opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-100"
        
      ></div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex ">
        <h1 className={`text-3xl font-bold ${headerTextClassName}`}>{headerText}</h1>
          <button
            className="text-white bg-slate-500 px-6 py-2 ml-auto rounded-lg flex gap-x-2"
            onClick={onClick}
          >
            <PlusCircleIcon />
            {buttonText}
          </button>
        </div>
        <div className="relative z-10 flex-grow">{children}</div>
      </div>
    </div>
  );
};

export default PagesLayout;

