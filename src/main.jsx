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
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ToastProvider from './Context/ToastProvider.jsx';

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
       <AuthProvider>

         <QueryClientProvider client={queryClient}>
       <RouterProvider router={Router} />

         </QueryClientProvider>
       </AuthProvider>
       {/* react hot toast */}
        <ToastProvider></ToastProvider>
  </StrictMode>,
)
