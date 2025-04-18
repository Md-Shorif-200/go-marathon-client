import {
    createBrowserRouter,

  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Common/ErrorPage";
import Home from "../Home/Home";
  



  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement : <ErrorPage></ErrorPage>,
      children : [
        {
            path : '/',
            element : <Home></Home>
        }
      ]
    },
  ]);


  export default router