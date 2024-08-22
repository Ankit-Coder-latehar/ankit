import React, { useState } from 'react';
import { ChevronDownIcon, EnvelopeIcon, PrinterIcon,EyeIcon,CheckIcon, XMarkIcon, PencilIcon } from '@heroicons/react/24/outline';

const QuotesModal = ({ showModal, setShowModal }) => {
    const vendors = [
      { name: 'TargetPrice', rate: 'VendorPrice' },
      { name: 'Rs85000', rate: 'Rs 82,000' },
      { name: 'Rs85000', rate: 'Rs 85,000' },
      { name: 'Rs95000', rate: 'Rs 90,000' }, 
      { name: 'Rs98000', rate: 'Rs 92,000' }, 
    ];
  
    if (!showModal) return null;
  
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
        <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-1/2 p-6 relative">
          <button
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            onClick={() => setShowModal(false)}
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Bid Response</h2>
  
          {/* Vendor list container with max height and scrollbar */}
          <div className="max-h-60 overflow-y-auto space-y-4">
            {vendors.map((vendor, index) => (
              <div key={index} className="flex justify-between items-center p-4 border rounded-md">
                <span className="text-gray-800 font-medium">{vendor.name}</span>
                <span className="text-gray-800">{vendor.rate}</span>
                <div className="space-x-2">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm">Counter Bids</button>
                  <button className="bg-green-500 text-white px-4 py-2 rounded-md text-sm">Call Vendor</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const VehicleInfoModal = ({ showVehicleModal, setShowVehicleModal }) => {
    const vendors = [
      { name: 'Vehicle No.', rate: 'Action' },
      { name: 'JH45R4567', rate: 'Action' },
      { name: 'Gj03R6798', rate: 'Action' },
      { name: 'MH90Y3456', rate: 'Action' }, 
      { name: 'KL56Y7834', rate: 'Action' }, 
    ];
  
    if (!showVehicleModal) return null;
  
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
        <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-1/2 p-6 relative">
          <button
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            onClick={() => setShowVehicleModal(false)}
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Bid Response</h2>
  
          {/* Vendor list container with max height and scrollbar */}
          <div className="max-h-60 overflow-y-auto space-y-4">
            {vendors.map((vendor, index) => (
              <div key={index} className="flex justify-between items-center p-4 border rounded-md">
                <span className="text-gray-800 font-medium">{vendor.name}</span>
                <span className="text-gray-800">{vendor.rate}</span>
                <div className="space-x-2">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm">Saarthi</button>
                  <button className="bg-green-500 text-white px-4 py-2 rounded-md text-sm">Fastag Tracking</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  

  

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
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Assigned Vendors</h2>
        <div className="space-y-4">
          {vendors.map((vendor, index) => (
            <div key={index} className="flex justify-between items-center p-4 border rounded-md">
              <span className="text-gray-800 font-medium">{vendor.name}</span>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  {vendor.viewed ? (
                    <EyeIcon className="h-5 w-5 text-green-500" />
                  ) : (
                    <EyeIcon className="h-5 w-5 text-red-500 line-through" />
                  )}
                  <span>Viewed</span>
                </div>
                <div className="flex items-center space-x-1">
                  {vendor.responded ? (
                    <CheckIcon className="h-5 w-5 text-green-500" />
                  ) : (
                    <CheckIcon className="h-5 w-5 text-red-500 line-through" />
                  )}
                  <span>Responded</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const VendorDetailsModal = ({ showVendorDetailsModal, setShowVendorDetailsModal, vendorDetails }) => {
  if (!showVendorDetailsModal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-1/2 p-6 relative">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={() => setShowVendorDetailsModal(false)}
        >
          <XMarkIcon className="h-6 w-6" />
        </button>
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Vendor Details</h2>

        <div className="overflow-y-auto max-h-96 space-y-2">
          {Object.entries(vendorDetails).map(([key, value], index) => (
            <div key={index} className="flex justify-between items-center p-2 border-b">
              <span className="text-blue-600 font-medium">{key}</span>
              <span className="text-gray-800">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};




const ResultCard = () => {
  const [showModal, setShowModal] = useState(false);
  const [showVendorsModal, setShowVendorsModal] = useState(false);
  const [showVendorDetailsModal, setShowVendorDetailsModal] = useState(false);
  const [showVehicleModal, setShowVehicleModal] = useState(false); 

  const vendorDetails = {
    "Vendor Name": "Qikbuk",
    "Owner Name": "Sunder",
    "Vendor Number": "1234567890",
    "Supervisor Name": "Vinod",
    "Supervisor Number": "9818604556",
    "Pan Number": "EUJPS7582A",
    "GST Number": "038476R7389292",
    "Address": "Test 6",
    "Code": "222223",
  };

  const vendors = [
    { name: 'Vendor 1', viewed: true, responded: true },
    { name: 'Vendor 2', viewed: true, responded: false },
    { name: 'Vendor 3', viewed: false, responded: false },
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
            <span className="block text-grey-600 font-semibold">Qikbuk</span>
            <span className="block text-blue-600 font-semibold">#2345677</span>
            <div className="block text-grey-500 mt-12">Remarks</div>
          </div>

          <div className="col-span-7 md:col-span-1">
            <span className="block font-medium">8th July 2024</span>
            <span className="block">8:00 AM</span>
          </div>

          <div className="col-span-12 md:col-span-2">
            <span className="block font-medium ml-10">Delhi, Plant 1</span>
            <span className="block text-xs text-gray-500 ml-10">(XYZ Warehouse Gurgaon, Haryana 12345)</span>
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
            <div className="text-lg font-semibold text-gray-700"></div>

           <div>
            <span className='ml-4'>Vendor</span>
           <button
              className="text-blue-600 text-sm ml-5"
              onClick={() => setShowVendorDetailsModal(true)}
            >
             (vendor info)
            </button>
            </div> 
            <button onClick={() => setShowModal(true)} className="mt-10 bg-blue-600 text-white px-3 py-1.5 mr-[-10px] text-sm rounded whitespace-nowrap">
            Responses
            </button>

            <div className="absolute top-0 right-[-100px] mt-1 mr-1 flex space-x-2">
              <EnvelopeIcon className="h-5 w-5 text-blue-600" />
              <PrinterIcon className="h-5 w-5 text-blue-600 cursor-pointer" onClick={handleDownload} />
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center mt-2 border-t pt-2 text-sm text-gray-600">
          <span className="block text-xs text-gray-500">Target Price - 70,000 Rs
            
        <span className=" gap-8 text-grey-600 text-sm font-semibold ml-5 px-3 py-1 rounded-lg">
              Assigned Staff(Staff Name, +918778489889)
            </span>
          </span>
          <button onClick={()=>setShowVehicleModal(true)} className="mt-2 bg-blue-600 text-white px-3 py-1.5 mr-[-7px] text-sm rounded whitespace-nowrap">
            Vehicle Info
            </button>
          <div className="mr-15px">Created By - <span className="font-semibold">Rahul Verma</span>
            <span>( 08/08/2024 ,  8:00PM)</span>
          </div>
        </div>
      </div>

      {/* Include the modal */}
      <QuotesModal showModal={showModal} setShowModal={setShowModal} />
      <VendorsModal showVendorsModal={showVendorsModal} setShowVendorsModal={setShowVendorsModal} vendors={vendors} />
      <VendorDetailsModal showVendorDetailsModal={showVendorDetailsModal} setShowVendorDetailsModal={setShowVendorDetailsModal} vendorDetails={vendorDetails} />
      <VehicleInfoModal showVehicleModal={showVehicleModal} setShowVehicleModal={setShowVehicleModal} />
      

    </>
  );
};

export default ResultCard;
