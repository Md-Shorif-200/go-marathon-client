import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FiMenu, FiHome, FiList, FiFlag } from 'react-icons/fi';
import { MdDashboardCustomize } from 'react-icons/md';

const DashboardLayout = () => {
  return (
    <div className="drawer md:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

      {/* Main Content */}
      <div className="drawer-content flex flex-col">
        {/* Topbar for small devices */}
        <div className="flex justify-between items-center p-4 border-b shadow-sm md:hidden">
          <h1 className="text-xl font-bold text-gray-800 flex items-center gap-2">
            <MdDashboardCustomize className="text-[#F4A261]" /> Dashboard
          </h1>
          <label
            htmlFor="my-drawer-2"
            className="drawer-button text-2xl text-gray-700 hover:text-[#F4A261] transition-all duration-200 cursor-pointer"
          >
            <FiMenu />
          </label>
        </div>

        {/* Page Content */}
        <div className="p-4">
          <Outlet />
        </div>
      </div>

      {/* Sidebar */}
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>

        <div className="bg-[#F4A261] text-white min-h-full w-72 p-4 space-y-6">
          {/* Dashboard Title */}
          <div className="flex items-center gap-2 text-2xl font-semibold mb-4">
            <MdDashboardCustomize className="text-white" />
            <span>Dashboard</span>
          </div>

          <ul className="menu space-y-2 text-base">
           

            <li>
              <NavLink
                to="/dashboard/myApplyList"
                className={({ isActive }) =>
                  `flex items-center gap-2 p-2 rounded-md transition ${
                    isActive ? 'bg-white text-[#F4A261]' : 'hover:bg-[#f8bb86]'
                  }`
                }
              >
                <FiList /> My Apply List
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/dashboard/myMarathons"
                className={({ isActive }) =>
                  `flex items-center gap-2 p-2 rounded-md transition ${
                    isActive ? 'bg-white text-[#F4A261]' : 'hover:bg-[#f8bb86]'
                  }`
                }
              >
                <FiFlag /> My Marathons
              </NavLink>
            </li>
          
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `flex items-center gap-2 p-2 rounded-md transition ${
                    isActive ? 'bg-white text-[#F4A261]' : 'hover:bg-[#f8bb86]'
                  }`
                }
              >
                <FiHome /> Home
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
