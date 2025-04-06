import React, { useState } from 'react';

const SIPCalculator = () => {
  const [monthlyInvestment, setMonthlyInvestment] = useState('');
  const [annualReturn, setAnnualReturn] = useState('');
  const [investmentDuration, setInvestmentDuration] = useState('');
  const [maturityAmount, setMaturityAmount] = useState(null);

  // Function to calculate SIP
  const calculateSIP = () => {
    if (!monthlyInvestment || !annualReturn || !investmentDuration) {
      alert('Please fill in all the fields');
      return;
    }

    const P = parseFloat(monthlyInvestment); // Monthly investment
    const r = parseFloat(annualReturn) / 12 / 100; // Monthly rate of return
    const n = parseInt(investmentDuration) * 12; // Duration in months

    // SIP formula for maturity amount
    const A = P * (((1 + r) ** n - 1) / r) * (1 + r);

    // Set maturity amount
    setMaturityAmount(A.toFixed(2));
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">SIP Calculator</h2>

      <div className="space-y-4">
        {/* Monthly Investment */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600" htmlFor="monthlyInvestment">
            Monthly Investment (₹)
          </label>
          <input
            type="number"
            id="monthlyInvestment"
            value={monthlyInvestment}
            onChange={(e) => setMonthlyInvestment(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded"
            placeholder="Enter amount"
          />
        </div>

        {/* Annual Return */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600" htmlFor="annualReturn">
            Annual Return (%)
          </label>
          <input
            type="number"
            id="annualReturn"
            value={annualReturn}
            onChange={(e) => setAnnualReturn(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded"
            placeholder="Enter return percentage"
          />
        </div>

        {/* Investment Duration */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600" htmlFor="investmentDuration">
            Investment Duration (years)
          </label>
          <input
            type="number"
            id="investmentDuration"
            value={investmentDuration}
            onChange={(e) => setInvestmentDuration(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded"
            placeholder="Enter number of years"
          />
        </div>

        {/* Calculate Button */}
        <div className="mb-4">
          <button
            onClick={calculateSIP}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg"
          >
            Calculate Maturity Amount
          </button>
        </div>

        {/* Display Maturity Amount */}
        {maturityAmount && (
          <div className="mt-4">
            <h3 className="text-lg font-semibold text-gray-800">Maturity Amount</h3>
            <p className="text-xl font-medium text-gray-900">₹{maturityAmount}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SIPCalculator;
