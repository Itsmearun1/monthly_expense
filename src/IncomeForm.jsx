import React, { useState } from 'react';
import './IncomeForm.css';
function IncomeForm({ onSubmit }) {
  const [income, setIncome] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(income);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Monthly Income:
        <input type="number" value={income} onChange={e => setIncome(e.target.value)} />
      </label>
      <button type="submit">Submit</button>
    </form>
  )
}

export default IncomeForm;
