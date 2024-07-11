import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./home";

import LogIn from "./pages/logIn";
import SignUp from "./pages/signUp";
import Preview from "./pages/preview";
import DashLayout from "./pages/dashboard/layouts/dashLayout";
import Acheivements from "./pages/dashboard/components/acheivements";
import Experiences from "./pages/dashboard/components/experiences";
import Overview from "./pages/dashboard/components/overview";
import Projects from "./pages/dashboard/components/projects";
import Skills from "./pages/dashboard/components/skills";
import SocialLinks from "./pages/dashboard/components/socialLinks";
import Education from "./pages/dashboard/components/education";


function App() {
  const router = createBrowserRouter ([
    {
       path: "/",
            element: <Home/>
          },
          {
            path: "preview",
            element: <Preview/>
          },
          {
            path: "dashboard",
            element: <DashLayout/>,
            children: [
              {
                index: true,
                element:<Overview/>
              },
              {
                path: "skills",
                element: <Skills/>
              },
              {
                path: "projects",
                element: <Projects/>
              },
              {
                path:"acheivements",
                element: <Acheivements/>

              },

              {
                path: "experiences",
                element: <Experiences/>
              },
              {
                path: "socialLinks",
                element: <SocialLinks/>
              },
              {
                path: "education",
                element: <Education/>
              },
            ]
          },
          {
            path: "login",
            element: <LogIn/>
          },
          {
            path: "signup",
            element: <SignUp/>
          },
  ]);
  
  return <RouterProvider router={router} />;

}

export default App
