import React, { useState } from 'react';
import axios from 'axios';

const topIndianStocks = [
  { label: 'Tata Consultancy Services (TCS)', value: 'TCS.NS' },
  { label: 'Infosys (INFY)', value: 'INFY.NS' },
  { label: 'Reliance Industries (RELIANCE)', value: 'RELIANCE.NS' },
  { label: 'HDFC Bank (HDFCBANK)', value: 'HDFCBANK.NS' },
  { label: 'ICICI Bank (ICICIBANK)', value: 'ICICIBANK.NS' },
];

const LiveStocks = () => {
  const [symbol, setSymbol] = useState('');
  const [stock, setStock] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchStock = async () => {
    if (!symbol) return;

    setLoading(true);
    setError('');
    setStock(null);

    try {
      const res = await axios.get('http://localhost:5000/api/stock-suggestions', {
        params: { symbol },
      });

      setStock(res.data);
    } catch (err) {
      console.error(err);
      setError('Failed to fetch stock data. Please check the symbol and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">📈 Live Stock Price</h2>

      {/* Dropdown for popular Indian stocks */}
      <select
        className="p-2 border border-gray-300 rounded w-full mb-2"
        value={symbol}
        onChange={(e) => setSymbol(e.target.value)}
      >
        <option value="">Select a Stock</option>
        {topIndianStocks.map((stock) => (
          <option key={stock.value} value={stock.value}>
            {stock.label}
          </option>
        ))}
      </select>

      {/* Text input for custom stock symbol */}
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={symbol}
          onChange={(e) => setSymbol(e.target.value.toUpperCase())}
          placeholder="Or enter stock symbol (e.g., AAPL, TCS.NS)"
          className="p-2 border border-gray-300 rounded w-full"
        />
        <button
          onClick={fetchStock}
          className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
        >
          Get Stock
        </button>
      </div>

      {loading && <p className="text-gray-500">Loading...</p>}
      {error && <p className="text-red-600">{error}</p>}

      {stock && (
        <div className="bg-white p-4 border rounded shadow">
          <h3 className="text-lg font-semibold">{stock.symbol}</h3>
          <p className="text-gray-700">Latest Price: ₹{stock.latestPrice}</p>
          <p
            className={`text-sm ${
              stock.change && stock.change >= 0 ? 'text-green-600' : 'text-red-600'
            }`}
          >
            Change: {stock.change?.toFixed(2)}%
          </p>
        </div>
      )}
    </div>
  );
};

export default LiveStocks;
