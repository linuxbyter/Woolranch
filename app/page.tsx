<!DOCTYPE html>

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
