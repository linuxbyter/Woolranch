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

    if (!phone) {
      setMessage({ type: 'error', text: 'Please enter your phone number' });
      return;
    }

    setLoading(true);
    setMessage(null);

    try {
      const response = await axios.post('/api/deposits', {
        amount: parseFloat(amount),
        phone,
        paymentMethodId: 1,
      });

      if (response.data.success) {
        setMessage({ type: 'success', text: response.data.message });
        setTimeout(() => router.push('/dashboard'), 2000);
      } else {
        setMessage({ type: 'error', text: response.data.message });
      }
    } catch (error: any) {
      setMessage({ type: 'error', text: error.response?.data?.message || 'Deposit failed' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-900 to-green-800 p-4">
      <div className="max-w-md mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">Deposit Funds</h1>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Payment Method
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setSelectedMethod('intasend')}
                  className={`p-4 rounded-xl border-2 transition-all ${
                    selectedMethod === 'intasend'
                      ? 'border-green-500 bg-green-50'
                      : 'border-gray-200 hover:border-green-300'
                  }`}
                >
                  <div className="font-semibold text-gray-800">MPesa</div>
                  <div className="text-xs text-gray-500">STK Push (Auto)</div>
                </button>
                <button
                  onClick={() => setSelectedMethod('manual')}
                  className={`p-4 rounded-xl border-2 transition-all ${
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
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all"
              />
            </div>

            {selectedMethod === 'intasend' && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  MPesa Phone Number
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="07XXXXXXXX or 254XXXXXXXX"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all"
                />
                <p className="text-xs text-gray-500 mt-1">
                  You will receive an STK push on this number
                </p>
              </div>
            )}

            {message && (
              <div
                className={`p-4 rounded-xl ${
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
              className={`w-full py-4 rounded-xl font-semibold text-white transition-all ${
                loading
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-green-600 hover:bg-green-700 active:scale-95'
              }`}
            >
              {loading ? 'Processing...' : 'Deposit Now'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}