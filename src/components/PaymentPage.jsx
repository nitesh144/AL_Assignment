import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com';
import toast from 'react-hot-toast';

const PaymentPage = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handlePayment = () => {
    // Use EmailJS or another email service to send email
    emailjs.send('service_2lfujmg', 'template_2smmwah', {
      to_name: 'Admin',
      message: 'A new contract drafting request has been submitted.',
      to_email: 'nk479760@gmail.com',
    }, 'd__W5e_ncX7Qc-uUr')
    .then(() => {
      toast("Payment processed and email sent to the admin.");
      setShowModal(true); // Show the success modal after payment
    })
    .catch((error) => {
      toast("Email sending failed:", error);
    });
  };

  const handleCloseModal = () => {
    setShowModal(false);
    navigate('/'); // Navigate back to the home page
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-2xl font-bold mb-4">Payment Gateway</h2>
        <p className="mb-4">Please complete your payment to proceed.</p>
        <button
          onClick={handlePayment}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Process Payment
        </button>
      </div>

      {/* Modal Popup */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-4 text-green-600">Payment Successful</h2>
            <p className="mb-4">Your payment has been successfully completed.</p>
            <button
              onClick={handleCloseModal}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentPage;
