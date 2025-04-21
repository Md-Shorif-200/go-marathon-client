import {
    createBrowserRouter,

  } from "react-router-dom";

import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Components/Common/ErrorPage";
import Home from "../Pages/Home/Home";
import SignUp from "../Pages/Auth/SignUp";
import LogIn from "../Pages/Auth/LogIn";
import AddMarathon from "../Pages/AddMarathon/AddMarathon";
import PrivateRoute from "./PrivateRoute";
import AllMarathon from "../Pages/Marathons/AllMarathon";


  



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
        {
            path : 'addMarathon',
            element : <PrivateRoute><AddMarathon></AddMarathon></PrivateRoute>
        },

          {
             path : 'marathons',
             element : <AllMarathon></AllMarathon>
          }

        ,

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