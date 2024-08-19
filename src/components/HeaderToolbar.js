import React from 'react';

const HeaderToolbar = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-4 bg-white shadow-sm space-y-4 md:space-y-0">
      
      {/* Search input */}
      <div className="flex items-center space-x-2 w-full md:w-auto">
        <input
          type="text"
          placeholder="Search"
          className="w-full md:w-auto px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>

      {/* Select, date pickers, and buttons */}
      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 w-full md:w-auto">
        
        {/* Dropdown */}
        <div className="w-full md:w-auto">
          <select className="w-full md:w-auto px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300">
            {[...Array(10).keys()].map(num => (
              <option key={num + 1} value={num + 1}>
                {num + 1} Selected
              </option>
            ))}
          </select>
        </div>

        {/* Date Picker Inputs */}
        <div className="flex space-x-2 w-full md:w-auto">
          <input
            type="date"
            className="w-full md:w-auto px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />

          <input
            type="date"
            className="w-full md:w-auto px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        {/* Buttons */}
        <div className="flex space-x-2 w-full md:w-auto justify-center">
          <button className="px-4 py-2 text-blue-600 bg-blue-100 rounded-md focus:outline-none">
            ⟳
          </button>

          <button className="px-4 py-2 text-white bg-blue-600 rounded-md focus:outline-none">
            + Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderToolbar;

