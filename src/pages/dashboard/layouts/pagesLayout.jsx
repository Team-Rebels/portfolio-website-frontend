import { PlusCircleIcon } from 'lucide-react'
import { Link } from 'react-router-dom';


const PagesLayout = ({headerText, buttonText, children}) => {
  return (
    <div className="p-10 flex flex-col gap-y-16">
        <div className="flex ">
            <h1 className="text-3xl font-bold">{headerText}</h1>
            <button className="text-white bg-slate-500 px-6 py-2 ml-auto rounded-lg">
                <PlusCircleIcon/>
                {buttonText}
                
            </button>
        </div>
        <div className="">{children}</div>
    </div>
  )
}

export default PagesLayout