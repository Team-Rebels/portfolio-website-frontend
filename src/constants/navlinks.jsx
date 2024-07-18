import { Layers3, FolderOpen, BriefcaseBusiness, Trophy, BookCopy, MessageSquareText, GraduationCap, HandHeart  } from 'lucide-react';
import { Award, BookText, FolderKanban, MessageCircleCode,} from "lucide-react";


import GitHubLogo from "../assets/images/github-logo.png";
import InstagramLogo from "../assets/images/instagram.png";
import LinkedInLogo from "../assets/images/linkedin.png";
import JavascriptLogo from '../assets/images/js.png';
import HTMLLogo from '../assets/images/html-logo.png';
import CSSLogo from '../assets/images/CSS-logo.png';

import ReactNativeLogo from '../assets/images/react-logo.png';

import PagesLayout from '../pages/dashboard/layouts/pagesLayout';
import Acheivements from "../pages/dashboard/pages/achievements";
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
      icon: <GraduationCap />,
      text: 'Education',
      link: '/dashboard/education',
    },
    {
      icon: <Trophy />,
      text: 'Achievements',
      link: '/dashboard/achievements',
    },
    {
      icon: <HandHeart />,
      text: 'Volunteering',
      link: '/dashboard/volunteering',
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
      images: JavascriptLogo,
    },
    {
      name: 'HTML',
      levelOfProficiency: 'Advanced',
      images: HTMLLogo,
    },
    {
      name: 'CSS',
      levelOfProficiency: 'Intermediate',
      images: CSSLogo,
    },
    
    {
      name: 'React Native',
      levelOfProficiency: 'Beginner',
      images: ReactNativeLogo,
    },
    {
      name: 'HTML',
      levelOfProficiency: 'Advanced',
      images: HTMLLogo,
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
      icon: GitHubLogo,
      platform: 'GitHub',
      url: 'https://github.com/yourprofile',
    },
    {
      icon: InstagramLogo,
      platform: 'Instagram',
      url: 'https://instagram.com/yourprofile',
    },
    {
      icon: LinkedInLogo,
      platform: 'LinkedIn',
      url: 'https://linkedin.com/in/yourprofile',
    },
  ],


};

export default D;



