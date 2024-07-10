import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./home";
import Dashboard from "./assets/pages/dashboard";
import LogIn from "./pages/logIn";
import SignUp from "./pages/signUp";
import Preview from "./pages/preview";
import DashboardLayout from "./assets/pages/dashboard/layouts";
import Skills from "./assets/pages/dashboard/pages/skills";
import Overview from "./assets/pages/dashboard/pages/overview";
import Projects from "./assets/pages/dashboard/pages/projects";
import Acheivements from "./assets/pages/dashboard/pages/acheivements";
import Experiences from "./assets/pages/dashboard/pages/experiences";
import SocialLinks from "./assets/pages/dashboard/pages/socialLinks";

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
            element: <DashboardLayout/>,
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
