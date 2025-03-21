import React, { useState } from 'react';
import { ConsultationForm } from '../components/ConsultationForm';

export function Consultation() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h1 className="text-3xl font-bold mb-6 text-center text-red-600">
              SHOPIFY STORES ABOVE $30K/MONTH
            </h1>
            <div className="space-y-6 text-lg">
              <p className="font-bold text-xl text-center">
                We have taken 3 Brands to 7 figures pr/mo in the last 12 months...
              </p>
              <p className="text-center text-xl">
                ... And I'll Guarantee You That We'll Increase Your MoM Profits Over The Next 30 Days
                (Completely Done-For-You)
              </p>
              <p className="text-center font-bold text-2xl">
                OR YOU DON'T PAY
              </p>
              <p className="text-center">
                Enter your info below and we'll email you a 5-minute video on how this offer works.
              </p>
              <div className="border-t border-b border-red-600 py-4 my-8">
                <p className="text-center text-red-600 font-bold">
                  If you Don't Own A Shopify Store Doing Above $30K/Month DO NOT Request Information
                  AND PLEASE LEAVE THIS PAGE IMMEDIATELY
                </p>
              </div>
              <div className="text-center">
                <button
                  onClick={() => setShowForm(true)}
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Click Here For More Info
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Popup Form */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 relative">
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold mb-6">Request More Information</h2>
            <ConsultationForm onClose={() => setShowForm(false)} />
          </div>
        </div>
      )}
    </div>
  );
}