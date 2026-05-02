'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

interface Product {
  id: string;
  name: string;
  price: number;
  dailyIncome: number;
  revenueDays: number;
  totalRevenue: number;
  category: string;
}

export default function HomePage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('Fixed Fund');
  const [products, setProducts] = useState<Product[]>([]);
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchInitialData();
  }, []);

  const fetchInitialData = async () => {
    try {
      // Fetch User and Products in parallel for speed
      const [userRes, productRes] = await Promise.all([
        axios.get('/api/user'),
        axios.get('/api/products')
      ]);

      if (userRes.data.success) setUser(userRes.data.user);
      if (productRes.data.success) setProducts(productRes.data.products);
    } catch (error) {
      console.error("Initialization error:", error);
    } finally {
      setLoading(false);
    }
  };

  // Filter products based on the selected tab
  const filteredProducts = products.filter(p => p.category === activeTab);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-[#064e3b]"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-24 font-sans text-gray-900">
      {/* HEADER SECTION */}
      <div className="bg-[#064e3b] text-white p-6 pb-28 rounded-b-[45px] relative shadow-lg">
        <div className="max-w-4xl mx-auto flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <div className="bg-white p-1 rounded-full w-9 h-9 flex items-center justify-center">
              <span className="text-[#064e3b] font-extrabold text-lg">W</span>
            </div>
            <span className="font-bold text-lg tracking-tight">Wool Ranch</span>
          </div>
          <button 
            onClick={() => router.push('/login')} 
            className="bg-[#10b981] px-5 py-1.5 rounded-lg text-xs font-bold shadow-sm"
          >
            Logout
          </button>
        </div>
        
        <div className="text-center space-y-1">
          <p className="text-xs opacity-70 font-medium">Welcome Back</p>
          <p className="text-xl font-bold tracking-wider">
            {user?.phone ? `+254 | ${user.phone.slice(-9)}` : '+254 | 7XXXXXXX'}
          </p>
        </div>

        {/* BALANCE CARD */}
        <div className="absolute -bottom-14 left-4 right-4 max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-5 flex justify-between items-center border border-gray-100 z-10">
          <div className="flex-1 text-center">
            <p className="text-[10px] text-gray-400 font-black uppercase tracking-tighter">Balance</p>
            <p className="text-green-600 font-bold text-sm">KES {user?.balance?.toLocaleString() || '0.00'}</p>
          </div>
          <div className="flex-1 text-center border-x border-gray-100">
            <p className="text-[10px] text-gray-400 font-black uppercase tracking-tighter">Recharge</p>
            <p className="text-gray-800 font-bold text-sm">KES {user?.totalDeposited?.toLocaleString() || '0.00'}</p>
          </div>
          <div className="flex-1 text-center">
            <p className="text-[10px] text-gray-400 font-black uppercase tracking-tighter">Total Income</p>
            <p className="text-yellow-600 font-bold text-sm">KES {user?.totalIncome?.toLocaleString() || '0.00'}</p>
          </div>
        </div>
      </div>

      <main className="mt-20 px-4 max-w-4xl mx-auto space-y-6">
        {/* QUICK ACTIONS */}
        <div className="grid grid-cols-4 gap-3">
          {[
            { label: 'Recharge', icon: '💵', path: '/deposit' },
            { label: 'Withdraw', icon: '🏦', path: '/withdraw' },
            { label: 'Get Loan', icon: '💸', path: '/loans' },
            { label: 'Online', icon: '🎧', path: '/support' },
          ].map((btn) => (
            <button key={btn.label} onClick={() => router.push(btn.path)} className="bg-white p-4 rounded-2xl shadow-sm flex flex-col items-center gap-2 border border-white hover:border-green-100 transition-all">
              <span className="text-2xl">{btn.icon}</span>
              <span className="text-[10px] font-black text-[#064e3b] uppercase">{btn.label}</span>
            </button>
          ))}
        </div>

        {/* CATEGORY TABS */}
        <div className="flex bg-white p-1.5 rounded-2xl shadow-sm border border-gray-100">
          {['Fixed Fund', 'Welfare Fund', 'Yearly Fund'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-3 text-xs font-bold rounded-xl transition-all duration-300 ${
                activeTab === tab 
                ? 'bg-[#064e3b] text-white shadow-lg' 
                : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* PRODUCT FEED (REAL DATA) */}
        <div className="space-y-4">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((item) => (
              <div key={item.id} className="bg-white rounded-[25px] p-5 shadow-sm border border-gray-100 flex flex-col gap-5">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-2xl border border-gray-100">🏗️</div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-base flex items-center gap-2">
                        <span className="text-[10px] bg-yellow-100 text-yellow-700 p-1 rounded px-2 font-black">PRO</span> {item.name}
                      </h4>
                      <p className="text-[11px] text-gray-500 font-bold mt-0.5">Price: <span className="text-green-600">KES {item.price.toLocaleString()}</span></p>
                    </div>
                  </div>
                  <button 
                    onClick={() => router.push(`/buy/${item.id}`)}
                    className="bg-[#064e3b] hover:bg-black text-white px-6 py-2 rounded-xl text-xs font-bold transition-colors shadow-md active:scale-95"
                  >
                    Buy Now
                  </button>
                </div>

                <div className="grid grid-cols-3 gap-1 text-center bg-gray-50 p-4 rounded-2xl">
                  <div>
                    <p className="text-[9px] text-gray-400 uppercase font-black tracking-tighter">Revenue</p>
                    <p className="text-xs font-bold text-green-700">{item.revenueDays} Days</p>
                  </div>
                  <div className="border-x border-gray-200">
                    <p className="text-[9px] text-gray-400 uppercase font-black tracking-tighter">Daily Earnings</p>
                    <p className="text-xs font-bold text-green-700">KES {item.dailyIncome}</p>
                  </div>
                  <div>
                    <p className="text-[9px] text-gray-400 uppercase font-black tracking-tighter">Total Revenue</p>
                    <p className="text-xs font-bold text-green-700">KES {item.totalRevenue.toLocaleString()}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12 text-gray-400 font-medium italic">
              No active {activeTab} plans available.
            </div>
          )}
        </div>
      </main>

      {/* BOTTOM NAVIGATION BAR */}
      <nav className="fixed bottom-0 left-0 right-0 bg-[#064e3b] text-white flex justify-around items-center py-4 border-t border-green-900 z-50 rounded-t-3xl shadow-2xl">
        {[
          { label: 'Home', icon: '🏠', active: true, path: '/' },
          { label: 'Team', icon: '👥', path: '/team' },
          { label: 'Blog', icon: '📡', path: '/blog' },
          { label: 'Mine', icon: '👤', path: '/profile' },
        ].map((item) => (
          <button 
            key={item.label} 
            onClick={() => router.push(item.path)}
            className={`flex flex-col items-center gap-1.5 transition-all ${item.active ? 'opacity-100 scale-110' : 'opacity-60 hover:opacity-100'}`}
          >
            <span className="text-xl">{item.icon}</span>
            <span className="text-[9px] font-black uppercase tracking-widest">{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}
