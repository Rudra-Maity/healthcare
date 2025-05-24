import React, { useState } from 'react';
import {
  Bone,
  ChevronDown,
} from 'lucide-react';
import { FaLungs } from "react-icons/fa";
import HealthcareImage from './components/HealthcareImage';
import ActivityChart from './components/ActivityChart';
import HealthCard from './components/HealthCard';
import SidebarItem from './components/SidebarItem';
import Header from './components/Header';
import Calender from './components/Calender';
import navigationData from './Data/navigationData';



export default function HealthcareDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [weekDropdownOpen, setWeekDropdownOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('dashboard');

  const handleItemClick = (itemId) => {
    setActiveItem(itemId);
  };
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className={` ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 fixed lg:static inset-y-0 left-0 z-50 w-56 bg-white shadow-lg transition-transform duration-300 ease-in-out`}>
        <div className="p-6">
          <h1 className="text-2xl font-bold text-cyan-500">Healthcare.</h1>
        </div>

         {/* General Section */}
      <div className="mb-6 ml-8">
        <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 ml-4">
          General
        </h2>
        <div className="space-y-1">
          {navigationData.general.map((item) => (
            <SidebarItem
              key={item.id}
              icon={item.icon}
              label={item.label}
              active={activeItem === item.id}
              onClick={() => handleItemClick(item.id)}
            />
          ))}
        </div>
      </div>

      {/* Tools Section */}
      <div className="mb-6 ml-8">
        <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 ml-4">
          Tools
        </h2>
        <div className="space-y-1">
          {navigationData.tools.map((item) => (
            <SidebarItem
              key={item.id}
              icon={item.icon}
              label={item.label}
              active={activeItem === item.id}
              onClick={() => handleItemClick(item.id)}
            />
          ))}
        </div>
      </div>
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 lg:ml-0">
        {/* Header */}
        <Header setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />

        {/* Dashboard Content */}
        <main className="p-6">
          <div className="flex flex-col lg:flex-row justify-around items-start lg:items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 lg:mb-0">Dashboard</h2>
            <div className="relative">
              <button
                onClick={() => setWeekDropdownOpen(!weekDropdownOpen)}
                className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                <span className="text-sm font-medium">This Week</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {weekDropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border z-10">
                  <div className="py-2">
                    <button className="w-full text-left px-4 py-2 hover:bg-gray-50 text-sm">This Week</button>
                    <button className="w-full text-left px-4 py-2 hover:bg-gray-50 text-sm">Last Week</button>
                    <button className="w-full text-left px-4 py-2 hover:bg-gray-50 text-sm">This Month</button>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-12 lg:grid-cols-8 gap-4">
            {/* Human Model */}
            <div className="lg:col-span-4 bg-white rounded-lg p-8 shadow-sm">
              <HealthcareImage />
            </div>

            {/* Health Cards */}
            <div className="lg:col-span-3 space-y-4">
              <HealthCard
                icon={() => <div className="text-white"><FaLungs /></div>}
                title="Lungs"
                date="June 25 Oct 2021"
                status="80%"
                color="bg-red-500"
              />
              <HealthCard
                icon={() => <div className="text-white">🦷</div>}
                title="Teeth"
                date="June 26 Oct 2021"
                status="70%"
                color="bg-green-500"
              />
              <HealthCard
                icon={Bone}
                title="Bone"
                date="June 26 Oct 2021"
                status="60%"
                color="bg-orange-500"
              />
            </div>
            {/* Calendar and Schedule */}
            <Calender />


          </div>

          {/* Activity Chart */}
          <div className="mt-8">
            <ActivityChart />
          </div>
        </main>
      </div>
    </div>
  );
}