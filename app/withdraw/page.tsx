'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

interface UserData {
  balance: number;
}

export default function WithdrawPage() {
  const router = useRouter();
  const [user, setUser] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);
  const [amount, setAmount] = useState('');
  const [mpesaNumber, setMpesaNumber] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await axios.get('/api/user');
      if (response.data.success) {
        setUser(response.data.user);
      } else {
        console.warn("No user session found. (Redirect disabled for testing)");
        // router.push('/');
      }
    } catch (error) {
      console.error("Error fetching balance:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleWithdraw = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage({ type: '', text: '' });

    const withdrawAmount = parseFloat(amount);
    if (isNaN(withdrawAmount) || withdrawAmount <= 0) {
      setMessage({ type: 'error', text: 'Please enter a valid amount.' });
      return;
    }

    if (user && withdrawAmount > user.balance) {
      setMessage({ type: 'error', text: 'Insufficient balance available.' });
      return;
    }

    if (!mpesaNumber.startsWith('07') && !mpesaNumber.startsWith('01') && !mpesaNumber.startsWith('254')) {
      setMessage({ type: 'error', text: 'Please enter a valid M-Pesa number.' });
      return;
    }

    try {
      setSubmitting(true);
      const response = await axios.post('/api/withdraw', {
        amount: withdrawAmount,
        phone: mpesaNumber,
      });

      if (response.data.success) {
        setMessage({ type: 'success', text: 'Withdrawal request submitted successfully!' });
        setAmount('');
        // Refresh balance
        fetchUserData();
      } else {
        setMessage({ type: 'error', text: response.data.message || 'Withdrawal failed.' });
      }
    } catch (error: any) {
      setMessage({
        type: 'error',
        text: error.response?.data?.message || 'Something went wrong. Please try again.',
      });
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-800 text-white p-4">
        <div className="max-w-md mx-auto flex justify-between items-center">
          <button onClick={() => router.push('/dashboard')} className="text-sm bg-blue-700 hover:bg-blue-600 px-3 py-1 rounded">
            ← Back
          </button>
          <h1 className="text-xl font-bold">Withdraw Funds</h1>
          <div className="w-12"></div> {/* Spacer for alignment */}
        </div>
      </header>

      <main className="max-w-md mx-auto p-4">
        {/* Balance Display */}
        <div className="bg-white rounded-xl p-6 mb-6 shadow-sm border border-gray-100">
          <p className="text-gray-500 text-sm">Withdrawable Balance</p>
          <p className="text-3xl font-bold text-gray-800">
            KES {user?.balance?.toLocaleString() || 0}
          </p>
        </div>

        {/* Withdrawal Form */}
        <form onSubmit={handleWithdraw} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Amount (KES)
            </label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="e.g. 500"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              M-Pesa Phone Number
            </label>
            <input
              type="text"
              value={mpesaNumber}
              onChange={(e) => setMpesaNumber(e.target.value)}
              placeholder="e.g. 0712345678"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              required
            />
          </div>

          {message.text && (
            <div className={`p-3 rounded-lg text-sm font-medium ${message.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
              {message.text}
            </div>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-blue-600 hover:bg-blue-500 disabled:bg-blue-400 transition-colors text-white py-3 rounded-xl font-medium shadow"
          >
            {submitting ? 'Processing...' : 'Submit Withdrawal'}
          </button>
        </form>
      </main>
    </div>
  );
}
