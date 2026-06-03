"use client";

import { useState } from 'react';

export default function StablecoinSuperApp() {
  const [amount, setAmount] = useState('');
  const [chain, setChain] = useState('Base');

  const handleTransfer = () => {
    alert(`Transferring ${amount} USDC to ${chain} (demo)`);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-8 border rounded-3xl">
      <h1 className="text-3xl font-bold mb-8 text-center">Stablecoin Super App</h1>

      <div className="space-y-4">
        <input
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-4 border rounded-2xl"
          placeholder="Amount"
        />
        <select
          value={chain}
          onChange={(e) => setChain(e.target.value)}
          className="w-full p-4 border rounded-2xl"
        >
          <option>Base</option>
          <option>Arc</option>
          <option>Solana</option>
          <option>Ethereum</option>
        </select>
        <button
          onClick={handleTransfer}
          className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-2xl text-lg font-semibold"
        >
          Cross-Chain Transfer
        </button>
      </div>
    </div>
  );
}