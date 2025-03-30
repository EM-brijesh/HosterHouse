import React from 'react';
import Navbar from '../Components/Navbar';

const Privacy = () => {
  return (
    <>
      <Navbar />

      <div className="bg-black min-h-screen px-6 py-12 text-white flex flex-col items-center justify-center">
        <h1 className="text-4xl sm:text-6xl font-extrabold text-center animate__animated animate__fadeIn animate__delay-1s">
          Privacy Policy & Terms of Service
        </h1>

        <p className="text-gray-300 text-lg text-center mt-4 max-w-2xl animate__animated animate__fadeIn animate__delay-2s">
          At ClubHouse, your privacy and security are our top priorities. This document outlines our practices regarding the collection, use, and protection of your personal information, as well as the terms that govern your use of our platform.
        </p>

        <div className="mt-8 w-full max-w-3xl animate__animated animate__fadeIn animate__delay-3s">
          <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
          <p className="text-gray-300 mb-4">
            We may collect personal information such as your name, email address, and event preferences when you register or participate in events.
          </p>

          <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
          <p className="text-gray-300 mb-4">
            Your data helps us improve your experience, manage events, and connect you with like-minded individuals in our community.
          </p>

          <h2 className="text-2xl font-bold mb-4">3. Data Security</h2>
          <p className="text-gray-300 mb-4">
            We employ industry-standard security measures to protect your personal information from unauthorized access and disclosure.
          </p>

          <h2 className="text-2xl font-bold mb-4">4. Your Rights</h2>
          <p className="text-gray-300 mb-4">
            You have the right to access, update, or delete your personal data. For any inquiries, please contact our support team.
          </p>

          <h2 className="text-2xl font-bold mb-4">5. Terms of Use</h2>
          <p className="text-gray-300 mb-4">
            By using ClubHouse, you agree to our terms of service, including our community guidelines, event policies, and data handling practices.
          </p>
        </div>

        <div className="mt-12 text-center text-gray-400 text-sm animate__animated animate__fadeIn animate__delay-4s">
          <p>
            If you have any questions about our Privacy Policy or Terms of Service, please contact us at support@clubhouse.com.
          </p>
        </div>
      </div>
    </>
  );
};

export default Privacy;
