import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import { FaUser,FaSignOutAlt } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
// nav logo
import navLogo from '../../assets/NavLogo/go_marathon_loogo_1.png'

const Navbar = () => {

   const {user,userLogOut} = useAuth()


     const links = <>
      
          <li> <NavLink to='/'>home</NavLink> </li>
          <li> <NavLink to='marathons'>All Marathons</NavLink> </li>
          <li> <NavLink to='addMarathon'>Add Marathon</NavLink> </li>

      </>

    
    return (
        <div className="navbar  flex items-center justify-between bg-base-100 shadow-sm px-2 sm:px-6 md:px-14 py-4 sticky top-0 z-10">
        <div className="flex items-center">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
            </ul>
          </div>

          <div className="nav_logo  flex items-center sm:gap-x-2">
          <img src={navLogo} alt="nav-logo"  className=' w-[40px]  sm:w-[50px] ' />
          <h2 className='font-semibold'>GOMARATHON</h2>
          </div>

        </div>
        <div className=" hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
                    {links}
          </ul>
        </div>

          {

             user ? 
              <>
               <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-md dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <Link className="text-lg my-2">
             <FaUser></FaUser>
            Profile

          </Link>
        </li>
        <li><Link to='dashboard' className='text-lg my-2'> <MdDashboard></MdDashboard> Dashboard</Link></li>
        <li><Link onClick={userLogOut} className='text-lg my-2'>  <FaSignOutAlt></FaSignOutAlt> Logout</Link></li>
      </ul>
    </div>
              </>
              :
              <>
                 <div className='auth_button flex gap-x-4'>
                <Link to='logIn' className="log_in">
                  <button className="primary_btn">Log In</button>
                </Link>

                <Link to='signUp' className="sign_up hidden sm:block ">
                  <button className="secondary_btn">Sign Up</button>
                </Link>
          </div>
              </>

          }
       
       
      </div>
    );
};

export default Navbar;