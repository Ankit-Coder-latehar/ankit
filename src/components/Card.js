import React from 'react';

const Card = ({ data }) => {
  const { 
    loading_city, loading_state, loading_address, loading_pincode,
    unloading_city, unloading_state, unloading_address, unloading_pincode,
    route_distance, vehicle_type, vehicle_size, body_type, quantity, 
    is_cng, material_type, material_weight, loading_date, loading_time,
    expiry_date, expiry_time, target_price, bidNo 
  } = data;

  return (
    <div className="card bg-white shadow-md rounded-lg p-4 mb-4">
      <h2 className="text-xl font-semibold mb-2">Bid No: {bidNo}</h2>
      <div className="flex flex-col space-y-2">
        <div>
          <h3 className="font-semibold">Loading Details</h3>
          <p><strong>City:</strong> {loading_city}</p>
          <p><strong>State:</strong> {loading_state}</p>
          <p><strong>Address:</strong> {loading_address}</p>
          <p><strong>Pincode:</strong> {loading_pincode}</p>
          <p><strong>Date:</strong> {new Date(loading_date).toLocaleDateString()}</p>
          <p><strong>Time:</strong> {loading_time}</p>
        </div>
        <div>
          <h3 className="font-semibold">Unloading Details</h3>
          <p><strong>City:</strong> {unloading_city}</p>
          <p><strong>State:</strong> {unloading_state}</p>
          <p><strong>Address:</strong> {unloading_address}</p>
          <p><strong>Pincode:</strong> {unloading_pincode}</p>
          <p><strong>Expiry Date:</strong> {new Date(expiry_date).toLocaleDateString()}</p>
          <p><strong>Expiry Time:</strong> {expiry_time}</p>
        </div>
        <div>
          <h3 className="font-semibold">Vehicle Details</h3>
          <p><strong>Type:</strong> {vehicle_type}</p>
          <p><strong>Size:</strong> {vehicle_size}</p>
          <p><strong>Body Type:</strong> {body_type}</p>
          <p><strong>Quantity:</strong> {quantity}</p>
          <p><strong>Is CNG:</strong> {is_cng ? 'Yes' : 'No'}</p>
        </div>
        <div>
          <h3 className="font-semibold">Material Details</h3>
          <p><strong>Type:</strong> {material_type}</p>
          <p><strong>Weight:</strong> {material_weight} kg</p>
        </div>
        <div>
          <h3 className="font-semibold">Additional Details</h3>
          <p><strong>Route Distance:</strong> {route_distance} km</p>
          <p><strong>Target Price:</strong> ₹{target_price}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
