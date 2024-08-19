import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTruckLoading, FaRoad, FaFileInvoice, FaTags, FaMapSigns, FaUser, FaChevronDown, FaBars } from 'react-icons/fa';

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleProfileDropdown = () => {
    setProfileDropdownOpen(!profileDropdownOpen);
  };

  return (
    <div className="flex items-center justify-between p-4 bg-white shadow-md relative">
      <div className="flex items-center">
        <img
          src="/path-to-your-logo.png"
          alt="Company Logo"
          className="w-10 h-10 mr-4"
        />
        <h1 className="text-xl font-bold">Company Name</h1>
      </div>

      {/* Menu icon and user profile for small screens */}
      <div className="flex md:hidden items-center">
        <FaUser className="text-blue-500 hover:text-blue-700 cursor-pointer" onClick={toggleProfileDropdown} />
        <FaBars className="ml-4 text-blue-500 hover:text-blue-700 cursor-pointer" onClick={toggleMenu} />
      </div>

      {/* Profile dropdown for small screens */}
      {profileDropdownOpen && (
        <div className="absolute top-12 right-0 mt-2 w-48 bg-white border rounded shadow-lg md:hidden">
          <div className="flex items-center p-4">
            <FaUser className="text-blue-500 mr-2" />
            <span>Sunder Yadav</span>
          </div>
          <Link
            to="/profile"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            onClick={() => setProfileDropdownOpen(false)}
          >
            Profile
          </Link>
          <Link
            to="/logout"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            onClick={() => setProfileDropdownOpen(false)}
          >
            Log Out
          </Link>
        </div>
      )}

      {/* Main menu for larger screens */}
      <div className="hidden md:flex space-x-6">
        <Link to="/loads" className="flex items-center text-blue-500 hover:text-blue-700">
          <FaTruckLoading className="mr-2" />
          <span>Loads</span>
        </Link>
        <Link to="/contracted-lane" className="flex items-center text-gray-700 hover:text-blue-700">
          <FaRoad className="mr-2" />
          <span>Contracted Lane</span>
        </Link>
        <Link to="/sales-order" className="flex items-center text-gray-700 hover:text-blue-700">
          <FaFileInvoice className="mr-2" />
          <span>Sales Order</span>
        </Link>
        <Link to="/purchase-order" className="flex items-center text-gray-700 hover:text-blue-700">
          <FaTags className="mr-2" />
          <span>Purchase Order</span>
        </Link>
        <Link to="/trips" className="flex items-center text-gray-700 hover:text-blue-700">
          <FaMapSigns className="mr-2" />
          <span>Trips</span>
        </Link>
        <div className="relative">
          <button onClick={toggleDropdown} className="flex items-center text-blue-500 hover:text-blue-700 focus:outline-none">
            <FaUser className="mr-2" />
            <span>Sunder Yadav</span>
            <FaChevronDown className="ml-1" />
          </button>

          {/* Dropdown menu */}
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg">
              <Link
                to="/profile"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                onClick={() => setDropdownOpen(false)}
              >
                Profile
              </Link>
              <Link
                to="/logout"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                onClick={() => setDropdownOpen(false)}
              >
                Log Out
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Sliding menu for small screens */}
      <div className={`fixed top-0 right-0 h-full bg-white shadow-lg z-50 transition-transform transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden p-10`}>
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-bold">Menu</h1>
          <FaBars className="text-blue-500 hover:text-blue-700 cursor-pointer" onClick={toggleMenu} />
        </div>
        <Link to="/loads" className="block mb-4 text-blue-500 hover:text-blue-700">
          <FaTruckLoading className="mr-2 inline" />
          <span>Loads</span>
        </Link>
        <Link to="/contracted-lane" className="block mb-4 text-gray-700 hover:text-blue-700">
          <FaRoad className="mr-2 inline" />
          <span>Contracted Lane</span>
        </Link>
        <Link to="/sales-order" className="block mb-4 text-gray-700 hover:text-blue-700">
          <FaFileInvoice className="mr-2 inline" />
          <span>Sales Order</span>
        </Link>
        <Link to="/purchase-order" className="block mb-4 text-gray-700 hover:text-blue-700">
          <FaTags className="mr-2 inline" />
          <span>Purchase Order</span>
        </Link>
        <Link to="/trips" className="block mb-4 text-gray-700 hover:text-blue-700">
          <FaMapSigns className="mr-2 inline" />
          <span>Trips</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;

