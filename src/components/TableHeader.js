import React from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const TableHeader = () => {
  return (
    <div className="flex items-center justify-between  px-2 py-2 bg-gray-100 rounded-t-lg">
      <div className="flex items-center space-x-1 mr-6">
        <span className="text-sm font-medium text-gray-700">ID</span>
        <ChevronDownIcon className="h-4 w-4 text-gray-500" />
        <span className="text-sm font-medium text-gray-700 mr-6 px-40">Loading Date</span>
        <span className="text-sm font-medium text-gray-700 mr-6">Loading Point</span>
      <span className="text-sm font-medium text-gray-700 mr-6 px-40">Unloading Point</span>
      <span className="text-sm font-medium text-gray-700 mr-6">Details</span>
      <span className="text-sm font-medium text-gray-700 px-40">Best Quote</span>
      </div>
      
     
    </div>
  );
};

export default TableHeader;

