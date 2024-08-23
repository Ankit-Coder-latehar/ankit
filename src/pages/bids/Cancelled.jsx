import React from 'react';
import Header from '../../components/Dashboard/Header';
import HeaderToolbar from '../../components/Dashboard/HeaderToolbar';
import TabSection from '../../components/Dashboard/TabSection';
import ContractCard from '../../components/Dashboard/ContractedLane';
import TableHeader from '../../components/Dashboard/TableHeader';
import CancelledCard from '../../components/Dashboard/CancelledCard';
import ResultTableHeader from '../../components/Dashboard/ResultTableHeader';

const Cancelled = () => {

  return (
    <div className='absolute top-0 left-0 w-full h-full m-0 p-0 bg-white'>
      <Header />
      <HeaderToolbar />
      <TabSection  />
      <ResultTableHeader/>
      <CancelledCard/>
    </div>
  );
};

export default Cancelled;
