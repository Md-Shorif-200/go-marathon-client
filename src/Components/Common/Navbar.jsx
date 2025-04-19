import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import { FaUser,FaSignOutAlt } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";

const Navbar = () => {

   const {user,userLogOut} = useAuth()


     const links = <>
      
          <li> <NavLink>home</NavLink> </li>
          <li> <NavLink>marathon</NavLink> </li>
          <li> <NavLink>about us</NavLink> </li>

      </>

    
    return (
        <div className="navbar  flex justify-between bg-base-100 shadow-sm px-14 py-4">
        <div className="">
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
          <a className="btn btn-ghost text-xl primary_text_color">GO MARATHON</a>
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
        <li><Link className='text-lg my-2'> <MdDashboard></MdDashboard> Dashboard</Link></li>
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

                <Link to='signUp' className="sign_up">
                  <button className="secondary_btn">Sign Up</button>
                </Link>
          </div>
              </>

          }
       
       
      </div>
    );
};

export default Navbar;