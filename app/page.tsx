'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

// Mock data for your products to keep the code clean
const products = [
  { id: 'TBL01', name: 'TBL 01', price: 500, daily: 50, days: 180, total: 9000 },
  { id: 'TBL02', name: 'TBL 02', price: 1500, daily: 150, days: 180, total: 27000 },
  { id: 'TBL03', name: 'TBL 03', price: 3000, daily: 300, days: 180, total: 54000 },
  { id: 'TBL04', name: 'TBL 04', price: 5000, daily: 500, days: 180, total: 90000 },
];

export default function HomePage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('Fixed Fund');

  return (
    <div className="min-h-screen bg-gray-50 pb-20 font-sans">
      {/* 1. Header Section (Replaces Starbucks Plagiarism) */}
      <div className="bg-[#064e3b] text-white p-6 pb-24 rounded-b-[40px] relative shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <div className="bg-white p-1 rounded-full w-10 h-10 flex items-center justify-center">
              <span className="text-[#064e3b] font-bold text-xl">W</span>
            </div>
            <span className="font-bold text-lg">Wool Ranch</span>
          </div>
          <button onClick={() => router.push('/login')} className="bg-[#10b981] px-4 py-1 rounded-lg text-sm font-bold">Logout</button>
        </div>
        
        <div className="text-center">
          <p className="text-sm opacity-80">Welcome Back</p>
          <p className="text-lg font-mono font-bold">+254 | 7XXXXXXX</p>
        </div>

        {/* 2. Balance Card (Floating over the green) */}
        <div className="absolute -bottom-12 left-4 right-4 bg-white rounded-2xl shadow-xl p-4 flex justify-between text-center border border-gray-100">
          <div className="flex-1">
            <p className="text-[10px] text-gray-400 font-bold uppercase">Balance</p>
            <p className="text-green-600 font-bold">KES 50.00</p>
          </div>
          <div className="flex-1 border-x border-gray-100">
            <p className="text-[10px] text-gray-400 font-bold uppercase">Recharge</p>
            <p className="text-gray-800 font-bold">KES 0.00</p>
          </div>
          <div className="flex-1">
            <p className="text-[10px] text-gray-400 font-bold uppercase">Total Income</p>
            <p className="text-yellow-600 font-bold">KES 50.00</p>
          </div>
        </div>
      </div>

      <main className="mt-16 px-4 space-y-6">
        {/* 3. Action Buttons Grid */}
        <div className="grid grid-cols-4 gap-2">
          {[
            { label: 'Recharge', icon: '💵', path: '/deposit' },
            { label: 'Withdraw', icon: '🏦', path: '/withdraw' },
            { label: 'Get Loan', icon: '💸', path: '/loans' },
            { label: 'Online', icon: '🎧', path: '/support' },
          ].map((btn) => (
            <button key={btn.label} onClick={() => router.push(btn.path)} className="bg-white p-3 rounded-xl shadow-sm flex flex-col items-center gap-1 border border-gray-50 active:scale-95 transition">
              <span className="text-xl">{btn.icon}</span>
              <span className="text-[10px] font-bold text-green-800">{btn.label}</span>
            </button>
          ))}
        </div>

        {/* 4. Category Tabs */}
        <div className="flex bg-white p-1 rounded-xl shadow-sm border border-gray-100">
          {['Fixed Fund', 'Welfare Fund', 'Yearly Fund'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-2 text-[10px] font-bold rounded-lg transition-all ${activeTab === tab ? 'bg-[#064e3b] text-white shadow-md' : 'text-gray-400'}`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* 5. Product List */}
        <div className="space-y-4">
          {products.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex flex-col gap-4">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-xl">🏗️</div>
                  <div>
                    <h4 className="font-bold text-gray-800 flex items-center gap-1">
                      <span className="text-[10px] bg-gray-200 p-1 rounded px-2">⭐</span> {item.id}
                    </h4>
                    <p className="text-[10px] text-gray-500 font-bold">Price: <span className="text-green-600">KES {item.price}</span></p>
                  </div>
                </div>
                <button className="bg-[#064e3b] text-white px-4 py-1 rounded-lg text-xs font-bold active:scale-95">Buy Now</button>
              </div>

              <div className="grid grid-cols-3 gap-2 text-center bg-gray-50 p-2 rounded-xl">
                <div>
                  <p className="text-[8px] text-gray-400 uppercase font-bold">Revenue</p>
                  <p className="text-[10px] font-bold text-green-700">{item.days} Days</p>
                </div>
                <div className="border-x border-gray-200">
                  <p className="text-[8px] text-gray-400 uppercase font-bold">Daily Earnings</p>
                  <p className="text-[10px] font-bold text-green-700">KES {item.daily}</p>
                </div>
                <div>
                  <p className="text-[8px] text-gray-400 uppercase font-bold">Total Revenue</p>
                  <p className="text-[10px] font-bold text-green-700">KES {item.total}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* 6. Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-[#064e3b] text-white flex justify-around items-center py-3 border-t border-green-900 z-50">
        {[
          { label: 'Home', icon: '🏠', active: true },
          { label: 'Team', icon: '👥' },
          { label: 'Blog', icon: '📡' },
          { label: 'Mine', icon: '👤' },
        ].map((item) => (
          <div key={item.label} className="flex flex-col items-center gap-1 opacity-80 hover:opacity-100 cursor-pointer">
            <span className={`text-xl ${item.active ? 'bg-green-500 rounded-full p-1' : ''}`}>{item.icon}</span>
            <span className="text-[9px] font-bold uppercase">{item.label}</span>
          </div>
        ))}
      </nav>
    </div>
  );
}
