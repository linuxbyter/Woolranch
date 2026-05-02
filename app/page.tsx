'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

interface Product {
  id: number;
  name: string;
  price: number;
  dailyIncome: number;<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0, viewport-fit=cover" name="viewport"/>
<title>Wool Ranch Dashboard</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            "colors": {
                    "on-secondary-fixed-variant": "#1f4f3d",
                    "on-secondary": "#013827",
                    "surface-dim": "#131313",
                    "on-tertiary-fixed-variant": "#5b4300",
                    "secondary-fixed": "#baeed4",
                    "on-background": "#e5e2e1",
                    "surface": "#131313",
                    "tertiary-fixed-dim": "#e6c274",
                    "on-secondary-fixed": "#002115",
                    "surface-bright": "#3a3939",
                    "on-tertiary-container": "#e2be70",
                    "surface-container": "#201f1f",
                    "primary": "#8dd6a6",
                    "outline-variant": "#404941",
                    "primary-container": "#0a5c36",
                    "surface-container-lowest": "#0e0e0e",
                    "surface-container-highest": "#353534",
                    "inverse-primary": "#216b43",
                    "secondary-container": "#21523f",
                    "surface-variant": "#353534",
                    "primary-fixed-dim": "#8dd6a6",
                    "on-error": "#690005",
                    "tertiary-container": "#664c06",
                    "on-tertiary": "#3f2e00",
                    "secondary-fixed-dim": "#9fd1b9",
                    "on-primary": "#00391e",
                    "on-secondary-container": "#91c3ab",
                    "surface-container-high": "#2a2a2a",
                    "primary-fixed": "#a8f3c1",
                    "on-error-container": "#ffdad6",
                    "on-primary-fixed": "#002110",
                    "tertiary": "#e6c274",
                    "inverse-on-surface": "#313030",
                    "on-primary-fixed-variant": "#00522e",
                    "background": "#131313",
                    "surface-tint": "#8dd6a6",
                    "surface-container-low": "#1c1b1b",
                    "error": "#ffb4ab",
                    "on-primary-container": "#89d2a2",
                    "outline": "#89938a",
                    "on-tertiary-fixed": "#251a00",
                    "secondary": "#9fd1b9",
                    "on-surface": "#e5e2e1",
                    "error-container": "#93000a",
                    "inverse-surface": "#e5e2e1",
                    "on-surface-variant": "#bfc9bf",
                    "tertiary-fixed": "#ffdf9d"
            },
            "borderRadius": {
                    "DEFAULT": "0.25rem",
                    "lg": "0.5rem",
                    "xl": "0.75rem",
                    "full": "9999px"
            },
            "spacing": {
                    "stack-sm": "12px",
                    "stack-lg": "40px",
                    "container-padding": "24px",
                    "gutter": "16px",
                    "base": "8px",
                    "stack-md": "24px"
            },
            "fontFamily": {
                    "body-md": ["Manrope"],
                    "stat-lg": ["Manrope"],
                    "headline-xl": ["Manrope"],
                    "label-lg": ["Manrope"],
                    "headline-lg": ["Manrope"]
            },
            "fontSize": {
                    "body-md": ["16px", {"lineHeight": "24px", "fontWeight": "400"}],
                    "stat-lg": ["24px", {"lineHeight": "32px", "fontWeight": "500"}],
                    "headline-xl": ["40px", {"lineHeight": "48px", "letterSpacing": "-0.02em", "fontWeight": "700"}],
                    "label-lg": ["14px", {"lineHeight": "20px", "fontWeight": "600"}],
                    "headline-lg": ["28px", {"lineHeight": "36px", "letterSpacing": "-0.01em", "fontWeight": "600"}]
            }
          },
        },
      }
    </script>
