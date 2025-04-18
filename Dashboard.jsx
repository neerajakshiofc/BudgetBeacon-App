import React from 'react';


const Dashboard = () => {
  // Sample data (replace with real props or API data)
  const totalExpenses = 4520;
  const currentAmount = 10480;
  const savingsGoal = 20000;

  const progressPercentage = Math.min((currentAmount / savingsGoal) * 100, 100).toFixed(1);

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Welcome to your Financial Dashboard</h2>

      <div className="dashboard-grid">
        <div className="dashboard-card">
          <h3>Total Expenses</h3>
          <p className="amount">₹ {totalExpenses.toLocaleString()}</p>
        </div>

        <div className="dashboard-card">
          <h3>Current Balance</h3>
          <p className="amount">₹ {currentAmount.toLocaleString()}</p>
        </div>

        <div className="dashboard-card">
          <h3>Savings Goal</h3>
          <p className="amount">₹ {savingsGoal.toLocaleString()}</p>
          <div className="progress-bar">
            <div className="progress" style={{ width: `${progressPercentage}%` }}></div>
          </div>
          <p className="progress-text">{progressPercentage}% achieved</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
