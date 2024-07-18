import React, { useState } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './home';
import LogIn from './pages/logIn';
import SignUp from './pages/signUp';
import Preview from './pages/preview';
import DashLayout from './pages/dashboard/layouts/dashLayout';
import Overview from './pages/dashboard/pages/overview';
import Skills from './pages/dashboard/pages/skills';
import Projects from './pages/dashboard/pages/projects';
import Socials from './pages/dashboard/pages/socials';
import Experiences from './pages/dashboard/pages/experiences';
import AddSkill from './pages/dashboard/pages/addSkill';
import AddProject from './pages/dashboard/pages/addProject';
import AddExperience from './pages/dashboard/pages/addExperience';
import AddSocial from './pages/dashboard/pages/addSocial';
import Achievements from './pages/dashboard/pages/achievements';
import AddAchievement from './pages/dashboard/pages/addAchievements';
import Website1 from './assets/images/website.jpg';
import Website4 from './assets/images/website4.jpg';
import Website5 from './assets/images/website5.jpg';
import AddEducation from './pages/dashboard/pages/addEducation';
import Education from './pages/dashboard/pages/education';
import Volunteering from './pages/dashboard/pages/volunteering';
import AddVolunteering from './pages/dashboard/pages/addVolunteering';



function App() {
  const [experiences, setExperiences] = useState([]);
  const [achievements, setAchievements] = useState([]);
  const [projects, setProjects] = useState([
    {
      title: 'Restaurant App',
      description: 'A description of project one.',
      technologies: 'React, Node.js, MongoDB',
      projectUrl: 'https://project-one.com',
      githubUrl: 'https://github.com/project-one',
      startDate: '2023-01-01',
      endDate: '2023-03-01',
      role: 'Frontend Developer',
      thumbnailImage: Website1,
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
  ]);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: 'preview',
      element: <Preview />,
    },
    {
      path: 'dashboard',
      element: <DashLayout />,
      children: [
        {
          index: true,
          element: <Overview />,
        },
        {
          path: 'skills',
          element: <Skills />,
        },
        {
          path: 'skills/addskill',
          element: <AddSkill />,
        },
        {
          path: 'projects',
          element: <Projects projects={projects} />,
        },
        {
          path: 'projects/addproject',
          element: <AddProject setProjects={setProjects} />,
        },
        {
          path: 'achievements',
          element: <Achievements />,
        },
        {
          path: 'achievements/addAchievement',
          element: <AddAchievement setAchievements={setAchievements} />,
        },
        {
          path: 'experiences',
          element: <Experiences experiences={experiences} />,
        },
        {
          path: 'experiences/addExperience',
          element: <AddExperience setExperiences={setExperiences} />,
        },
        {
          path: 'socials',
          element: <Socials />,
        },
        {
          path: 'socials/addsocial',
          element: <AddSocial />,
        },
        {
          path: 'education',
          element: <Education />,
        },
        {
          path: 'education/addeducation',
          element: <AddEducation />,
        },
        {
          path: 'volunteering',
          element: <Volunteering />,
        },
        {
          path: 'volunteering/addvolunteering',
          element: <AddVolunteering />,
        },


      ],
    },
    {
      path: 'login',
      element: <LogIn />,
    },
    {
      path: 'signup',
      element: <SignUp />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
