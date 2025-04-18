import React from 'react';
import Navbar from '../Common/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Common/Footer';

const MainLayout = () => {
    return (
        <div>

              <Navbar></Navbar>

              <Outlet></Outlet>

              <Footer></Footer>
            
        </div>
    );
};

export default MainLayout;