import React, { useState } from 'react';
import './App.css';

function App() {
  // State to store the list of expenses
  const [expenses, setExpenses] = useState([]);
  // State to track whether the total expenses should be shown
  const [showTotal, setShowTotal] = useState(false);

  // Function to add a new expense
  const addExpense = (event) => {
    event.preventDefault();
    // Get the values from the form inputs
    const name = event.target.elements.name.value;
    const amount = event.target.elements.amount.value;
    // Create a new expense object
    const newExpense = { name, amount };
    // Add the new expense to the expenses list
    setExpenses([...expenses, newExpense]);
    // Reset the form inputs
    event.target.reset();
  }

  // Function to delete an expense
  const deleteExpense = (index) => {
    // Create a new expenses list without the deleted expense
    const newExpenses = expenses.filter((expense, i) => i !== index);
    // Update the state with the new expenses list
    setExpenses(newExpenses);
  }

  // Function to calculate the total expenses
  const totalExpenses = expenses.reduce((total, expense) => total + parseInt(expense.amount), 0);

  return (
    <div className="App">
      <h1>Monthly Expenses</h1>
      <form onSubmit={addExpense}>
        <input type="text" name="name" placeholder="Expense name" />
        <input type="number" name="amount" placeholder="Expense amount" />
        <button type="submit">Add Expense</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Expense</th>
            <th>Amount</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense, index) => (
            <tr key={index}>
              <td>{expense.name}</td>
              <td>{expense.amount}</td>
              <td>
                <button onClick={() => deleteExpense(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="total-expenses">
        <input type="checkbox" checked={showTotal} onChange={() => setShowTotal(!showTotal)} />
        <label>Show total expenses</label>
        {showTotal && <p>Total Expenses: {totalExpenses}</p>}
      </div>
    </div>
  );
}

export default App;
