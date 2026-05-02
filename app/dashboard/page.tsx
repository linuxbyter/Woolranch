'use client';

// ... (existing imports, interfaces, and fetch logic remain)

export default function DashboardPage() {
  // ... (existing user/loading state and functions remain)

  if (loading) {
    // ... (existing loading spinner remains)
  }

  return (
    // Matte Black and Sleek white theme
    <div className="min-h-screen bg-neutral-950 font-sans text-neutral-100">
      
      {/* Header: Fixed & Professional */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-neutral-900 border-b border-neutral-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            {/* NEW: Clean, abstract investment icon (replaces cafe logo) */}
            <div className="w-9 h-9 rounded-full bg-yellow-500/20 border border-yellow-400 flex items-center justify-center">
              <span className="font-serif text-lg font-bold text-yellow-400">W</span>
            </div>
            <h1 className="text-xl font-bold font-serif tracking-tight text-neutral-50">Wool Ranch</h1>
          </div>
          <button onClick={() => router.push('/')} className="text-sm font-medium text-neutral-400 hover:text-white transition">Logout</button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto pt-24 pb-12 px-4 space-y-8">
        
        {/* User Greeting & Balances (Scrubbing plagiarism banner) */}
        <div className="bg-neutral-900 rounded-3xl p-8 border border-neutral-800 shadow-xl flex items-center justify-between">
          <div className="flex items-center gap-6">
            {/* NEW: Abstract Profile Placeholder */}
            <div className="w-16 h-16 rounded-full bg-neutral-800 flex items-center justify-center border-2 border-neutral-700">
              <span className="text-2xl text-neutral-500">👤</span>
            </div>
            <div>
              <p className="text-sm text-neutral-400">Welcome,</p>
              <h2 className="text-2xl font-semibold text-white tracking-tight">{user?.name || 'Valued Investor'}</h2>
              <p className="text-xs text-neutral-500 font-mono tracking-wider">{user?.phone || '+254 | XXXXXXXX'}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-8 pr-6 text-center">
            <div>
              <p className="text-xs text-neutral-500 uppercase tracking-widest font-bold">Balance</p>
              <p className="text-2xl font-extrabold text-white font-mono">KES {user?.balance?.toLocaleString() || '0'}</p>
            </div>
            <div>
              <p className="text-xs text-neutral-500 uppercase tracking-widest font-bold">Active Investment</p>
              <p className="text-2xl font-extrabold text-white font-mono">KES {user?.investBalance?.toLocaleString() || '0'}</p>
            </div>
            <div>
              <p className="text-xs text-neutral-500 uppercase tracking-widest font-bold">Total Earnings</p>
              <p className="text-2xl font-extrabold text-yellow-400 font-mono">KES {user?.totalIncome?.toLocaleString() || '0'}</p>
            </div>
          </div>
        </div>

        {/* Action Buttons (Using gold theme) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <button onClick={() => router.push('/deposit')} className="col-span-1 bg-yellow-500/10 hover:bg-yellow-500/20 text-yellow-400 py-6 rounded-2xl flex flex-col items-center border border-yellow-400/30 transition shadow-sm">
            <span className="text-4xl mb-2 font-serif">$</span>
            <span className="font-semibold uppercase text-xs tracking-wider">Deposit Funds</span>
          </button>
          
          <button onClick={() => router.push('/withdraw')} className="col-span-1 bg-neutral-800 hover:bg-neutral-700 text-white py-6 rounded-2xl flex flex-col items-center border border-neutral-700 transition shadow-sm">
            <span className="text-4xl mb-2 font-serif">🏦</span>
            <span className="font-semibold uppercase text-xs tracking-wider">Request Payout</span>
          </button>
          
          {/* Add your Get Loan button logic here */}
          <button className="col-span-1 bg-neutral-800 hover:bg-neutral-700 text-white py-6 rounded-2xl flex flex-col items-center border border-neutral-700 transition shadow-sm">
            <span className="text-4xl mb-2 font-serif">💸</span>
            <span className="font-semibold uppercase text-xs tracking-wider">Loan Center</span>
          </button>
          
          <button onClick={copyRefLink} className="col-span-1 bg-neutral-800 hover:bg-neutral-700 text-white py-6 rounded-2xl flex flex-col items-center border border-neutral-700 transition shadow-sm">
            <span className="text-4xl mb-2 font-serif">🔗</span>
            <span className="font-semibold uppercase text-xs tracking-wider">Refer & Earn</span>
          </button>
        </div>

        {/* Stat Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Stat cards go here using standard styling */}
        </div>
      </main>
    </div>
  );
}
