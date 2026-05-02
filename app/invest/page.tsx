import { prisma } from "@/lib/prisma";

export default async function InvestPage() {
  // Fetch active products from your Neon DB
  const products = await prisma.product.findMany({
    where: { status: "active" },
    orderBy: { price: 'asc' }
  });

  return (
    <main className="max-w-md mx-auto px-6 pt-8 pb-24 space-y-6 bg-background min-h-screen">
      <h2 className="text-zinc-100 text-xl font-bold">Investment Plans</h2>
      
      {products.map((product) => (
        <div key={product.id} className="rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-xl">
          <div className="p-5 flex justify-between items-center border-b border-zinc-800/50">
            <div>
              <h3 className="text-zinc-100 font-bold text-lg">{product.name}</h3>
              <p className="text-zinc-500 text-xs">{product.category}</p>
            </div>
            <div className="text-right">
              <p className="text-emerald-500 font-bold">KES {product.price.toLocaleString()}</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 p-5 text-center bg-zinc-900/50">
            <div>
              <p className="text-[10px] text-zinc-500 uppercase tracking-wider">Days</p>
              <p className="text-zinc-100 font-semibold">{product.revenueDays}</p>
            </div>
            <div>
              <p className="text-[10px] text-zinc-500 uppercase tracking-wider">Daily</p>
              <p className="text-emerald-400 font-semibold">{product.dailyIncome}</p>
            </div>
            <div>
              <p className="text-[10px] text-zinc-500 uppercase tracking-wider">Total</p>
              <p className="text-zinc-100 font-semibold">{product.totalRevenue}</p>
            </div>
          </div>

          <button className="w-full py-4 bg-primary-container text-zinc-100 font-bold hover:bg-emerald-700 transition-colors">
            Invest Now
          </button>
        </div>
      ))}
    </main>
  );
}
