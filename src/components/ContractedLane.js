import React from 'react';
import { ChevronDownIcon, EnvelopeIcon, PrinterIcon } from '@heroicons/react/24/outline';

const TableHeader = () => {
  return (
    <div className="grid grid-cols-12 bg-gray-100 p-2 rounded-t-lg">
      <div className="col-span-2 flex items-center space-x-1">
        <span className="text-sm font-medium text-gray-700">ID</span>
        <ChevronDownIcon className="h-4 w-4 text-gray-500" />
      </div>
      <div className="col-span-2 flex items-center">
        <span className="text-sm font-medium text-gray-700">Loading Date</span>
      </div>
      <div className="col-span-2 flex items-center">
        <span className="text-sm font-medium text-gray-700">Loading Point</span>
      </div>
      <div className="col-span-2 flex items-center">
        <span className="text-sm font-medium text-gray-700">Unloading Point</span>
      </div>
      <div className="col-span-2 flex items-center">
        <span className="text-sm font-medium text-gray-700">Details</span>
      </div>
      <div className="col-span-1 flex items-center justify-center">
        <span className="text-sm font-medium text-gray-700">Best Quote</span>
      </div>
    </div>
  );
};

const ContractCard = () => {
  // Function to download the card data as a text file
  const handleDownload = () => {
    const cardData = `
      ID: #2345677
      Time Remaining: 2d 14hr 45min
      Loading Date: 8th July 2024, 8:00 AM
      Loading Point: Delhi, Plant 1 (XYZ Warehouse Gurgaon, Haryana 12345)
      Unloading Point: Kolkata, West Bengal (XYZ Warehouse Gurgaon, Haryana 12345)
      Vehicle Required: 1
      Vehicle Type: 1
      Equipments: Yes
      Distance: 1500 Km
      Best Quote: Rs 85,000
      Target Price: 70,000 Rs
      Created By: Rahul Verma
    `;

    const blob = new Blob([cardData], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'Contract_Details.txt';
    a.click();

    URL.revokeObjectURL(url);
  };

  return (
    <>
      <TableHeader />
      <div className="bg-blue-50 rounded-b-lg p-4 shadow-sm mt-3 relative">
        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-2">
            <span className="block text-blue-600 font-semibold">#2345677</span>
            <span className="block text-red-600">2d 14hr 45min</span>
          </div>

          <div className="col-span-2">
            <span className="block font-medium">8th July 2024</span>
            <span className="block">8:00 AM</span>
          </div>

          <div className="col-span-2">
            <span className="block font-medium">Delhi, Plant 1</span>
            <span className="block text-xs text-gray-500">(XYZ Warehouse Gurgaon, Haryana 12345)</span>
          </div>

          <div className="col-span-2">
            <span className="block font-medium">Kolkata, West Bengal</span>
            <span className="block text-xs text-gray-500">(XYZ Warehouse Gurgaon, Haryana 12345)</span>
          </div>

          <div className="col-span-2">
            <span className="block">Vehicle Required - 1</span>
            <span className="block">Vehicle Type - 1</span>
            <span className="block">Equipments</span>
            <a href="#" className="text-blue-600">Distance - 1500 Km</a>
          </div>

          <div className="col-span-1 flex flex-col items-center justify-center relative">
            <div className="text-lg font-semibold text-gray-700">Rs 85,000</div>
            <a href="#" className="text-blue-600 text-sm">View all quotes</a>
            {/* Added the "Add Offline Rates" button below "View all quotes" */}
            <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded whitespace-nowrap">
              Add Offline Rates
            </button>
            {/* Positioned icons to the top right */}
            <div className="absolute top-0 right-[-90px] mt-1 mr-1 flex space-x-2">
              <EnvelopeIcon className="h-5 w-5 text-blue-600" />
              <PrinterIcon className="h-5 w-5 text-blue-600 cursor-pointer" onClick={handleDownload} />
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center mt-4 border-t pt-2 text-sm text-gray-600">
          <span className="block text-xs text-gray-500">Target Price - 70,000 Rs</span>
          <div>Created By - <span className="font-semibold">Rahul Verma</span></div>
        </div>
      </div>


      <div className="bg-blue-50 rounded-b-lg p-4 shadow-sm mt-3 relative">
        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-2">
            <span className="block text-blue-600 font-semibold">#2345677</span>
            <span className="block text-red-600">2d 14hr 45min</span>
          </div>

          <div className="col-span-2">
            <span className="block font-medium">8th July 2024</span>
            <span className="block">8:00 AM</span>
          </div>

          <div className="col-span-2">
            <span className="block font-medium">Delhi, Plant 1</span>
            <span className="block text-xs text-gray-500">(XYZ Warehouse Gurgaon, Haryana 12345)</span>
          </div>

          <div className="col-span-2">
            <span className="block font-medium">Kolkata, West Bengal</span>
            <span className="block text-xs text-gray-500">(XYZ Warehouse Gurgaon, Haryana 12345)</span>
          </div>

          <div className="col-span-2">
            <span className="block">Vehicle Required - 1</span>
            <span className="block">Vehicle Type - 1</span>
            <span className="block">Equipments</span>
            <a href="#" className="text-blue-600">Distance - 1500 Km</a>
          </div>

          <div className="col-span-1 flex flex-col items-center justify-center relative">
            <div className="text-lg font-semibold text-gray-700">Rs 85,000</div>
            <a href="#" className="text-blue-600 text-sm">View all quotes</a>
            {/* Added the "Add Offline Rates" button below "View all quotes" */}
            <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded whitespace-nowrap">
              Add Offline Rates
            </button>
            {/* Positioned icons to the top right */}
            <div className="absolute top-0 right-[-90px] mt-1 mr-1 flex space-x-2">
              <EnvelopeIcon className="h-5 w-5 text-blue-600" />
              <PrinterIcon className="h-5 w-5 text-blue-600 cursor-pointer" onClick={handleDownload} />
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center mt-4 border-t pt-2 text-sm text-gray-600">
          <span className="block text-xs text-gray-500">Target Price - 70,000 Rs</span>
          <div>Created By - <span className="font-semibold">Rahul Verma</span></div>
        </div>
      </div>

      <div className="bg-blue-50 rounded-b-lg p-4 shadow-sm mt-3 relative">
        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-2">
            <span className="block text-blue-600 font-semibold">#2345677</span>
            <span className="block text-red-600">2d 14hr 45min</span>
          </div>

          <div className="col-span-2">
            <span className="block font-medium">8th July 2024</span>
            <span className="block">8:00 AM</span>
          </div>

          <div className="col-span-2">
            <span className="block font-medium">Delhi, Plant 1</span>
            <span className="block text-xs text-gray-500">(XYZ Warehouse Gurgaon, Haryana 12345)</span>
          </div>

          <div className="col-span-2">
            <span className="block font-medium">Kolkata, West Bengal</span>
            <span className="block text-xs text-gray-500">(XYZ Warehouse Gurgaon, Haryana 12345)</span>
          </div>

          <div className="col-span-2">
            <span className="block">Vehicle Required - 1</span>
            <span className="block">Vehicle Type - 1</span>
            <span className="block">Equipments</span>
            <a href="#" className="text-blue-600">Distance - 1500 Km</a>
          </div>

          <div className="col-span-1 flex flex-col items-center justify-center relative">
            <div className="text-lg font-semibold text-gray-700">Rs 85,000</div>
            <a href="#" className="text-blue-600 text-sm">View all quotes</a>
            {/* Added the "Add Offline Rates" button below "View all quotes" */}
            <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded whitespace-nowrap">
              Add Offline Rates
            </button>
            {/* Positioned icons to the top right */}
            <div className="absolute top-0 right-[-90px] mt-1 mr-1 flex space-x-2">
              <EnvelopeIcon className="h-5 w-5 text-blue-600" />
              <PrinterIcon className="h-5 w-5 text-blue-600 cursor-pointer" onClick={handleDownload} />
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center mt-4 border-t pt-2 text-sm text-gray-600">
          <span className="block text-xs text-gray-500 font-semibold">Target Price - 70,000 Rs</span>
          <div>Created By - <span className="font-semibold">Rahul Verma</span></div>
        </div>
      </div>
    </>
  );
};

export default ContractCard;
