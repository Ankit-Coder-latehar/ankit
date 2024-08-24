import React, { useState } from 'react';
import { ChevronDownIcon, EnvelopeIcon, PrinterIcon,EyeIcon,CheckIcon, XMarkIcon, PencilIcon } from '@heroicons/react/24/outline';


// Modal Component
const QuotesModal = ({ showModal, setShowModal }) => {
  const vendors = [
    {
      name: 'Vendor A',
      viewed: true,
      responded: true,
    },
    {
      name: 'Vendor B',
      viewed: true,
      responded: false,
    },
    {
      name: 'Vendor C',
      viewed: false,
      responded: true,
    },
    {
      name: 'Vendor D',
      viewed: false,
      responded: false,
    },
    {
      name: 'Vendor E',
      viewed: true,
      responded: true,
    },
  ];

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-3/4 p-6 relative">
        
        <div className="bg-blue-700 text-white p-4 rounded-t-lg flex items-center justify-between">
          <h2 className="text-lg">#7102687</h2>
          <button
          onClick={() => setShowModal(false)}
        >
       <XMarkIcon className="h-6 w-6" />
        </button>
        </div>
        <div className="border-b p-4">
          <div className="flex justify-between text-gray-600">
            <div>
              <p className="text-sm font-medium">ID</p>
              <p className="text-sm">7102687</p>
            </div>
            <div>
              <p className="text-sm font-medium">Date</p>
              <p className="text-sm">5th Jul 8:00 AM</p>
            </div>
            <div>
              <p className="text-sm font-medium">Loading</p>
              <p className="text-sm">● Plant 1</p>
            </div>
            <div>
              <p className="text-sm font-medium">Unloading</p>
              <p className="text-sm">● Customer 11, Mumbai(CU...)</p>
            </div>
            <div>
              <p className="text-sm font-medium">Details</p>
              <p className="text-sm">Vehicle Required: 1<br/>Vehicle Type: 1<br/>Qty/Vehicle: 15 MT</p>
            </div>
            <div>
              <p className="text-sm font-medium">Target Price</p>
              <p className="text-sm text-red-500">Rs 85000</p>
            </div>
          </div>
        </div>
        {/* Replacing the Quote history with Vendor Information */}
        <div className="p-4">
          <h3 className="text-gray-800 font-medium mb-2">Vendor Information</h3>
          <div className="space-y-2">
            <div className="flex justify-between text-gray-600">
              <p className="text-sm font-medium">Vendor Name</p>
              <p className="text-sm font-medium">Viewed</p>
              <p className="text-sm font-medium">Responded</p>
              <div className="w-40"></div> {/* Placeholder for buttons alignment */}
            </div>
            {vendors.map((vendor, index) => (
              <div key={index} className="flex justify-between items-center text-gray-600 p-2 border-b">
                <p className="font-medium">{vendor.name}</p>
                <p className="text-sm">
                  <span className={vendor.viewed ? "text-green-500" : "text-red-500"}>{vendor.viewed ?  <EyeIcon className="h-5 w-5 text-green-500" /> : <EyeIcon className="h-5 w-5 text-red-500 line-through" />}</span>
                </p>
                <p className="text-sm">
                  <span className={vendor.responded ? "text-green-500" : "text-red-500"}>{vendor.responded ? <CheckIcon className="h-5 w-5 text-green-500" /> :<CheckIcon className="h-5 w-5 text-red-500 line-through" /> }</span>
                </p>
                <div className="flex space-x-2">
                  <button className="bg-blue-500 text-white px-4 py-1 rounded">
                    Counter
                  </button>
                  <button className="bg-green-500 text-white px-4 py-1 rounded">
                    Assign
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Modal Component for Assigned Vendors
const VendorsModal = ({ showVendorsModal, setShowVendorsModal, vendors }) => {
  if (!showVendorsModal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
    <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-1/2 p-6 relative">
      <button
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        onClick={() => setShowVendorsModal(false)}
      >
        <XMarkIcon className="h-6 w-6" />
      </button>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800 flex-1">Assigned Vendors</h2>
        <h2 className="text-xl font-semibold text-gray-800 flex-1 text-center">Viewed</h2>
        <h2 className="text-xl font-semibold text-gray-800 flex-1 text-right">Response</h2>
      </div>
  
      <div className="max-h-60 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
        {vendors.map((vendor, index) => (
          <div key={index} className="flex justify-between items-center p-4 border rounded-md">
            <span className="text-gray-800 font-medium flex-1">{vendor.name}</span>
            <div className="flex items-center space-x-4 flex-1 justify-center">
              <div className="flex items-center space-x-1">
                {vendor.viewed ? (
                  <EyeIcon className="h-5 w-5 text-green-500" />
                ) : (
                  <EyeIcon className="h-5 w-5 text-red-500" />
                )}
              </div>
            </div>
            <div className="flex items-center space-x-1 flex-1 justify-end">
              {vendor.responded ? (
                <CheckIcon className="h-5 w-5 text-green-500" />
              ) : (
                <XMarkIcon className="h-5 w-5 text-red-500" />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  
  

  );
};


const ContractCard = () => {
  const [showModal, setShowModal] = useState(false);
  const [showVendorsModal, setShowVendorsModal] = useState(false);

  const vendors = [
    { name: 'Vendor 1', viewed: true, responded: true },
    { name: 'Vendor 2', viewed: true, responded: false },
    { name: 'Vendor 3', viewed: false, responded: false },
    { name: 'Vendor 4', viewed: true, responded: true },
    { name: 'Vendor 5', viewed: true, responded: true },

  ];

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
    

      <div className="md:hidden bg-blue-50 rounded-b-lg p-4 shadow-sm mt-3 relative border border-gray-300 rounded-lg mx-4">
        <div className="grid grid-cols-12 gap-2">
         
        </div>
      </div>

      <div className="hidden md:block bg-blue-50 rounded-b-lg p-4 shadow-sm mt-3 relative">
        <div className="grid grid-cols-12 gap-3 md:gap-4">
          <div className="col-span-12 md:col-span-1">
          <span className="block text-black font-semibold">Qiktrack</span>
            <span className="block text-blue-600 font-semibold">#2345677</span>
            <span className="block text-red-600">2d 14hr 45min</span>
            <div className="block text-grey-500 mt-12">Remarks</div>
          </div>

          <div className="col-span-6 md:col-span-2">
            <span className="block font-medium ml-6">8th July 2024</span>
            <span className="block ml-6">8:00 AM</span>
          </div>

          <div className="col-span-12 md:col-span-2">
            <span className="block font-medium ml-4">Delhi, Plant 1</span>
            <span className="block text-xs text-gray-500 ml-4">(XYZ Warehouse Gurgaon, Haryana 12345)</span>
          </div>

          <div className="col-span-12 md:col-span-2">
            <span className="block font-medium">Kolkata, West Bengal</span>
            <span className="block text-xs text-gray-500">(XYZ Warehouse Gurgaon, Haryana 12345)</span>
          </div>

          <div className="col-span-12 md:col-span-2 ml-9">
            <span className="block">Vehicle Required - 1</span>
            <span className="block">Vehicle Type - 1</span>
            <span className="block">Equipments</span>
            <a href="#" className="text-blue-600">Distance - 1500 Km</a>
          </div>

          <div className="col-span-12 md:col-span-2 flex flex-col items-center justify-center relative ml-9">
            <div className="text-lg font-semibold text-gray-700 mr-5 mt-[-40px]">Rs 85,000</div>
            <button
              className="text-blue-600 text-sm mr-[-4px]"
              onClick={() => setShowModal(true)}
            >
              View all quotes
            </button>
    

            <div className="absolute top-0 right-[-100px] mt-1 mr-1 flex space-x-2">
              <EnvelopeIcon className="h-5 w-5 text-blue-600" />
              <PrinterIcon className="h-5 w-5 text-blue-600 cursor-pointer" onClick={handleDownload} />
              <PencilIcon className="h-5 w-5 text-blue-600 cursor-pointer" />
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center mt-2 border-t pt-2 text-sm text-gray-600">
          <span className="block text-xs text-gray-500">Target Price - 70,000 Rs
            
        <span className=" gap-8 text-grey-600 text-sm font-semibold ml-5 px-3 py-1 rounded-lg">
              Assigned Staff(Staff Name, +918778489889)
            </span>
          </span>
          <div className="mr-15px">Created By - <span className="font-semibold">Rahul Verma</span>
            <span>( 08/08/2024 ,  8:00PM)</span>
          </div>
        </div>
      </div>

     
      <QuotesModal showModal={showModal} setShowModal={setShowModal} />
      <VendorsModal showVendorsModal={showVendorsModal} setShowVendorsModal={setShowVendorsModal} vendors={vendors} />

    </>
  );
};

export default ContractCard;
