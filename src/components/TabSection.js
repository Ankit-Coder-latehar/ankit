import React, { useState } from 'react';
import { FunnelIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline';

const TabSection = () => {
  const [activeTab, setActiveTab] = useState('Live');
  const [filterVisible, setFilterVisible] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('ID');

  const tabs = [
    { name: 'Live', count: 3 },
    { name: 'Result', count: 0 },
    { name: 'History', count: 4 },
    { name: 'Counter', count: 1 },
    { name: 'Cancelled', count: 0 },
  ];

  const filters = [
    'ID',
    'Loading Date',
    'Loading Point',
    'Unloading Point',
    'Details',
    'Best Quote'
  ];

  const handleFilterSelect = (filter) => {
    setSelectedFilter(filter);
    setFilterVisible(false);
    // Implement the actual filtering logic here
    console.log(`Filtering by: ${filter}`);
  };

  return (
    <div className="relative">
      <div className="flex items-center justify-between px-4 py-2 bg-white border-b">
        <div className="flex space-x-4">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`text-sm font-medium focus:outline-none pb-2 ${
                activeTab === tab.name
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600'
              }`}
            >
              {tab.name} ({tab.count})
            </button>
          ))}
        </div>
        <div className="flex space-x-2">
          <div className="relative">
            <button
              className="text-blue-600 hover:bg-gray-200 p-2 rounded"
              onClick={() => setFilterVisible(!filterVisible)}
            >
              <FunnelIcon className="h-5 w-5" />
            </button>
            {filterVisible && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded shadow-lg">
                <ul className="py-2">
                  {filters.map((filter) => (
                    <li
                      key={filter}
                      onClick={() => handleFilterSelect(filter)}
                      className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 cursor-pointer"
                    >
                      {filter}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <button className="text-blue-600 hover:bg-gray-200 p-2 rounded">
            <ArrowDownTrayIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
      {/* Display the selected filter option */}
      <div className="px-4 py-2 text-sm text-gray-700">
        Current Filter: <span className="font-semibold">{selectedFilter}</span>
      </div>
    </div>
  );
};

export default TabSection;

