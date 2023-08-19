import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Services from "../components/Services/Services";
import About from "../components/AboutUs/About";
import Scholarship from "../components/Scholarship/Scholarship";
import ContactUs from "../components/Contact/ContactUs";
import Online from "../components/Tutoring/Online";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import SuccessPage from "../components/SuccessPage/SuccessPage";
import NotFound from "../components/NotFound/NotFound";




export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      errorElement: <NotFound />, 
      children: [
        {
          path: "/",
          element: <Services />
        },
        {
          path: "/aboutUs",
          element: <About />
        },
        {
          path: "/scholarShip",
          element: <Scholarship />
        },
        {
          path: "/contactUs",
          element: <ContactUs />
        },
        
        {
          path: "/online",
          element: <Online />
        },
        {
          path: "/login",
          element: <Login />
        },
        {
          path: "/register",
          element: <Register />
        },
        {
          path: "/success",
          element: <SuccessPage />
        }
      ]
    },
  ]); 