import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import ContractDraftingPage from './components/ContractDraftingPage';
import PaymentPage from './components/PaymentPage';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/contract-drafting" element={<ContractDraftingPage />} />
      <Route path="/payment" element={<PaymentPage />} />
    </Routes>
  </Router>
);

export default App;
