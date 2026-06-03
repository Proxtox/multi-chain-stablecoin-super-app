"use client";

export default function YieldPage() {
  return (
    <div className="max-w-2xl mx-auto mt-10 p-8">
      <h1 className="text-3xl font-bold mb-8">Yield Opportunities</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 border rounded-2xl">
          <h2 className="font-semibold mb-2">Base USDC Yield</h2>
          <p className="text-2xl font-bold text-green-600">8.4% APY</p>
          <button className="mt-4 w-full bg-green-600 text-white py-3 rounded-2xl">Deposit</button>
        </div>
        <div className="p-6 border rounded-2xl">
          <h2 className="font-semibold mb-2">Arc USDC Yield</h2>
          <p className="text-2xl font-bold text-green-600">7.9% APY</p>
          <button className="mt-4 w-full bg-green-600 text-white py-3 rounded-2xl">Deposit</button>
        </div>
      </div>
    </div>
  );
}