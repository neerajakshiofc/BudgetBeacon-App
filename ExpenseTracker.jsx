import React, { useState, useEffect } from 'react';

const ExpensesTracker = () => {
  const [expenses, setExpenses] = useState([]);
  const [expenseName, setExpenseName] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  
  // Get existing expenses from localStorage or set default to empty array
  useEffect(() => {
    const savedExpenses = JSON.parse(localStorage.getItem('expenses')) || [];
    setExpenses(savedExpenses);
  }, []);

  // Add expense to the list and store in localStorage
  const addExpense = () => {
    if (!expenseName || !amount || !date) {
      alert('Please fill in all fields');
      return;
    }
    
    const newExpense = { id: Date.now(), name: expenseName, amount: parseFloat(amount), date };
    const updatedExpenses = [...expenses, newExpense];
    setExpenses(updatedExpenses);
    localStorage.setItem('expenses', JSON.stringify(updatedExpenses));
    setExpenseName('');
    setAmount('');
    setDate('');
  };

  // Delete expense from the list and update localStorage
  const deleteExpense = (id) => {
    const updatedExpenses = expenses.filter(expense => expense.id !== id);
    setExpenses(updatedExpenses);
    localStorage.setItem('expenses', JSON.stringify(updatedExpenses));
  };

  return (
    <div className="expenses-tracker">
      <h2>Expenses Tracker</h2>
      
      <div className="input-fields">
        <input
          type="text"
          placeholder="Expense Name"
          value={expenseName}
          onChange={(e) => setExpenseName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button onClick={addExpense}>Add Expense</button>
      </div>
      
      <div className="expense-list">
        <h3>Expense List</h3>
        <ul>
          {expenses.map((expense) => (
            <li key={expense.id}>
              <span>{expense.name}</span> 
              <span>{expense.amount}</span> 
              <span>{expense.date}</span>
              <button onClick={() => deleteExpense(expense.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>

      <div className="total-expenses">
        <h3>Total Expenses: {expenses.reduce((total, expense) => total + expense.amount, 0)}</h3>
      </div>
    </div>
  );
};

export default ExpensesTracker;
