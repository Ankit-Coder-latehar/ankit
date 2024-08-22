import React from 'react'
import Header from '../../components/Dashboard/Header'
import HeaderToolbar from '../../components/Dashboard/HeaderToolbar'
import TabSection from '../../components/Dashboard/TabSection'
import ResultTableHeader from '../../components/Dashboard/ResultTableHeader'
import CounterCard from '../../components/Dashboard/CounterCard'
import CounterHeader from '../../components/Dashboard/CounterHeader'

const Counter = () => {
  return (
    <div className=' absolute p-0 m-0 w-full h-full bg-white left-0 top-0'>
      <Header/>
      <HeaderToolbar/>
      <TabSection/>
      <CounterHeader/>
      <CounterCard/>
    </div>
  )
}

export default Counter