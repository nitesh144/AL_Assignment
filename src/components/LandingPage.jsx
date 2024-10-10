import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const LandingPage = () => {
  const navigate = useNavigate();
  const [showServiceDescription, setShowServiceDescription] = useState(false);

  const handleServicesClick = () => {
    setShowServiceDescription(true); // Show service description instead of the form
  };

  const handleStartDraftingClick = () => {
    navigate('/contract-drafting'); // Navigate to the Contract Drafting Form page
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar onServicesClick={handleServicesClick} />
      <div className="container mx-auto p-4">
        {!showServiceDescription ? (
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Welcome to Apply Legal</h1>
            <p className="mb-4">Offering professional contract drafting and legal services.</p>
          </div>
        ) : (
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Our Services</h1>
            <p className="mb-4">We provide comprehensive legal solutions, including contract drafting, review, and more.</p>
            <button
              onClick={handleStartDraftingClick}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Start Contract Drafting
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LandingPage;
