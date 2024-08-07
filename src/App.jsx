import React, { useState } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './home';
import LogIn from './pages/logIn';
import SignUp from './pages/signUp';
import Preview from './pages/preview/index';
import DashLayout from './pages/dashboard/layouts/dashLayout';
import Overview from './pages/dashboard/pages/overview';
import Skills from './pages/dashboard/pages/skills';
import Project from './pages/dashboard/pages/project';
import Socials from './pages/dashboard/pages/socials';
import Experience from './pages/dashboard/pages/experience';
import AddSkill from './pages/dashboard/pages/addSkill';
import AddProject from './pages/dashboard/pages/addProject';
import AddExperience from './pages/dashboard/pages/addExperience';
import AddSocial from './pages/dashboard/pages/addSocial';
import Achievement from './pages/dashboard/pages/achievement';
import AddAchievement from './pages/dashboard/pages/addAchievement';
import Website1 from './assets/images/website.jpg';
import Website4 from './assets/images/website4.jpg';
import Website5 from './assets/images/website5.jpg';
import AddEducation from './pages/dashboard/pages/addEducation';
import Education from './pages/dashboard/pages/education';
import Volunteering from './pages/dashboard/pages/volunteering';
import AddVolunteering from './pages/dashboard/pages/addVolunteering';
import AuthLayout from './layouts/authLayout';
import { apiGetUserDetails } from "./services/preview";
import Profile from './pages/dashboard/pages/profile';
import { toast } from 'react-toastify';



function App() {
  const [experience, setExperience] = useState([]);
  const [achievement, setAchievement] = useState([]);
  const [project, setProject] = useState([
    
  ]);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    // {
    //   element: <AuthLayout />,
    //   children: [
        {
          path: "login",
          element: <LogIn />,
        },
        {
          path: "signup",
          element: <SignUp />,
        },
    //   ],
    // },
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
          path: 'project',
          element: <Project project={project} />,
        },
        {
          path: 'project/addproject',
          element: <AddProject setProject={setProject} />,
        },
        {
          path: 'achievement',
          element: <Achievement achievement={achievement} />,
        },
        {
          path: 'achievement/addAchievement',
          element: <AddAchievement setAchievement={setAchievement} />,
        },
        {
          path: 'experience',
          element: <Experience experience={experience} />,
        },
        {
          path: 'experience/addExperience',
          element: <AddExperience setExperience={setExperience} />,
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
        {
          path: "profile",
          element: <Profile />,
        },
      ],
    },
    {
      path: "preview/:username",
      element: <Preview />,
      loader: async({params}) => {
        const username = params.username
        try {
          const response = await apiGetUserDetails(username)
          const userProfileData = response?.data.user;
          return userProfileData;
        } catch (error) {
          console.log(error)
          toast.error("An error occured")
          return null;
        }
      }
    }
   
  ]);

  return <RouterProvider router={router} />;
}

export default App;
