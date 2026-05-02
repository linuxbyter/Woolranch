export default function Dashboard() {
  return (
    <div className="font-body-md text-body-md antialiased">
      {/* TopAppBar Shell */}
      <header className="bg-zinc-950 text-emerald-900 font-manrope antialiased tracking-tight docked full-width top-0 border-b border-zinc-900 flex justify-between items-center w-full px-6 py-4 sticky z-50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center overflow-hidden border border-zinc-800">
            <img 
              alt="User" 
              className="w-full h-full object-cover" 
              data-alt="A professional high-resolution avatar of a young entrepreneur..." 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpDKE-C7sTJkJO6KlV0DNkLkLhLjCr4Xp3Bz-ZRKe2zURYwpqKmwA_FWRUyDC3MYjgWqCRiTMvuuhN17n7Bsy6sFC-Ww5HJsuit8jYBkgQyzAsrM4o16tVb6Q_yv4SSeqhwiV_Dqas3Y0pe1bEW_UPJe_34lb5U98QHsg3dZSyUODGmGzYJ29ZbqqfrtfNNhAhIhedWSJ8cCWcHwW98B8Jy5A-15Ej_qu1BvR5hSF4Qy6tsphlDBfgHqSeQfafMk2TiRffUk68S1A"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-zinc-100 font-bold text-sm">+254 712 345 678</span>
            <span className="text-[10px] text-emerald-500 uppercase font-bold tracking-widest">Premium Member</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className="bg-primary-container text-on-primary-container px-3 py-1 rounded-full text-[12px] font-extrabold tracking-tighter">VIP 1</span>
        </div>
      </header>

      <main className="pb-24 pt-6 px-container-padding space-y-stack-md">
        {/* Hero Balance Section (Asymmetric Bento Style) */}
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2 bg-[#F9F9F9] rounded-xl p-6 shadow-lg flex flex-col justify-between min-h-[160px]">
            <div className="flex justify-between items-start">
              <span className="text-zinc-950/60 font-label-lg text-label-lg">Available Balance</span>
              <span className="material-symbols-outlined text-zinc-950">account_balance_wallet</span>
            </div>
            <div>
              <span className="text-zinc-950 font-headline-xl text-headline-xl block">KSh 45,280.00</span>
              <div className="flex items-center gap-1 text-primary-container font-label-lg text-label-lg mt-1">
                <span className="material-symbols-outlined text-sm">trending_up</span>
                <span>+2.4% vs last week</span>
              </div>
            </div>
          </div>
          <div className="bg-surface-container-high rounded-xl p-5 border border-zinc-800 flex flex-col gap-2">
            <span className="text-zinc-400 font-label-lg text-label-lg">Total Investment</span>
            <span className="text-on-surface font-stat-lg text-stat-lg">KSh 120,000</span>
          </div>
          <div className="bg-surface-container-high rounded-xl p-5 border border-zinc-800 flex flex-col gap-2">
            <span className="text-zinc-400 font-label-lg text-label-lg">Total Income</span>
            <span className="text-primary font-stat-lg text-stat-lg">KSh 18,450</span>
          </div>
          <div className="col-span-2 bg-secondary-container/30 border border-secondary-container rounded-xl p-5 flex justify-between items-center">
            <div className="flex flex-col">
              <span className="text-zinc-400 font-label-lg text-label-lg">Today's Earnings</span>
              <span className="text-secondary font-headline-lg text-headline-lg">KSh 1,240.50</span>
            </div>
            <div className="w-12 h-12 bg-secondary-container rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined text-secondary">monitoring</span>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <section className="space-y-4">
          <h2 className="font-headline-lg text-headline-lg text-on-surface px-1">Actions</h2>
          <div className="grid grid-cols-4 gap-3">
            <button className="flex flex-col items-center gap-2 group active:scale-95 transition-transform">
              <div className="w-full aspect-square bg-primary-container rounded-xl flex items-center justify-center shadow-lg group-hover:bg-inverse-primary transition-colors">
                <span className="material-symbols-outlined text-on-primary-container text-3xl">add_card</span>
              </div>
              <span className="text-zinc-400 font-label-lg text-[12px]">Recharge</span>
            </button>
            <button className="flex flex-col items-center gap-2 group active:scale-95 transition-transform">
              <div className="w-full aspect-square bg-surface-container-highest border-2 border-primary-container rounded-xl flex items-center justify-center group-hover:bg-zinc-800 transition-colors">
                <span className="material-symbols-outlined text-primary text-3xl">payments</span>
              </div>
              <span className="text-zinc-400 font-label-lg text-[12px]">Withdraw</span>
            </button>
            <button className="flex flex-col items-center gap-2 group active:scale-95 transition-transform">
              <div className="w-full aspect-square bg-surface-container-high border border-zinc-800 rounded-xl flex items-center justify-center group-hover:bg-zinc-800 transition-colors">
                <span className="material-symbols-outlined text-zinc-300 text-3xl">handshake</span>
              </div>
              <span className="text-zinc-400 font-label-lg text-[12px]">Loan</span>
            </button>
            <button className="flex flex-col items-center gap-2 group active:scale-95 transition-transform">
              <div className="w-full aspect-square bg-surface-container-high border border-zinc-800 rounded-xl flex items-center justify-center group-hover:bg-zinc-800 transition-colors">
                <span className="material-symbols-outlined text-zinc-300 text-3xl">support_agent</span>
              </div>
              <span className="text-zinc-400 font-label-lg text-[12px]">Support</span>
            </button>
          </div>
        </section>

        {/* Investment Tabs */}
        <section className="space-y-6">
          <div className="flex justify-between items-center px-1">
            <h2 className="font-headline-lg text-headline-lg text-on-surface">Investments</h2>
            <span className="text-primary font-label-lg text-label-lg">View All</span>
          </div>
          {/* Segmented Control Tab Pattern */}
          <div className="bg-surface-container-lowest p-1.5 rounded-full flex items-center border border-zinc-900 shadow-inner">
            <button className="flex-1 py-2.5 rounded-full bg-surface-container-highest text-zinc-100 font-label-lg text-label-lg transition-all shadow-sm">
              Fixed Fund
            </button>
            <button className="flex-1 py-2.5 rounded-full text-zinc-500 font-label-lg text-label-lg hover:text-zinc-300 transition-all">
              Welfare Fund
            </button>
            <button className="flex-1 py-2.5 rounded-full text-zinc-500 font-label-lg text-label-lg hover:text-zinc-300 transition-all">
              Yearly Fund
            </button>
          </div>

          {/* Product Listing */}
          <div className="space-y-6">
            {/* Product Card 1 */}
            <div className="bg-[#F9F9F9] rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
              <div className="relative h-48 overflow-hidden">
                <img 
                  alt="Wool Ranch Sheep" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  data-alt="A cinematic, wide-angle shot of a lush..." 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVvRHC7DsHYqUkxhwlps1gfhi-YBpyRcTda_NLg0ICVKvB-dHj0y-6nEqz4LtabnnfvmwAuWSgz9Mwl8VeQQ2503E-Dswpk-RT918FeEeinBpD08wTpH48I7Q-aku1far4m2OchZIyanBAy6ANlLF2Jm7TZPEMfX_UsGqTmrTPgwBKv0A4rJCzrWzarEdnKNRH_hOC18UH0jrG32flbwlh7TWaP26t296z4P4XUCSQaHTkboRTwlJC9zAOKU0KhlClca99MJR-zFE"
                />
                <div className="absolute top-4 right-4 bg-primary-container text-on-primary-container px-3 py-1 rounded-full font-bold text-[10px] tracking-widest uppercase">High Yield</div>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="text-zinc-950 font-headline-lg text-headline-lg">TBL 01 Premium</h3>
                    <p className="text-zinc-500 font-label-lg text-label-lg">Standard Merino Unit</p>
                  </div>
                  <div className="text-right">
                    <p className="text-zinc-400 text-[10px] font-bold uppercase tracking-widest">Price</p>
                    <p className="text-zinc-950 font-stat-lg text-stat-lg">KSh 15,000</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 py-4 border-y border-zinc-200">
                  <div>
                    <p className="text-zinc-400 text-[10px] font-bold uppercase tracking-widest">Validity</p>
                    <p className="text-zinc-950 font-label-lg text-label-lg">45 Days</p>
                  </div>
                  <div>
                    <p className="text-zinc-400 text-[10px] font-bold uppercase tracking-widest">Daily</p>
                    <p className="text-primary-container font-label-lg text-label-lg">KSh 450</p>
                  </div>
                  <div>
                    <p className="text-zinc-400 text-[10px] font-bold uppercase tracking-widest">Total</p>
                    <p className="text-zinc-950 font-label-lg text-label-lg">KSh 20,250</p>
                  </div>
                </div>
                <button className="w-full bg-primary-container text-white py-4 rounded-xl font-bold tracking-tight active:scale-95 transition-all shadow-lg shadow-primary-container/20">
                  Buy Now
                </button>
              </div>
            </div>

            {/* Product Card 2 */}
            <div className="bg-[#F9F9F9] rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
              <div className="relative h-48 overflow-hidden">
                <img 
                  alt="Wool Production" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  data-alt="Close-up macro photography of high-quality raw wool..." 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVby08KSRjq8s1VowlNxIoGf1t3u1AVUOnRt-EbE9i-7WQhOxy6rRQ5tKh9bqveE7uyTfY10fek79ib3PyijNpR0yaQjc825jSaCOM3mwAeY6IapG0QAukhzxjKMBYtMBRDuFThuww4rnwxe6J27QoShzjPl-qO4-NzurFSWVrKCvWB-9nZk9lZfNEFBHPLkGCnIImAXt0TW3BDMK3-N7VBofnXBcGi8WOcgoMHoE442Stw1gC8EQ8wdZTVvm9DpwHinU0zFg4RB4"
                />
                <div className="absolute top-4 right-4 bg-zinc-900 text-zinc-100 px-3 py-1 rounded-full font-bold text-[10px] tracking-widest uppercase">Stable Growth</div>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="text-zinc-950 font-headline-lg text-headline-lg">TBL 02 Elite</h3>
                    <p className="text-zinc-500 font-label-lg text-label-lg">Angora Integration Package</p>
                  </div>
                  <div className="text-right">
                    <p className="text-zinc-400 text-[10px] font-bold uppercase tracking-widest">Price</p>
                    <p className="text-zinc-950 font-stat-lg text-stat-lg">KSh 35,000</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 py-4 border-y border-zinc-200">
                  <div>
                    <p className="text-zinc-400 text-[10px] font-bold uppercase tracking-widest">Validity</p>
                    <p className="text-zinc-950 font-label-lg text-label-lg">60 Days</p>
                  </div>
                  <div>
                    <p className="text-zinc-400 text-[10px] font-bold uppercase tracking-widest">Daily</p>
                    <p className="text-primary-container font-label-lg text-label-lg">KSh 1,100</p>
                  </div>
                  <div>
                    <p className="text-zinc-400 text-[10px] font-bold uppercase tracking-widest">Total</p>
                    <p className="text-zinc-950 font-label-lg text-label-lg">KSh 66,000</p>
                  </div>
                </div>
                <button className="w-full bg-primary-container text-white py-4 rounded-xl font-bold tracking-tight active:scale-95 transition-all shadow-lg shadow-primary-container/20">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* BottomNavBar Shell */}
      <nav className="fixed bottom-0 left-0 w-full z-50 bg-zinc-950/95 backdrop-blur-md border-t border-zinc-900 flex justify-around items-center px-4 py-3 pb-safe shadow-[0_-4px_12px_rgba(0,0,0,0.5)]">
        <a className="flex flex-col items-center justify-center text-emerald-500 p-2 group transition-transform duration-150 scale-95 active:scale-90" href="#">
          <span className="material-symbols-outlined" data-weight="fill">home</span>
          <span className="font-manrope text-[10px] font-semibold uppercase tracking-widest mt-1">Home</span>
        </a>
        <a className="flex flex-col items-center justify-center text-zinc-500 p-2 group transition-transform duration-150 scale-95 active:scale-90 hover:text-emerald-400" href="#">
          <span className="material-symbols-outlined">finance_mode</span>
          <span className="font-manrope text-[10px] font-semibold uppercase tracking-widest mt-1">Invest</span>
        </a>
        <a className="flex flex-col items-center justify-center text-zinc-500 p-2 group transition-transform duration-150 scale-95 active:scale-90 hover:text-emerald-400" href="#">
          <span className="material-symbols-outlined">groups</span>
          <span className="font-manrope text-[10px] font-semibold uppercase tracking-widest mt-1">Team</span>
        </a>
        <a className="flex flex-col items-center justify-center text-zinc-500 p-2 group transition-transform duration-150 scale-95 active:scale-90 hover:text-emerald-400" href="#">
          <span className="material-symbols-outlined">person</span>
          <span className="font-manrope text-[10px] font-semibold uppercase tracking-widest mt-1">Account</span>
        </a>
      </nav>
    </div>
  );
}
