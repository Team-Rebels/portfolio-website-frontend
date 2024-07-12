import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./home";

import LogIn from "./pages/logIn";
import SignUp from "./pages/signUp";
import Preview from "./pages/preview";
import DashLayout from "./pages/dashboard/layouts/dashLayout";
import Acheivements from "./pages/dashboard/pages/acheivements";
import Experiences from "./pages/dashboard/pages/experiences";
import Overview from "./pages/dashboard/pages/overview";
import Projects from "./pages/dashboard/pages/projects";
import Skills from "./pages/dashboard/pages/skills";
import SocialLinks from "./pages/dashboard/pages/socialLinks";
import Education from "./pages/dashboard/pages/education";
import AddSkill from "./pages/dashboard/pages/addSkill";
import AddProject from "./pages/dashboard/pages/addProject";
import AddExperience from "./pages/dashboard/pages/addExperience";


function App() {
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
          path: 'Skills/add-skill',
          element: <AddSkill />,
        },
        {
          path: 'projects',
          element: <Projects />,
        },
        {
          path: 'projects/add-project',
          element: <AddProject />,
        },
        {
          path: 'achievements',
          element: <Acheivements />,
        },
        {
          path: 'experiences',
          element: <Experiences />,
        },
        {
          path: 'experiences/add-experience',
          element: <AddExperience />,
        },
        {
          path: 'socialLinks',
          element: <SocialLinks />,
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
