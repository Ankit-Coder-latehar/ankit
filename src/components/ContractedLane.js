import React from 'react';
import { ChevronDownIcon, EnvelopeIcon, PrinterIcon } from '@heroicons/react/24/outline';

const TableHeader = () => {
  return (
    <div className="hidden md:grid grid-cols-12 bg-gray-100 p-2 rounded-t-lg">
      <div className="col-span-1 flex items-center space-x-1">
        <span className="text-sm font-medium text-gray-700">ID</span>
        <ChevronDownIcon className="h-4 w-4 text-gray-500" />
      </div>
      <div className="col-span-1 flex items-center">
        <span className="text-sm right-font-medium text-gray-700 font-semibold">Loading Date</span>
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
      {/* Table header visible on desktop and hidden on mobile */}
      <TableHeader />

      {/* Mobile view */}
      <div className="bg-blue-50 rounded-b-lg p-4 shadow-sm mt-3 relative md:hidden border border-gray-300 rounded-lg mx-4">
        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-12">
            <div className="flex justify-between bg-blue-800 rounded-t-lg p-2">
              <div>
                <div className="text-xs text-white">Id: #2345677</div>
                <div className="text-xs text-white">2d 14hr 45min</div>
              </div>
              <div>
                <div className="text-xs text-white">Loading Date: 08/08/2024, 8:30 pm</div>
                <div className="text-xs text-white">Loading Time: 08/08/2024, 8:00 pm</div>
              </div>
            </div>
          </div>

          <div className="col-span-12">
            <div className="flex items-center space-x-2">
              <span className="text-green-600">●</span>
              <span className="text-sm font-medium text-gray-700">Delhi, Plant 1</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-red-600">📍</span>
              <span className="text-sm font-medium text-blue-700">Kolkata, West Bengal</span>
            </div>
            <div className="text-sm text-blue-500">Vehicle: Truck 20FT/1109 9MT (Close Body)</div>
            <div className="text-sm text-gray-500">Distance: 1500 Km</div>
          </div>

          <div className="col-span-12 mt-2">
            <div className="text-xs text-gray-600">Qikbuk</div>
            <div className="text-sm font-semibold">Price: 75000</div>
            <div className="text-sm text-green-500">Target: 70000</div>
          </div>
          
          <div className="col-span-12 flex justify-between items-center mt-2">
            <div className="bg-blue-500 text-white text-sm font-semibold px-3 py-1 rounded-lg">
              Bid Assigned
            </div>
            <button className="bg-blue-700 text-white text-sm px-4 py-2 rounded">
              Add Offline Rates
            </button>
          </div>

          <div className="col-span-12 flex justify-between mt-4">
            <button className="text-blue-600 text-sm">Created by-: Rahul Verma ( 08/08/2024 ,  8:00PM)</button>
          </div>
        </div>
      </div>

      {/* Desktop view */}
      <div className="hidden md:block bg-blue-50 rounded-b-lg p-4 shadow-sm mt-3 relative">
        <div className="grid grid-cols-12 gap-3 md:gap-4">
          <div className="col-span-12 md:col-span-1">
            <span className="block text-blue-600 font-semibold">#2345677</span>
            <span className="block text-red-600">2d 14hr 45min</span>
          </div>

          <div className="col-span-7 md:col-span-1">
            <span className="block font-medium">8th July 2024</span>
            <span className="block">8:00 AM</span>
          </div>

          <div className="col-span-12 md:col-span-2">
            <span className="block font-medium">Delhi, Plant 1</span>
            <span className="block text-xs text-gray-500">(XYZ Warehouse Gurgaon, Haryana 12345)</span>
          </div>

          <div className="col-span-12 md:col-span-2">
            <span className="block font-medium">Kolkata, West Bengal</span>
            <span className="block text-xs text-gray-500">(XYZ Warehouse Gurgaon, Haryana 12345)</span>
          </div>

          <div className="col-span-12 md:col-span-2">
            <span className="block">Vehicle Required - 1</span>
            <span className="block">Vehicle Type - 1</span>
            <span className="block">Equipments</span>
            <a href="#" className="text-blue-600">Distance - 1500 Km</a>
          </div>

          <div className="col-span-12 md:col-span-1 flex flex-col items-center justify-center relative">
            <div className="text-lg font-semibold text-gray-700">Rs 85,000</div>
            <a href="#" className="text-blue-600 text-sm mr-[-14px]">View all quotes</a>
            <button className="mt-2 bg-blue-600 text-white px-3 py-1.5 mr-[-40px] text-sm rounded whitespace-nowrap">
              Add Offline Rates
            </button>

            <div className="absolute top-0 right-[-80px] mt-1 mr-1 flex space-x-2">
              <EnvelopeIcon className="h-5 w-5 text-blue-600" />
              <PrinterIcon className="h-5 w-5 text-blue-600 cursor-pointer" onClick={handleDownload} />
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center mt-4 border-t pt-2 text-sm text-gray-600">
          <span className="block text-xs text-gray-500">Target Price - 70,000 Rs</span>
          <div className="mr-15px">Created By - <span className="font-semibold">Rahul Verma</span>
            <span>( 08/08/2024 ,  8:00PM)</span>
          </div>
        </div>
      </div>

      {/* Repeat the structure for other cards */}
      <div className="bg-blue-50 rounded-b-lg p-4 shadow-sm mt-3 relative md:hidden border border-gray-300 rounded-lg mx-4">
        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-12">
            <div className="flex justify-between bg-blue-800 rounded-t-lg p-2">
              <div>
                <div className="text-xs text-white">Id: #2345677</div>
                <div className="text-xs text-white">2d 14hr 45min</div>
              </div>
              <div>
                <div className="text-xs text-white">Loading Date: 08/08/2024, 8:30 pm</div>
                <div className="text-xs text-white">Loading Time: 08/08/2024, 8:00 pm</div>
              </div>
            </div>
          </div>

          <div className="col-span-12">
            <div className="flex items-center space-x-2">
              <span className="text-green-600">●</span>
              <span className="text-sm font-medium text-gray-700">Delhi, Plant 1</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-red-600">📍</span>
              <span className="text-sm font-medium text-blue-700">Kolkata, West Bengal</span>
            </div>
            <div className="text-sm text-blue-500">Vehicle: Truck 20FT/1109 9MT (Close Body)</div>
            <div className="text-sm text-gray-500">Distance: 1500 Km</div>
          </div>

          <div className="col-span-12 mt-2">
            <div className="text-xs text-gray-600">Qikbuk</div>
            <div className="text-sm font-semibold">Price: 75000</div>
            <div className="text-sm text-green-500">Target: 70000</div>
          </div>
          
          <div className="col-span-12 flex justify-between items-center mt-2">
            <div className="bg-blue-500 text-white text-sm font-semibold px-3 py-1 rounded-lg">
              Bid Assigned
            </div>
            <button className="bg-blue-700 text-white text-sm px-4 py-2 rounded">
              Add Offline Rates
            </button>
          </div>

          <div className="col-span-12 flex justify-between mt-4">
            <button className="text-blue-600 text-sm">Created by-: Rahul Verma ( 08/08/2024 ,  8:00PM)</button>
          </div>
        </div>
      </div>

      {/* Desktop view */}
      <div className="hidden md:block bg-blue-50 rounded-b-lg p-4 shadow-sm mt-3 relative">
        <div className="grid grid-cols-12 gap-3 md:gap-4">
          <div className="col-span-12 md:col-span-1">
            <span className="block text-blue-600 font-semibold">#2345677</span>
            <span className="block text-red-600">2d 14hr 45min</span>
          </div>

          <div className="col-span-7 md:col-span-1">
            <span className="block font-medium">8th July 2024</span>
            <span className="block">8:00 AM</span>
          </div>

          <div className="col-span-12 md:col-span-2">
            <span className="block font-medium">Delhi, Plant 1</span>
            <span className="block text-xs text-gray-500">(XYZ Warehouse Gurgaon, Haryana 12345)</span>
          </div>

          <div className="col-span-12 md:col-span-2">
            <span className="block font-medium">Kolkata, West Bengal</span>
            <span className="block text-xs text-gray-500">(XYZ Warehouse Gurgaon, Haryana 12345)</span>
          </div>

          <div className="col-span-12 md:col-span-2">
            <span className="block">Vehicle Required - 1</span>
            <span className="block">Vehicle Type - 1</span>
            <span className="block">Equipments</span>
            <a href="#" className="text-blue-600">Distance - 1500 Km</a>
          </div>

          <div className="col-span-12 md:col-span-1 flex flex-col items-center justify-center relative">
            <div className="text-lg font-semibold text-gray-700">Rs 85,000</div>
            <a href="#" className="text-blue-600 text-sm mr-[-14px]">View all quotes</a>
            <button className="mt-2 bg-blue-600 text-white px-3 py-1.5 mr-[-40px] text-sm rounded whitespace-nowrap">
              Add Offline Rates
            </button>

            <div className="absolute top-0 right-[-80px] mt-1 mr-1 flex space-x-2">
              <EnvelopeIcon className="h-5 w-5 text-blue-600" />
              <PrinterIcon className="h-5 w-5 text-blue-600 cursor-pointer" onClick={handleDownload} />
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center mt-4 border-t pt-2 text-sm text-gray-600">
          <span className="block text-xs text-gray-500">Target Price - 70,000 Rs</span>
          <div className="mr-15px">Created By - <span className="font-semibold">Rahul Verma</span>
            <span>( 08/08/2024 ,  8:00PM)</span>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 rounded-b-lg p-4 shadow-sm mt-3 relative md:hidden border border-gray-300 rounded-lg mx-4">
        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-12">
            <div className="flex justify-between bg-blue-800 rounded-t-lg p-2">
              <div>
                <div className="text-xs text-white">Id: #2345677</div>
                <div className="text-xs text-white">2d 14hr 45min</div>
              </div>
              <div>
                <div className="text-xs text-white">Loading Date: 08/08/2024, 8:30 pm</div>
                <div className="text-xs text-white">Loading Time: 08/08/2024, 8:00 pm</div>
              </div>
            </div>
          </div>

          <div className="col-span-12">
            <div className="flex items-center space-x-2">
              <span className="text-green-600">●</span>
              <span className="text-sm font-medium text-gray-700">Delhi, Plant 1</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-red-600">📍</span>
              <span className="text-sm font-medium text-blue-700">Kolkata, West Bengal</span>
            </div>
            <div className="text-sm text-blue-500">Vehicle: Truck 20FT/1109 9MT (Close Body)</div>
            <div className="text-sm text-gray-500">Distance: 1500 Km</div>
          </div>

          <div className="col-span-12 mt-2">
            <div className="text-xs text-gray-600">Qikbuk</div>
            <div className="text-sm font-semibold">Price: 75000</div>
            <div className="text-sm text-green-500">Target: 70000</div>
          </div>
          
          <div className="col-span-12 flex justify-between items-center mt-2">
            <div className="bg-blue-500 text-white text-sm font-semibold px-3 py-1 rounded-lg">
              Bid Assigned
            </div>
            <button className="bg-blue-700 text-white text-sm px-4 py-2 rounded">
              Add Offline Rates
            </button>
          </div>

          <div className="col-span-12 flex justify-between mt-4">
            <button className="text-blue-600 text-sm">Created by-: Rahul Verma ( 08/08/2024 ,  8:00PM)</button>
          </div>
        </div>
      </div>

      {/* Desktop view */}
      <div className="hidden md:block bg-blue-50 rounded-b-lg p-4 shadow-sm mt-3 relative">
        <div className="grid grid-cols-12 gap-3 md:gap-4">
          <div className="col-span-12 md:col-span-1">
            <span className="block text-blue-600 font-semibold">#2345677</span>
            <span className="block text-red-600">2d 14hr 45min</span>
          </div>

          <div className="col-span-7 md:col-span-1">
            <span className="block font-medium">8th July 2024</span>
            <span className="block">8:00 AM</span>
          </div>

          <div className="col-span-12 md:col-span-2">
            <span className="block font-medium">Delhi, Plant 1</span>
            <span className="block text-xs text-gray-500">(XYZ Warehouse Gurgaon, Haryana 12345)</span>
          </div>

          <div className="col-span-12 md:col-span-2">
            <span className="block font-medium">Kolkata, West Bengal</span>
            <span className="block text-xs text-gray-500">(XYZ Warehouse Gurgaon, Haryana 12345)</span>
          </div>

          <div className="col-span-12 md:col-span-2">
            <span className="block">Vehicle Required - 1</span>
            <span className="block">Vehicle Type - 1</span>
            <span className="block">Equipments</span>
            <a href="#" className="text-blue-600">Distance - 1500 Km</a>
          </div>

          <div className="col-span-12 md:col-span-1 flex flex-col items-center justify-center relative">
            <div className="text-lg font-semibold text-gray-700">Rs 85,000</div>
            <a href="#" className="text-blue-600 text-sm mr-[-14px]">View all quotes</a>
            <button className="mt-2 bg-blue-600 text-white px-3 py-1.5 mr-[-40px] text-sm rounded whitespace-nowrap">
              Add Offline Rates
            </button>

            <div className="absolute top-0 right-[-80px] mt-1 mr-1 flex space-x-2">
              <EnvelopeIcon className="h-5 w-5 text-blue-600" />
              <PrinterIcon className="h-5 w-5 text-blue-600 cursor-pointer" onClick={handleDownload} />
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center mt-4 border-t pt-2 text-sm text-gray-600">
          <span className="block text-xs text-gray-500">Target Price - 70,000 Rs</span>
          <div className="mr-15px">Created By - <span className="font-semibold">Rahul Verma</span>
            <span>( 08/08/2024 ,  8:00PM)</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContractCard;
