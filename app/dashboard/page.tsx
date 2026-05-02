'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

interface Product {
  id: number;
  name: string;
  price: number;
  dailyIncome: number;
  revenueDays: number;
  totalRevenue: number;
  category: string;
}

interface UserData {
  phone: string;
  vipLevel: number;
  balance: number;
  investBalance: number;
  totalIncome: number;
  todayIncome: number;
}

export default function Dashboard() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('Fixed Fund');
  const [products, setProducts] = useState<Product[]>([]);
  const [user, setUser] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [userRes, productsRes] = await Promise.all([
          axios.get('/api/user'),
          axios.get('/api/products'),
        ]);

        if (userRes.data.success) setUser(userRes.data.user);
        if (productsRes.data.success) setProducts(productsRes.data.products);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const filteredProducts = products.filter((p) => p.category === activeTab);

  const handleBuy = (productId: number) => {
    router.push(`/buy/${productId}`);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#111111] flex items-center justify-center">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-[#8dd6a6]"></div>
      </div>
    );
  }

  return (
    <div className="bg-[#111111] text-[#e5e2e1] min-h-screen font-sans antialiased pb-28">
      {/* Top App Bar */}
      <header className="bg-zinc-950 text-emerald-900 tracking-tight sticky top-0 border-b border-zinc-900 flex justify-between items-center w-full px-6 py-4 z-50 backdrop-blur-md bg-zinc-950/90">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center overflow-hidden border border-zinc-800 text-white font-bold text-lg select-none">
            {user?.phone ? user.phone.slice(-1) : 'W'}
          </div>
          <div className="flex flex-col">
            <span className="text-zinc-100 font-bold text-sm">
              {user?.phone ? `+254 ${user.phone.slice(-9)}` : '+254 712 345 678'}
            </span>
            <span className="text-[10px] text-emerald-500 uppercase font-bold tracking-widest">
              Premium Member
            </span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className="bg-[#0a5c36] text-[#89d2a2] px-3 py-1 rounded-full text-[12px] font-extrabold tracking-tighter">
            VIP {user?.vipLevel || 1}
          </span>
        </div>
      </header>

      <main className="pt-6 px-6 space-y-6 max-w-4xl mx-auto">
        {/* Asymmetric Bento-Style Balance Section */}
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2 bg-[#F9F9F9] rounded-xl p-6 shadow-lg flex flex-col justify-between min-h-[160px]">
            <div className="flex justify-between items-start">
              <span className="text-zinc-950/60 font-semibold text-sm">Available Balance</span>
              <span className="text-zinc-950 text-xl">💰</span>
            </div>
            <div>
              <span className="text-zinc-950 font-extrabold text-3xl block">
                KSh {user?.balance?.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) || '0.00'}
              </span>
              <div className="flex items-center gap-1 text-emerald-700 font-semibold text-xs mt-1">
                <span>📈</span>
                <span>Active capital earning returns</span>
              </div>
            </div>
          </div>

          <div className="bg-zinc-900 rounded-xl p-5 border border-zinc-800 flex flex-col gap-1">
            <span className="text-zinc-400 font-semibold text-xs">Total Investment</span>
            <span className="text-[#e5e2e1] font-bold text-lg">
              KSh {user?.investBalance?.toLocaleString() || '0'}
            </span>
          </div>
          <div className="bg-zinc-900 rounded-xl p-5 border border-zinc-800 flex flex-col gap-1">
            <span className="text-zinc-400 font-semibold text-xs">Total Income</span>
            <span className="text-[#8dd6a6] font-bold text-lg">
              KSh {user?.totalIncome?.toLocaleString() || '0'}
            </span>
          </div>

          <div className="col-span-2 bg-[#21523f]/30 border border-[#21523f] rounded-xl p-5 flex justify-between items-center">
            <div className="flex flex-col">
              <span className="text-zinc-400 font-semibold text-xs">Today's Earnings</span>
              <span className="text-[#9fd1b9] font-bold text-2xl">
                KSh {user?.todayIncome?.toLocaleString() || '0.00'}
              </span>
            </div>
            <div className="w-12 h-12 bg-[#21523f] rounded-full flex items-center justify-center text-xl">
              📊
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-[#e5e2e1] px-1">Actions</h2>
          <div className="grid grid-cols-4 gap-3">
            {[
              { label: 'Recharge', icon: '📥', path: '/deposit', main: true },
              { label: 'Withdraw', icon: '📤', path: '/withdraw', border: true },
              { label: 'Loan', icon: '🤝', path: '/loans' },
              { label: 'Support', icon: '🎧', path: '/support' },
            ].map((btn) => (
              <button
                key={btn.label}
                onClick={() => router.push(btn.path)}
                className="flex flex-col items-center gap-2 group active:scale-95 transition-transform"
              >
                <div
                  className={`w-full aspect-square rounded-xl flex items-center justify-center transition-colors shadow-lg ${
                    btn.main
                      ? 'bg-[#0a5c36] hover:bg-[#216b43]'
                      : btn.border
                      ? 'bg-zinc-800 border-2 border-[#0a5c36] hover:bg-zinc-700'
                      : 'bg-zinc-900 border border-zinc-800 hover:bg-zinc-800'
                  }`}
                >
                  <span className="text-2xl">{btn.icon}</span>
                </div>
                <span className="text-zinc-400 font-semibold text-xs">{btn.label}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Investment Tabs */}
        <section className="space-y-6">
          <div className="flex justify-between items-center px-1">
            <h2 className="text-xl font-bold text-[#e5e2e1]">Investments</h2>
            <span className="text-[#8dd6a6] font-semibold text-sm">Real-Time Plans</span>
          </div>

          {/* Segmented Control Tab Pattern */}
          <div className="bg-zinc-950 p-1.5 rounded-full flex items-center border border-zinc-900 shadow-inner">
            {['Fixed Fund', 'Welfare Fund', 'Yearly Fund'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-2.5 rounded-full text-xs font-bold transition-all ${
                  activeTab === tab
                    ? 'bg-zinc-800 text-zinc-100 shadow-sm'
                    : 'text-zinc-500 hover:text-zinc-300'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Real-Time Product List */}
          <div className="space-y-6">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-[#F9F9F9] rounded-2xl overflow-hidden shadow-2xl border border-white/10 group flex flex-col"
                >
                  {/* Decorative Header Card Cover */}
                  <div className="relative h-32 bg-gradient-to-tr from-[#0a5c36] to-[#111111] overflow-hidden flex items-center justify-center">
                    <span className="text-5xl opacity-30 select-none">🌿</span>
                    <div className="absolute top-4 right-4 bg-[#0a5c36] text-[#89d2a2] px-3 py-1 rounded-full font-bold text-[10px] tracking-widest uppercase">
                      High Yield
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="flex justify-between items-end">
                      <div>
                        <h3 className="text-zinc-950 font-bold text-lg">{product.name}</h3>
                        <p className="text-zinc-500 font-semibold text-xs">Premium Investment Tier</p>
                      </div>
                      <div className="text-right">
                        <p className="text-zinc-400 text-[10px] font-extrabold uppercase tracking-widest">
                          Price
                        </p>
                        <p className="text-zinc-950 font-bold text-lg">
                          KSh {product.price.toLocaleString()}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 py-4 border-y border-zinc-200">
                      <div>
                        <p className="text-zinc-400 text-[10px] font-extrabold uppercase tracking-widest">
                          Validity
                        </p>
                        <p className="text-zinc-950 font-semibold text-sm">
                          {product.revenueDays} Days
                        </p>
                      </div>
                      <div>
                        <p className="text-zinc-400 text-[10px] font-extrabold uppercase tracking-widest">
                          Daily
                        </p>
                        <p className="text-[#0a5c36] font-bold text-sm">
                          KSh {product.dailyIncome.toLocaleString()}
                        </p>
                      </div>
                      <div>
                        <p className="text-zinc-400 text-[10px] font-extrabold uppercase tracking-widest">
                          Total
                        </p>
                        <p className="text-zinc-950 font-bold text-sm">
                          KSh {product.totalRevenue.toLocaleString()}
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() => handleBuy(product.id)}
                      className="w-full bg-[#0a5c36] hover:bg-[#216b43] text-white py-4 rounded-xl font-bold tracking-tight active:scale-95 transition-all shadow-lg shadow-[#0a5c36]/20"
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-12 text-zinc-500 italic text-sm">
                No real-time {activeTab} offerings available.
              </div>
            )}
          </div>
        </section>
      </main>

      {/* Persistent Bottom Bar */}
      <nav className="fixed bottom-0 left-0 w-full z-50 bg-zinc-950/95 backdrop-blur-md border-t border-zinc-900 flex justify-around items-center px-4 py-3 pb-safe shadow-[0_-4px_12px_rgba(0,0,0,0.5)]">
        {[
          { label: 'Home', icon: '🏠', path: '/', active: true },
          { label: 'Invest', icon: '📈', path: '/invest' },
          { label: 'Team', icon: '👥', path: '/team' },
          { label: 'Account', icon: '👤', path: '/profile' },
        ].map((item) => (
          <button
            key={item.label}
            onClick={() => router.push(item.path)}
            className={`flex flex-col items-center justify-center p-2 transition-all active:scale-90 ${
              item.active ? 'text-emerald-500 scale-105' : 'text-zinc-500 hover:text-emerald-400'
            }`}
          >
            <span className="text-xl">{item.icon}</span>
            <span className="text-[10px] font-semibold uppercase tracking-widest mt-1">
              {item.label}
            </span>
          </button>
        ))}
      </nav>
    </div>
  );
}
