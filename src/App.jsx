import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./home";
import Dashboard from "./assets/pages/dashboard";
import LogIn from "./assets/pages/logIn";
import SignUp from "./assets/pages/signUp";
import Preview from "./assets/pages/preview";

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
            element: <Dashboard/>
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
