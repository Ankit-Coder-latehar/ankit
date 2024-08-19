import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Loads from './pages/Loads';
import ContractedLane from './components/ContractedLane';
import SalesOrder from './pages/SalesOrder';
import PurchaseOrder from './pages/PurchaseOrder ';
import Trips from './pages/Trips ';
import Profile from './pages/Profile';
import HeaderToolbar from './components/HeaderToolbar';
import TabSection from './components/TabSection';
import TableHeader from './components/TableHeader';
import ContractCard from './components/ContractedLane';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <HeaderToolbar/>
        <TabSection/>
        {/* <TableHeader/> */}
        <ContractCard />
        <div className="p-6">
          <Routes>
            <Route path="/loads" element={<Loads />} />
            <Route path="/contracted-lane" element={<ContractedLane />} />
            <Route path="/sales-order" element={<SalesOrder />} />
            <Route path="/purchase-order" element={<PurchaseOrder />} />
            <Route path="/trips" element={<Trips />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

