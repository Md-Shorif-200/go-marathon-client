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
import MarathonDetails from "../Pages/Marathons/MarathonDetails";
import DashboardLayout from "../Dashboard/DashboardLayout";
import MyApplyList from "../Dashboard/MyApplyList";
import MyMarathons from "../Dashboard/MyMarathons";


  



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
          },


          {
              path : '/marathon-details/:id',
               element : <MarathonDetails></MarathonDetails>
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
    // dashboard route
      {
        path : 'dashboard',
        errorElement : <ErrorPage></ErrorPage>,
        element : <DashboardLayout></DashboardLayout>,
        children : [
           {
             path : '/dashboard/myApplyList',
             element : <MyApplyList></MyApplyList>
           },
           {
            path : '/dashboard/myMarathons',
            element : <MyMarathons></MyMarathons>
           }
        ]
      }
  ]);


  export default Router