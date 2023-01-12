import React, { useState } from 'react';
import './ExpenseForm.css';
function ExpenseForm({ onReduce }) {
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    onReduce(category, amount);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Category:
        <select value={category} onChange={e => setCategory(e.target.value)}>
          <option value="grocery">Grocery</option>
          <option value="roomAndTravel">Room & Travel</option>
          <option value="other">Other</option>
          <option value="savings">Savings</option>
        </select>
      </label>
      <label>
        Amount:
        <input type="number" value={amount} onChange={e => setAmount(e.target.value)} />
      </label>
      <button type="submit">Reduce</button>
    </form>
  )
}

export default ExpenseForm;
