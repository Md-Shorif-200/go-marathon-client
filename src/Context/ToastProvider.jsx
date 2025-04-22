import React from 'react';
import { Toaster } from 'react-hot-toast';

const ToastProvider = () => {
    return (
         <Toaster
      position="top-center"
      reverseOrder={false}
      toastOptions={{
        duration: 5000,
        style: {
          background: "#FFFFFF",
          color: "#000000",
          fontSize: "17px",
        },
        success: {
          iconTheme: {
            primary: "#4CAF50",
            secondary: "#fff",
          },
        },
        error: {
          iconTheme: {
            primary: "#F44336",
            secondary: "#fff",
          },
        },
      }}
    />
    );
};

export default ToastProvider;