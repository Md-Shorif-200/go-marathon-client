import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {

  RouterProvider,
} from "react-router-dom";

import Router from './Routes/Router.jsx';
import AuthProvider from './Context/AuthProvider.jsx';
import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById('root')).render(
  <StrictMode>
       <AuthProvider>
       <RouterProvider router={Router} />
       {/* react hot toast */}
        <Toaster></Toaster>
       </AuthProvider>
  </StrictMode>,
)
