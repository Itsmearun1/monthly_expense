import React from 'react'
import "./ExpenseForm.css"
const ExpenseForm = (props) => {
  return (
    <form onSubmit={props.handleExpenseSubmit}>
      <label>
        Category:
        <select name="category">
          <option value="grocery">Grocery</option>
          <option value="roomAndTravel">Room & Travel</option>
          <option value="other">Other</option>
          <option value="savings">Savings</option>
        </select>
      </label>
      <label>
        Amount:
        <input type="number" name="amount" />
      </label>
      <button>Reduce</button>
    </form>
  )
}

export default ExpenseForm
