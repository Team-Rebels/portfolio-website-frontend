import {
  Layers3,
  FolderOpen,
  BriefcaseBusiness,
  Trophy,
  BookCopy,
  MessageSquareText,
  GraduationCap,
  HandHeart,
  Award,
  BookText,
  FolderKanban,
  MessageCircleCode,
} from 'lucide-react';

import GitHubLogo from '../assets/images/github-logo.png';
import InstagramLogo from '../assets/images/instagram.png';
import LinkedInLogo from '../assets/images/linkedin.png';
import JavascriptLogo from '../assets/images/js.png';
import HTMLLogo from '../assets/images/html-logo.png';
import CSSLogo from '../assets/images/CSS-logo.png';
import ReactNativeLogo from '../assets/images/react-logo.png';

import PagesLayout from '../pages/dashboard/layouts/pagesLayout';
import Achievements from '../pages/dashboard/pages/achievements';
import Experiences from '../pages/dashboard/pages/experiences';
import Overview from '../pages/dashboard/pages/overview';
import Projects from '../pages/dashboard/pages/projects';
import Skills from '../pages/dashboard/pages/skills';
import Socials from '../pages/dashboard/pages/socials';
import  Website  from '../assets/images/website.jpg';
import  Website4  from '../assets/images/website4.jpg';
import  Website5  from '../assets/images/website5.jpg';



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
      text: 'Skills',
      total: 40,
    },
    {
      icon: <FolderKanban />,
      text: 'Projects',
      total: 100,
    },
    {
      icon: <BriefcaseBusiness />,
      text: 'Experiences',
      total: 9,
    },
    {
      icon: <Award />,
      text: 'Achievements',
      total: 10,
    },
    {
      icon: <MessageCircleCode />,
      text: 'Socials',
      total: 4,
    },
  ],
  EXPERIENCE: [
    {
      companyName: "Google",
      role: "Junior Web Developer",
      skills: ["JavaScript", "React", "HTML", "CSS"],
      responsibilities: ["Developed new features", "Fixed bugs", "Collaborated with design team"],
      location: "Accra, Greater Accra Region, Ghana",
      startDate: "2022-11-01",
      endDate: null,
    },
    {
      companyName: "Microsoft",
      role: "Frontend Developer Intern",
      skills: ["JavaScript", "HTML", "CSS"],
      responsibilities: ["Assisted in developing front-end applications", "Participated in code reviews", "Maintained documentation"],
      location: "Accra, Greater Accra Region, Ghana",
      startDate: "2021-08-01",
      endDate: "2022-11-01",
    },
    {
      companyName: "Airbnb",
      role: "Customer Service Specialist",
      skills: ["Customer Service", "Problem-Solving", "Communication"],
      responsibilities: ["Handled customer inquiries", "Resolved issues", "Provided product information"],
      location: "United Kingdom - On-site",
      startDate: "2019-03-01",
      endDate: "2019-12-01",
    },
  ],
  EDUCATION: [
    {
      id: 1,
      schoolName: 'University of Accra',
      program: 'Bachelor of Science in Computer Science',
      qualification: 'BSc',
      grade: '1:1',
      location: 'Accra, Ghana',
      startDate: '2018-09-01',
      endDate: '2022-06-30',
    },
    {
      id: 2,
      schoolName: 'KNUST',
      program: 'Master of Science in Software Engineering',
      qualification: 'MSc',
      grade: '2:1',
      location: 'Accra, Ghana',
      startDate: '2022-09-01',
      endDate: '2024-06-30',
    },
  ],
  Projects: [
    {
      title: 'Restaurant App',
      description: 'A description of project one.',
      technologies: 'React, Node.js, MongoDB',
      projectUrl: 'https://project-one.com',
      githubUrl: 'https://github.com/project-one',
      startDate: '2023-01-01',
      endDate: '2023-03-01',
      role: 'Frontend Developer',
      thumbnailImage: Website,
      screenshots: [],
    },
    {
      title: 'Event App',
      description: 'A description of project two.',
      technologies: 'React, Tailwind CSS, Vite',
      projectUrl: 'https://project-two.com',
      githubUrl: 'https://github.com/project-two',
      startDate: '2023-02-01',
      endDate: '2023-04-01',
      role: 'Backend Developer',
      thumbnailImage: Website4,
      screenshots: [],
    },
    {
      title: 'Furnish App',
      description: 'A description of project three.',
      technologies: 'React, Tailwind CSS, Vite',
      projectUrl: 'https://project-three.com',
      githubUrl: 'https://github.com/project-three',
      startDate: '2023-03-01',
      endDate: '2023-05-01',
      role: 'Full Stack Developer',
      thumbnailImage: Website5,
      screenshots: [],
    },
  ],
  VOLUNTEERING: [
    {
      id: 1,
      organization: 'Volunteers’ Aid',
      description: 'An NGO which links volunteers to organisations.',
      skills: ['HTML', 'CSS', 'React'],
      responsibilities: ['Built the website for the organisation'],
      role: 'Full Stack Developer',
      location: 'Accra, Ghana',
      startDate: '2024-01-01',
      endDate: '2024-07-31',
      projectName: 'ProjectBuild',
    },
    {
      id: 2,
      organization: 'Youth Development Program',
      description: 'Developed and maintained the program’s website.',
      skills: ['React', 'CSS'],
      responsibilities: ['Built the website for the organisation'],
      role: 'Website Developer',
      location: 'Accra, Ghana',
      startDate: '2019-03-15',
      endDate: '2020-12-31',
      projectName: 'Youth Leadership Initiative Website',
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
