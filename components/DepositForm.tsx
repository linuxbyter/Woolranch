"use client";
import { useState } from "react";

export default function DepositForm() {
  const [amount, setAmount] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const quickAmounts = ["500", "1000", "5000", "10000"];

  const handleDeposit = async () => {
    setLoading(true);
    // This is where you'll call your /api/deposit route later
    console.log("Processing KES", amount, "for", phone);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <section className="bg-[#F9F9F9] rounded-2xl p-6 shadow-xl space-y-6">
      <div className="space-y-4">
        <label className="font-semibold text-zinc-500 text-sm">Recharge Amount (KES)</label>
        <div className="relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-zinc-400">KES</span>
          <input 
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full bg-zinc-100 border-none rounded-xl py-4 pl-16 pr-4 text-zinc-900 focus:ring-2 focus:ring-emerald-500"
            placeholder="0.00"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {quickAmounts.map((val) => (
            <button 
              key={val}
              onClick={() => setAmount(val)}
              className={`px-4 py-2 rounded-full border text-sm font-semibold transition-all ${
                amount === val ? "border-emerald-600 bg-emerald-50 text-emerald-700" : "border-zinc-200 bg-zinc-50 text-zinc-800"
              }`}
            >
              {val}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4 pt-4 border-t border-zinc-200">
        <label className="font-semibold text-zinc-500 text-sm">M-Pesa Phone Number</label>
        <div className="flex items-center bg-zinc-100 rounded-xl px-4 py-4">
          <span className="font-bold text-zinc-900 border-r border-zinc-300 pr-4">+254</span>
          <input 
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="flex-1 bg-transparent border-none py-0 pl-4 text-zinc-900 focus:ring-0"
            placeholder="712345678"
          />
        </div>
      </div>

      <button 
        onClick={handleDeposit}
        disabled={loading || !amount || !phone}
        className="w-full bg-[#0a5c36] text-zinc-100 font-bold py-4 rounded-xl shadow-lg active:scale-95 transition-all disabled:opacity-50"
      >
        {loading ? "Initializing STK..." : "Recharge Now"}
      </button>
    </section>
  );
}
