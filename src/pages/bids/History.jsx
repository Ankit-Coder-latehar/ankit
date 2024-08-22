import React from 'react'
import Header from '../../components/Dashboard/Header'
import HeaderToolbar from '../../components/Dashboard/HeaderToolbar'
import TabSection from '../../components/Dashboard/TabSection'
import ResultTableHeader from '../../components/Dashboard/ResultTableHeader'
import ResultCard from '../../components/Dashboard/ResultCard'

const History = () => {
  return (
    <div className='absolute p-0 w-full h-full left-0 top-0 m-0 bg-white'>
      <Header/>
      <HeaderToolbar/>
      <TabSection/>
      <ResultTableHeader/>
      <ResultCard/>
    </div>
  )
}

export default History