'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

interface UserData {
  id: number;
  name: string;
  email: string;
  balance: number;
  totalIncome: number;
  vipLevel: number;
  teamSize: number;
  refId: string;
}

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await axios.get('/api/user');
      if (response.data.success) {
        setUser(response.data.user);
      } else {
        router.push('/');
      }
    } catch {
      router.push('/');
    } finally {
      setLoading(false);
    }
  };

  const copyRefLink = () => {
    const link = `${window.location.origin}/?ref=${user?.refId}`;
    navigator.clipboard.writeText(link);
    alert('Referral link copied!');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-green-800 text-white p-4">
        <div className="max-w-md mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Wool Ranch</h1>
          <button onClick={() => router.push('/')} className="text-sm">Logout</button>
        </div>
      </header>

      <main className="max-w-md mx-auto p-4">
        <div className="bg-gradient-to-r from-green-700 to-green-600 rounded-2xl p-6 text-white mb-6">
          <p className="text-green-200 text-sm">Available Balance</p>
          <p className="text-4xl font-bold">KES {user?.balance?.toLocaleString() || 0}</p>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <button
            onClick={() => router.push('/deposit')}
            className="bg-green-600 text-white p-6 rounded-xl flex flex-col items-center"
          >
            <span className="text-2xl mb-2">+</span>
            <span className="font-medium">Deposit</span>
          </button>
          <button className="bg-blue-600 text-white p-6 rounded-xl flex flex-col items-center">
            <span className="text-2xl mb-2">-</span>
            <span className="font-medium">Withdraw</span>
          </button>
        </div>

        <div className="bg-white rounded-xl p-4 mb-4">
          <h3 className="font-semibold text-gray-800 mb-3">My Stats</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">Total Income</span>
              <span className="font-medium">KES {user?.totalIncome?.toLocaleString() || 0}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">VIP Level</span>
              <span className="font-medium">Level {user?.vipLevel || 0}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Team Size</span>
              <span className="font-medium">{user?.teamSize || 0}</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4">
          <h3 className="font-semibold text-gray-800 mb-3">Refer & Earn</h3>
          <div className="flex gap-2">
            <input
              type="text"
              readOnly
              value={`${typeof window !== 'undefined' ? window.location.origin : ''}/?ref=${user?.refId || ''}`}
              className="flex-1 px-3 py-2 bg-gray-50 rounded-lg text-sm"
            />
            <button
              onClick={copyRefLink}
              className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm"
            >
              Copy
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}