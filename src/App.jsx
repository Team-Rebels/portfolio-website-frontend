import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./pages/home";
import Dashboard from "./pages/dashboard";
import LogIn from "./pages/logIn";
import SignUp from "./pages/signUp";
import Preview from "./pages/preview";
import "./App.css"

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