<style>
        body { background-color: #111111; color: #e5e2e1; }
        .glass-card { background: rgba(26, 26, 26, 0.8); backdrop-filter: blur(12px); }
        .material-symbols-outlined { font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="font-body-md text-body-md antialiased">
<!-- TopAppBar Shell -->
<header class="bg-zinc-950 text-emerald-900 font-manrope antialiased tracking-tight docked full-width top-0 border-b border-zinc-900 flex justify-between items-center w-full px-6 py-4 sticky z-50">
<div class="flex items-center gap-3">
<div class="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center overflow-hidden border border-zinc-800">
<img alt="User" class="w-full h-full object-cover" data-alt="A professional high-resolution avatar of a young entrepreneur, featuring clean lines and a modern digital aesthetic. The portrait is set against a dark, minimalist background with subtle emerald green lighting accents to match the corporate fintech theme. The lighting is soft and sophisticated, emphasizing security and success." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpDKE-C7sTJkJO6KlV0DNkLkLhLjCr4Xp3Bz-ZRKe2zURYwpqKmwA_FWRUyDC3MYjgWqCRiTMvuuhN17n7Bsy6sFC-Ww5HJsuit8jYBkgQyzAsrM4o16tVb6Q_yv4SSeqhwiV_Dqas3Y0pe1bEW_UPJe_34lb5U98QHsg3dZSyUODGmGzYJ29ZbqqfrtfNNhAhIhedWSJ8cCWcHwW98B8Jy5A-15Ej_qu1BvR5hSF4Qy6tsphlDBfgHqSeQfafMk2TiRffUk68S1A"/>
</div>
<div class="flex flex-col">
<span class="text-zinc-100 font-bold text-sm">+254 712 345 678</span>
<span class="text-[10px] text-emerald-500 uppercase font-bold tracking-widest">Premium Member</span>
</div>
</div>
<div class="flex items-center gap-4">
<span class="bg-primary-container text-on-primary-container px-3 py-1 rounded-full text-[12px] font-extrabold tracking-tighter">VIP 1</span>
</div>
</header>
<main class="pb-24 pt-6 px-container-padding space-y-stack-md">
<!-- Hero Balance Section (Asymmetric Bento Style) -->
<div class="grid grid-cols-2 gap-4">
<div class="col-span-2 bg-[#F9F9F9] rounded-xl p-6 shadow-lg flex flex-col justify-between min-h-[160px]">
<div class="flex justify-between items-start">
<span class="text-zinc-950/60 font-label-lg text-label-lg">Available Balance</span>
<span class="material-symbols-outlined text-zinc-950">account_balance_wallet</span>
</div>
<div>
<span class="text-zinc-950 font-headline-xl text-headline-xl block">KSh 45,280.00</span>
<div class="flex items-center gap-1 text-primary-container font-label-lg text-label-lg mt-1">
<span class="material-symbols-outlined text-sm">trending_up</span>
<span>+2.4% vs last week</span>
</div>
</div>
</div>
<div class="bg-surface-container-high rounded-xl p-5 border border-zinc-800 flex flex-col gap-2">
<span class="text-zinc-400 font-label-lg text-label-lg">Total Investment</span>
<span class="text-on-surface font-stat-lg text-stat-lg">KSh 120,000</span>
</div>
<div class="bg-surface-container-high rounded-xl p-5 border border-zinc-800 flex flex-col gap-2">
<span class="text-zinc-400 font-label-lg text-label-lg">Total Income</span>
<span class="text-primary font-stat-lg text-stat-lg">KSh 18,450</span>
</div>
<div class="col-span-2 bg-secondary-container/30 border border-secondary-container rounded-xl p-5 flex justify-between items-center">
<div class="flex flex-col">
<span class="text-zinc-400 font-label-lg text-label-lg">Today's Earnings</span>
<span class="text-secondary font-headline-lg text-headline-lg">KSh 1,240.50</span>
</div>
<div class="w-12 h-12 bg-secondary-container rounded-full flex items-center justify-center">
<span class="material-symbols-outlined text-secondary">monitoring</span>
</div>
</div>
</div>
<!-- Quick Actions -->
<section class="space-y-4">
<h2 class="font-headline-lg text-headline-lg text-on-surface px-1">Actions</h2>
<div class="grid grid-cols-4 gap-3">
<button class="flex flex-col items-center gap-2 group active:scale-95 transition-transform">
<div class="w-full aspect-square bg-primary-container rounded-xl flex items-center justify-center shadow-lg group-hover:bg-inverse-primary transition-colors">
<span class="material-symbols-outlined text-on-primary-container text-3xl">add_card</span>
</div>
<span class="text-zinc-400 font-label-lg text-[12px]">Recharge</span>
</button>
<button class="flex flex-col items-center gap-2 group active:scale-95 transition-transform">
<div class="w-full aspect-square bg-surface-container-highest border-2 border-primary-container rounded-xl flex items-center justify-center group-hover:bg-zinc-800 transition-colors">
<span class="material-symbols-outlined text-primary text-3xl">payments</span>
</div>
<span class="text-zinc-400 font-label-lg text-[12px]">Withdraw</span>
</button>
<button class="flex flex-col items-center gap-2 group active:scale-95 transition-transform">
<div class="w-full aspect-square bg-surface-container-high border border-zinc-800 rounded-xl flex items-center justify-center group-hover:bg-zinc-800 transition-colors">
<span class="material-symbols-outlined text-zinc-300 text-3xl">handshake</span>
</div>
<span class="text-zinc-400 font-label-lg text-[12px]">Loan</span>
</button>
<button class="flex flex-col items-center gap-2 group active:scale-95 transition-transform">
<div class="w-full aspect-square bg-surface-container-high border border-zinc-800 rounded-xl flex items-center justify-center group-hover:bg-zinc-800 transition-colors">
<span class="material-symbols-outlined text-zinc-300 text-3xl">support_agent</span>
</div>
<span class="text-zinc-400 font-label-lg text-[12px]">Support</span>
</button>
</div>
</section>
<!-- Investment Tabs -->
<section class="space-y-6">
<div class="flex justify-between items-center px-1">
<h2 class="font-headline-lg text-headline-lg text-on-surface">Investments</h2>
<span class="text-primary font-label-lg text-label-lg">View All</span>
</div>
<!-- Segmented Control Tab Pattern -->
<div class="bg-surface-container-lowest p-1.5 rounded-full flex items-center border border-zinc-900 shadow-inner">
<button class="flex-1 py-2.5 rounded-full bg-surface-container-highest text-zinc-100 font-label-lg text-label-lg transition-all shadow-sm">
                    Fixed Fund
                </button>
<button class="flex-1 py-2.5 rounded-full text-zinc-500 font-label-lg text-label-lg hover:text-zinc-300 transition-all">
                    Welfare Fund
                </button>
<button class="flex-1 py-2.5 rounded-full text-zinc-500 font-label-lg text-label-lg hover:text-zinc-300 transition-all">
                    Yearly Fund
                </button>
</div>
<!-- Product Listing -->
<div class="space-y-6">
<!-- Product Card 1 -->
<div class="bg-[#F9F9F9] rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
<div class="relative h-48 overflow-hidden">
<img alt="Wool Ranch Sheep" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="A cinematic, wide-angle shot of a lush, emerald green pasture at dawn. In the foreground, a flock of premium Merino sheep graze peacefully, their thick wool illuminated by the golden rays of the rising sun. The overall mood is one of abundance, serenity, and high-value agricultural investment, perfectly aligning with the dark forest green and white corporate aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVvRHC7DsHYqUkxhwlps1gfhi-YBpyRcTda_NLg0ICVKvB-dHj0y-6nEqz4LtabnnfvmwAuWSgz9Mwl8VeQQ2503E-Dswpk-RT918FeEeinBpD08wTpH48I7Q-aku1far4m2OchZIyanBAy6ANlLF2Jm7TZPEMfX_UsGqTmrTPgwBKv0A4rJCzrWzarEdnKNRH_hOC18UH0jrG32flbwlh7TWaP26t296z4P4XUCSQaHTkboRTwlJC9zAOKU0KhlClca99MJR-zFE"/>
<div class="absolute top-4 right-4 bg-primary-container text-on-primary-container px-3 py-1 rounded-full font-bold text-[10px] tracking-widest uppercase">High Yield</div>
</div>
<div class="p-6 space-y-4">
<div class="flex justify-between items-end">
<div>
<h3 class="text-zinc-950 font-headline-lg text-headline-lg">TBL 01 Premium</h3>
<p class="text-zinc-500 font-label-lg text-label-lg">Standard Merino Unit</p>
</div>
<div class="text-right">
<p class="text-zinc-400 text-[10px] font-bold uppercase tracking-widest">Price</p>
<p class="text-zinc-950 font-stat-lg text-stat-lg">KSh 15,000</p>
</div>
</div>
<div class="grid grid-cols-3 gap-4 py-4 border-y border-zinc-200">
<div>
<p class="text-zinc-400 text-[10px] font-bold uppercase tracking-widest">Validity</p>
<p class="text-zinc-950 font-label-lg text-label-lg">45 Days</p>
</div>
<div>
<p class="text-zinc-400 text-[10px] font-bold uppercase tracking-widest">Daily</p>
<p class="text-primary-container font-label-lg text-label-lg">KSh 450</p>
</div>
<div>
<p class="text-zinc-400 text-[10px] font-bold uppercase tracking-widest">Total</p>
<p class="text-zinc-950 font-label-lg text-label-lg">KSh 20,250</p>
</div>
</div>
<button class="w-full bg-primary-container text-white py-4 rounded-xl font-bold tracking-tight active:scale-95 transition-all shadow-lg shadow-primary-container/20">
                            Buy Now
                        </button>
</div>
</div>
<!-- Product Card 2 -->
<div class="bg-[#F9F9F9] rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
<div class="relative h-48 overflow-hidden">
<img alt="Wool Production" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="Close-up macro photography of high-quality raw wool fibers being processed in a modern, clean facility. The lighting is focused and professional, highlighting the texture and purity of the wool. The composition reflects precision and industrial excellence, maintaining the project's color palette of deep nocturnal tones and pristine white surfaces." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVby08KSRjq8s1VowlNxIoGf1t3u1AVUOnRt-EbE9i-7WQhOxy6rRQ5tKh9bqveE7uyTfY10fek79ib3PyijNpR0yaQjc825jSaCOM3mwAeY6IapG0QAukhzxjKMBYtMBRDuFThuww4rnwxe6J27QoShzjPl-qO4-NzurFSWVrKCvWB-9nZk9lZfNEFBHPLkGCnIImAXt0TW3BDMK3-N7VBofnXBcGi8WOcgoMHoE442Stw1gC8EQ8wdZTVvm9DpwHinU0zFg4RB4"/>
<div class="absolute top-4 right-4 bg-zinc-900 text-zinc-100 px-3 py-1 rounded-full font-bold text-[10px] tracking-widest uppercase">Stable Growth</div>
</div>
<div class="p-6 space-y-4">
<div class="flex justify-between items-end">
<div>
<h3 class="text-zinc-950 font-headline-lg text-headline-lg">TBL 02 Elite</h3>
<p class="text-zinc-500 font-label-lg text-label-lg">Angora Integration Package</p>
</div>
<div class="text-right">
<p class="text-zinc-400 text-[10px] font-bold uppercase tracking-widest">Price</p>
<p class="text-zinc-950 font-stat-lg text-stat-lg">KSh 35,000</p>
</div>
</div>
<div class="grid grid-cols-3 gap-4 py-4 border-y border-zinc-200">
<div>
<p class="text-zinc-400 text-[10px] font-bold uppercase tracking-widest">Validity</p>
<p class="text-zinc-950 font-label-lg text-label-lg">60 Days</p>
</div>
<div>
<p class="text-zinc-400 text-[10px] font-bold uppercase tracking-widest">Daily</p>
<p class="text-primary-container font-label-lg text-label-lg">KSh 1,100</p>
</div>
<div>
<p class="text-zinc-400 text-[10px] font-bold uppercase tracking-widest">Total</p>
<p class="text-zinc-950 font-label-lg text-label-lg">KSh 66,000</p>
</div>
</div>
<button class="w-full bg-primary-container text-white py-4 rounded-xl font-bold tracking-tight active:scale-95 transition-all shadow-lg shadow-primary-container/20">
                            Buy Now
                        </button>
</div>
</div>
</div>
</section>
</main>
<!-- BottomNavBar Shell -->
<nav class="fixed bottom-0 left-0 w-full z-50 bg-zinc-950/95 backdrop-blur-md border-t border-zinc-900 flex justify-around items-center px-4 py-3 pb-safe shadow-[0_-4px_12px_rgba(0,0,0,0.5)]">
<a class="flex flex-col items-center justify-center text-emerald-500 p-2 group transition-transform duration-150 scale-95 active:scale-90" href="#">
<span class="material-symbols-outlined" data-weight="fill">home</span>
<span class="font-manrope text-[10px] font-semibold uppercase tracking-widest mt-1">Home</span>
</a>
<a class="flex flex-col items-center justify-center text-zinc-500 p-2 group transition-transform duration-150 scale-95 active:scale-90 hover:text-emerald-400" href="#">
<span class="material-symbols-outlined">finance_mode</span>
<span class="font-manrope text-[10px] font-semibold uppercase tracking-widest mt-1">Invest</span>
</a>
<a class="flex flex-col items-center justify-center text-zinc-500 p-2 group transition-transform duration-150 scale-95 active:scale-90 hover:text-emerald-400" href="#">
<span class="material-symbols-outlined">groups</span>
<span class="font-manrope text-[10px] font-semibold uppercase tracking-widest mt-1">Team</span>
</a>
<a class="flex flex-col items-center justify-center text-zinc-500 p-2 group transition-transform duration-150 scale-95 active:scale-90 hover:text-emerald-400" href="#">
<span class="material-symbols-outlined">person</span>
<span class="font-manrope text-[10px] font-semibold uppercase tracking-widest mt-1">Account</span>
</a>
</nav>
</body></html>
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
