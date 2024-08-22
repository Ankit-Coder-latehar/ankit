import React from 'react';
import Header from '../../components/Dashboard/Header';
import HeaderToolbar from '../../components/Dashboard/HeaderToolbar';
import TabSection from '../../components/Dashboard/TabSection';
import ContractCard from '../../components/Dashboard/ContractedLane';
import TableHeader from '../../components/Dashboard/TableHeader';

<<<<<<< HEAD:src/pages/bids/Live.jsx
const Live = () => {
  // Determine the number of ContractCard components to display
  const contractCardCount = 4; // Adjust this count as needed
=======
const History = () => {
  
  const contractCardCount = 4;
>>>>>>> 5524826e61101cc0e5c7e9008e670328f62f0c8e:src/pages/History.jsx

  return (
    <div className='absolute top-0 left-0 w-full h-full m-0 p-0 bg-white'>
      <Header />
      <HeaderToolbar />
      <TabSection contractCardCount={contractCardCount} />
      <TableHeader />
      {Array.from({ length: contractCardCount }).map((_, index) => (
        <ContractCard key={index} />
      ))}
    </div>
  );
};

export default Live;