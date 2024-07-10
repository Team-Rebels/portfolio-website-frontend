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
