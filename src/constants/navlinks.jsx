import { Layers3, FolderOpen, BriefcaseBusiness, Trophy , BookCopy, MessageSquareText } from 'lucide-react';
import PagesLayout from '../pages/dashboard/layouts/pagesLayout';
import Acheivements from "../pages/dashboard/pages/acheivements";
import Experiences from "../pages/dashboard/pages/experiences";
import Overview from "../pages/dashboard/pages/overview";
import Projects from "../pages/dashboard/pages/projects";
import Skills from "../pages/dashboard/pages/skills";
import SocialLinks from "../pages/dashboard/pages/socialLinks";

const D = {
  NAVLINKS: [
    {
      icon: <Layers3 />,
      text: 'Overview',
      link: '/dashboard',
    },
    {
      icon: <FolderOpen />,
      text: 'Projects',
      link: '/dashboard/projects',
    },
    {
      icon: <BriefcaseBusiness />,
      text: 'Experiences',
      link: '/dashboard/experiences',
    },
    {
      icon: <Trophy />,
      text: 'Achievements',
      link: '/dashboard/achievements',
    },
    {
      icon: <BookCopy />,
      text: 'Skills',
      link: '/dashboard/skills',
    },
    {
      icon: <MessageSquareText />,
      text: 'Social Links',
      link: '/dashboard/socialLinks',
    },
  ],
};

export default D;