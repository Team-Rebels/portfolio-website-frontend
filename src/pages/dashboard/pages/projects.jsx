import PagesLayout from "../layouts/pagesLayout"
import { useNavigate } from 'react-router-dom';



const Projects = () => {
  const navigate = useNavigate()
  return (
    <PagesLayout
    headerText="Projects"
    buttonText="Add New Project"
    onClick={() => navigate("./pages/dashboard/pages/addProject")}
  > 
  </PagesLayout>
  )
}

export default Projects