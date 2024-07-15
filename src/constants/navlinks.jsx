
import { Layers3, FolderOpen, BriefcaseBusiness, Trophy, BookCopy, MessageSquareText } from 'lucide-react';
import { Award, BookText, FolderKanban, MessageCircleCode,} from "lucide-react";
import { FaLinkedin, FaFacebookSquare, FaTwitterSquare, FaYoutubeSquare } from 'react-icons/fa';
import PagesLayout from '../pages/dashboard/layouts/pagesLayout';
import Acheivements from "../pages/dashboard/pages/acheivements";
import Experiences from "../pages/dashboard/pages/experiences";
import Overview from "../pages/dashboard/pages/overview";
import Projects from "../pages/dashboard/pages/projects";
import Skills from "../pages/dashboard/pages/skills";
import Socials from "../pages/dashboard/pages/socials";

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
      text: 'Socials',
      link: '/dashboard/socials',
    },
  ],
  SKILLS: [
    {
      name: 'Javascript',
      levelOfProficiency: 'Beginner',
    },
    {
      name: 'HTML',
      levelOfProficiency: 'Advanced',
    },
    {
      name: 'CSS',
      levelOfProficiency: 'Intermediate',
    },
    {
      name: 'Typescript',
      levelOfProficiency: 'Beginner',
    },
    {
      name: 'React Native',
      levelOfProficiency: 'Beginner',
    },
    {
      name: 'React Native',
      levelOfProficiency: 'Beginner',
    },

  ],
  OVERVIEW: [
    {
      icon: <BookText />,
      text: "Skills",
      total: 40,
    },
    {
      icon: <FolderKanban />,
      text: "Projects",
      total: 100,
    },
    {
      icon: <BriefcaseBusiness />,
      text: "Experiences",
      total: 9,
    },
    {
      icon: <Award />,
      text: "Achievements",
      total: 10,
    },
    {
      icon: <MessageCircleCode />,
      text: "Socials",
      total: 4,
    },
  ],
  SOCIALLINKS: [
    {
      icon: <FaLinkedin />,
      platform: 'LinkedIn',
      url: 'https://www.linkedin.com/in/yourprofile',
    },
    {
      icon: <FaFacebookSquare />,
      platform: 'Facebook',
      url: 'https://www.facebook.com/yourprofile',
    },
    {
      icon: <FaTwitterSquare />,
      platform: 'X (Twitter)',
      url: 'https://twitter.com/yourhandle',
    },
    {
      icon: <FaYoutubeSquare />,
      platform: 'YouTube',
      url: 'https://www.youtube.com/c/yourchannel',
    },
  ],


};

export default D;