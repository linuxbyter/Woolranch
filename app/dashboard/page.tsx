'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // 1. Fetch User Data on Load
  useEffect(() => {
    async function fetchUserData() {
      try {
        const res = await fetch('/api/user'); // Ensure you have this endpoint
        const data = await res.json();
        if (data.success) {
          setUser(data.user);
        } else {
          router.push('/login');
        }
      } catch (err) {
        console.error("Failed to fetch user:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchUserData();
  }, [router]);

  // 2. Handle Referral Link Copy
  const copyRefLink = () => {
    const link = `${window.location.origin}/register?ref=${user?.id || ''}`;
    navigator.clipboard.writeText(link);
    alert("Referral link copied!");
  };

  // 3. Loading State UI
  if (loading) {
    return (
      <div className="min-h-screen bg-neutral-950 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-950 font-sans text-neutral-100">
      
      {/* Header: Professional Investment Branding */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-neutral-900 border-b border-neutral-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-yellow-500/20 border border-yellow-400 flex items-center justify-center">
              <span className="font-serif text-lg font-bold text-yellow-400">W</span>
            </div>
            <h1 className="text-xl font-bold font-serif tracking-tight text-neutral-50 text-emerald-400">Wool Ranch</h1>
          </div>
          <button 
            onClick={() => { /* Add logout logic here */ router.push('/login') }} 
            className="text-sm font-medium text-neutral-400 hover:text-white transition"
          >
            Logout
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto pt-24 pb-12 px-4 space-y-8">
        
        {/* User Card */}
        <div className="bg-neutral-900 rounded-3xl p-8 border border-neutral-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-neutral-800 flex items-center justify-center border-2 border-neutral-700">
              <span className="text-2xl">👤</span>
            </div>
            <div>
              <p className="text-sm text-neutral-400">Account Active</p>
              <h2 className="text-2xl font-semibold text-white tracking-tight">{user?.name || 'Investor'}</h2>
              <p className="text-xs text-neutral-500 font-mono tracking-wider">{user?.phone || 'Verified Member'}</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center w-full md:w-auto">
            <div>
              <p className="text-[10px] text-neutral-500 uppercase tracking-widest font-bold">Balance</p>
              <p className="text-xl font-extrabold text-white font-mono">KES {user?.balance?.toLocaleString() || '0'}</p>
            </div>
            <div>
              <p className="text-[10px] text-neutral-500 uppercase tracking-widest font-bold">Total Payouts</p>
              <p className="text-xl font-extrabold text-white font-mono">KES {user?.totalWithdrawn?.toLocaleString() || '0'}</p>
            </div>
            <div>
              <p className="text-[10px] text-neutral-500 uppercase tracking-widest font-bold">Total Income</p>
              <p className="text-xl font-extrabold text-yellow-500 font-mono">KES {user?.totalIncome?.toLocaleString() || '0'}</p>
            </div>
          </div>
        </div>

        {/* Action Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button onClick={() => router.push('/deposit')} className="bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 py-6 rounded-2xl flex flex-col items-center border border-emerald-500/30 transition">
            <span className="text-3xl mb-2">💳</span>
            <span className="font-bold uppercase text-[10px] tracking-widest">Deposit</span>
          </button>
          
          <button onClick={() => router.push('/withdraw')} className="bg-neutral-800 hover:bg-neutral-700 text-white py-6 rounded-2xl flex flex-col items-center border border-neutral-700 transition">
            <span className="text-3xl mb-2">🏦</span>
            <span className="font-bold uppercase text-[10px] tracking-widest">Withdraw</span>
          </button>
          
          <button onClick={() => router.push('/loans')} className="bg-neutral-800 hover:bg-neutral-700 text-white py-6 rounded-2xl flex flex-col items-center border border-neutral-700 transition">
            <span className="text-3xl mb-2">💸</span>
            <span className="font-bold uppercase text-[10px] tracking-widest">Loan Center</span>
          </button>
          
          <button onClick={copyRefLink} className="bg-neutral-800 hover:bg-neutral-700 text-white py-6 rounded-2xl flex flex-col items-center border border-neutral-700 transition">
            <span className="text-3xl mb-2">🔗</span>
            <span className="font-bold uppercase text-[10px] tracking-widest">Referral</span>
          </button>
        </div>

        {/* Placeholder for Investment Products */}
        <div className="pt-4">
          <h3 className="text-lg font-bold mb-4 text-neutral-400 uppercase tracking-widest text-sm">Available Funds</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             {/* Map your investment products here later */}
             <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-3xl text-center text-neutral-500 italic">
                Scanning for high-yield opportunities...
             </div>
          </div>
        </div>

      </main>
    </div>
  );
}
