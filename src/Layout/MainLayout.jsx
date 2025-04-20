import React from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from '../Components/Common/Navbar';
import Footer from '../Components/Common/Footer';
import Heading from '../Components/Heading';

const MainLayout = () => {
    return (
        <div>
              <Heading></Heading>

              <Navbar></Navbar>

              <Outlet></Outlet>

              <Footer></Footer>
            
        </div>
    );
};

export default MainLayout;