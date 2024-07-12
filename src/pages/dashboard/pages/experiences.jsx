import { useNavigate } from 'react-router-dom';
import PagesLayout from '../layouts/pagesLayout';

const Experiences = () => {
  const navigate = useNavigate()
  return (
    <PagesLayout headerText="Experiences" buttonText="Add New Expeirences" 
    onClick={() => navigate("/dashboard/experiences/addExperience")}>
   <span> Experience List Here </span>
    </PagesLayout>
   
  )
}

export default Experiences