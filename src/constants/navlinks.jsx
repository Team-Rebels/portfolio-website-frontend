import { Layers3, FolderOpen, BriefcaseBusiness, Trophy , BookCopy, MessageSquareText } from 'lucide-react';
import PagesLayout from '../pages/dashboard/layouts/pagesLayout';
import Acheivements from "../pages/dashboard/components/acheivements";
import Experiences from "../pages/dashboard/components/experiences";
import Overview from "../pages/dashboard/components/overview";
import Projects from "../pages/dashboard/components/projects";
import Skills from "../pages/dashboard/components/skills";
import SocialLinks from "../pages/dashboard/components/socialLinks";

const D = {
    NAVLINKS: [
      {
        icon: <Layers3/>, 
        text: 'Overview',
        link: '/overview'
        
      },
      {
        icon: <FolderOpen/>, 
        text: 'Projects',
        link: '/projects'
        
      },
      {
        icon: <BriefcaseBusiness/>, 
        text: 'Experiences',
        link: '/experiences'
       
      },
      {
        icon: <Trophy/>, 
        text: 'Achievements',
        link: '/achievements'
      },
      {
        icon: <BookCopy/>, 
        text: 'Skills',
        link: '/skills'
      },
      {
        icon: <MessageSquareText/>, 
        text: 'Social Links',
        link: '/socialLinks'

      },
    ],
  };
  
  export default D;
  