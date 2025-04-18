import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FinancialPlanner = () => {
  const [goals, setGoals] = useState([]);
  const [goal, setGoal] = useState('');
  const [targetAmount, setTargetAmount] = useState('');
  const [currentAmount, setCurrentAmount] = useState('');
  const [deadline, setDeadline] = useState('');
  const [error, setError] = useState('');

  // Fetch financial goals on mount
  useEffect(() => {
    const fetchGoals = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/plan/financial-goals');
        setGoals(response.data);
      } catch (err) {
        setError('Error fetching goals. Please try again later.');
      }
    };

    fetchGoals();
  }, []);

  // Add a new goal
  const addGoal = async () => {
    if (!goal || !targetAmount || !currentAmount || !deadline) {
      setError('Please fill in all fields');
      return;
    }

    try {
      const newGoal = {
        goal,
        targetAmount: Number(targetAmount),
        currentAmount: Number(currentAmount),
        deadline,
      };
      const response = await axios.post('http://localhost:5000/api/plan/financial-goals', newGoal);
      setGoals([...goals, response.data]);
      setGoal('');
      setTargetAmount('');
      setCurrentAmount('');
      setDeadline('');
      setError('');
    } catch (err) {
      setError('Error adding goal. Please try again later.');
    }
  };

  // Delete a goal
  const deleteGoal = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/plan/financial-goals/${id}`);
      setGoals(goals.filter((goal) => goal._id !== id));
    } catch (err) {
      setError('Error deleting goal. Please try again later.');
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">📈 Financial Planner</h2>

      {error && <div className="text-red-600 mb-4">{error}</div>}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <input
          type="text"
          placeholder="Goal Name"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="number"
          placeholder="Target Amount"
          value={targetAmount}
          onChange={(e) => setTargetAmount(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="number"
          placeholder="Current Amount"
          value={currentAmount}
          onChange={(e) => setCurrentAmount(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="date"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
          className="border p-2 rounded"
        />
        <button
          onClick={addGoal}
          className="col-span-1 md:col-span-2 bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Add Goal
        </button>
      </div>

      <div>
        <h3 className="text-xl font-medium mb-3 text-gray-700">🎯 Your Goals</h3>
        {goals.length > 0 ? (
          <ul className="space-y-4">
            {goals.map((goal, index) => (
              <li key={goal._id || index} className="border p-4 rounded shadow-sm bg-white">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-semibold text-lg">{goal.goal}</h4>
                    <p className="text-sm text-gray-600">Target: ₹{goal.targetAmount}</p>
                    <p className="text-sm text-gray-600">Current: ₹{goal.currentAmount}</p>
                    <p className="text-sm text-gray-600">Deadline: {goal.deadline}</p>
                  </div>
                  <button
                    onClick={() => deleteGoal(goal._id)}
                    className="text-red-500 hover:text-red-700 font-semibold"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">No goals added yet.</p>
        )}
      </div>
    </div>
  );
};

export default FinancialPlanner;
