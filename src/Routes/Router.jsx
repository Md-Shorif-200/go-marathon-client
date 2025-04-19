import {
    createBrowserRouter,

  } from "react-router-dom";

import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Components/Common/ErrorPage";
import Home from "../Pages/Home/Home";
import SignUp from "../Pages/Auth/SignUp";
import LogIn from "../Pages/Auth/LogIn";


  



  const Router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement : <ErrorPage></ErrorPage>,
      children : [
        {
            path : '/',
            element : <Home></Home>
        },

        // Auth form 
        {
          path : '/signUp',
            element : <SignUp></SignUp>
        }
        ,
        {
          path : '/logIn',
          element  : <LogIn></LogIn>
        }
      ]
    },
  ]);


  export default Router