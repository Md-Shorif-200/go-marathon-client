import {
    createBrowserRouter,

  } from "react-router-dom";

import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Components/Common/ErrorPage";
import Home from "../Pages/Home/Home";
import SignUp from "../Pages/Auth/SignUp";
import LogIn from "../Pages/Auth/LogIn";
import AddMarathon from "../Pages/AddMarathon/AddMarathon";


  



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
            element : <AddMarathon></AddMarathon>
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