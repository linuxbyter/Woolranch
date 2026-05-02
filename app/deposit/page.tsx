'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function DepositPage() {
  const router = useRouter();
  const [amount, setAmount] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [selectedMethod, setSelectedMethod] = useState<string>('intasend');

  const handleDeposit = async () => {
    if (!amount || parseFloat(amount) < 100) {
      setMessage({ type: 'error', text: 'Minimum deposit is KES 100' });
      return;
    }

    if (selectedMethod === 'intasend' && !phone) {
      setMessage({ type: 'error', text: 'Please enter your phone number' });
      return;
    }

    setLoading(true);
    setMessage(null);

    try {
      const response = await axios.post('/api/deposits', {
        amount: parseFloat(amount),
        phone: selectedMethod === 'intasend' ? phone : undefined,
        paymentMethod: selectedMethod,
      });

      if (response.data.success) {
        setMessage({ type: 'success', text: response.data.message || 'Deposit initiated successfully!' });
        
        // If it's a manual deposit, maybe you want to give them more time to read the instructions
        const delay = selectedMethod === 'manual' ? 5000 : 2000;
        setTimeout(() => router.push('/dashboard'), delay);
      } else {
        setMessage({ type: 'error', text: response.data.message || 'Deposit failed' });
      }
    } catch (error: any) {
      setMessage({ 
        type: 'error', 
        text: error.response?.data?.message || 'Something went wrong. Please try again.' 
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-900 to-green-800 p-4">
      <div className="max-w-md mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Deposit Funds</h1>
            <button 
              onClick={() => router.push('/dashboard')}
              className="text-sm text-gray-500 hover:text-gray-800"
            >
              Cancel
            </button>
          </div>

          <div className="space-y-4">
            {/* Payment Method Selector */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Payment Method
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedMethod('intasend')}
                  className={`p-4 rounded-xl border-2 transition-all flex flex-col items-start ${
                    selectedMethod === 'intasend'
                      ? 'border-green-500 bg-green-50'
                      : 'border-gray-200 hover:border-green-300'
                  }`}
                >
                  <div className="font-semibold text-gray-800">MPesa</div>
                  <div className="text-xs text-gray-500">STK Push (Auto)</div>
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedMethod('manual')}
                  className={`p-4 rounded-xl border-2 transition-all flex flex-col items-start ${
                    selectedMethod === 'manual'
                      ? 'border-green-500 bg-green-50'
                      : 'border-gray-200 hover:border-green-300'
                  }`}
                >
                  <div className="font-semibold text-gray-800">Manual</div>
                  <div className="text-xs text-gray-500">Bank Transfer</div>
                </button>
              </div>
            </div>

            {/* Amount Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Amount (KES)
              </label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount (min KES 100)"
                min="100"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all text-gray-800"
              />
            </div>

            {/* Conditional Input based on Selected Method */}
            {selectedMethod === 'intasend' ? (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  MPesa Phone Number
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. 07XXXXXXXX or 254XXXXXXXX"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all text-gray-800"
                />
                <p className="text-xs text-gray-500 mt-1">
                  You will receive an STK push directly on this phone number.
                </p>
              </div>
            ) : (
              <div className="p-4 bg-blue-50 border border-blue-100 rounded-xl space-y-2">
                <h4 className="font-semibold text-blue-900 text-sm">How to deposit via Bank Transfer:</h4>
                <p className="text-xs text-blue-800">
                  1. Make a transfer of the exact amount above to:
                </p>
                <div className="bg-white p-3 rounded-lg border border-blue-200 text-sm space-y-1 my-2">
                  <p><span className="text-gray-500 text-xs">Bank:</span> <span className="font-medium text-gray-800">Your Bank Name</span></p>
                  <p><span className="text-gray-500 text-xs">Account No:</span> <span className="font-medium text-gray-800">1234 5678 9012</span></p>
                  <p><span className="text-gray-500 text-xs">Account Name:</span> <span className="font-medium text-gray-800">Wool Ranch Limited</span></p>
                </div>
                <p className="text-xs text-blue-800">
                  2. Once transferred, click the button below to log your manual deposit request. Admin will approve it shortly!
                </p>
              </div>
            )}

            {message && (
              <div
                className={`p-4 rounded-xl text-sm font-medium ${
                  message.type === 'success'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800'
                }`}
              >
                {message.text}
              </div>
            )}

            <button
              onClick={handleDeposit}
              disabled={loading}
              className={`w-full py-4 rounded-xl font-semibold text-white transition-all shadow-md ${
                loading
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-green-600 hover:bg-green-700 active:scale-95'
              }`}
            >
              {loading ? 'Processing...' : selectedMethod === 'manual' ? 'I Have Paid' : 'Deposit Now'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
