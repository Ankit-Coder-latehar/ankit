import React from 'react';
import Header from '../../components/Dashboard/Header';
import HeaderToolbar from '../../components/Dashboard/HeaderToolbar';
import TabSection from '../../components/Dashboard/TabSection';
import ResultCard from '../../components/Dashboard/ResultCard';
import ResultTableHeader from '../../components/Dashboard/ResultTableHeader';

const Result = () => {
  return (
    <div className='absolute left-0 top-0 m-0 p-0  w-full h-full bg-white'>
     <Header/>
     <HeaderToolbar/>
     <TabSection/>
     <ResultTableHeader/>
     <ResultCard/>
    </div>
  )
}

export default Result