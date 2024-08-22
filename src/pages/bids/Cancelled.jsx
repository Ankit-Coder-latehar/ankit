import React from 'react';
import Header from '../../components/Dashboard/Header';
import HeaderToolbar from '../../components/Dashboard/HeaderToolbar';
import TabSection from '../../components/Dashboard/TabSection';
import ContractCard from '../../components/Dashboard/ContractedLane';
import TableHeader from '../../components/Dashboard/TableHeader';
import CancelledCard from '../../components/Dashboard/CancelledCard';

const Cancelled = () => {

  return (
    <div className='absolute top-0 left-0 w-full h-full m-0 p-0 bg-white'>
      <Header />
      <HeaderToolbar />
      <TabSection  />
      <TableHeader />
      <CancelledCard/>
    </div>
  );
};

export default Cancelled;
