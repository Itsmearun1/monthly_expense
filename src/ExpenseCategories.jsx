import React from 'react';
import './ExpenseCat.css';
function ExpenseCategories({ grocery, roomAndTravel, other, savings }) {
  return (
    <div>
      <div>Grocery: {grocery}</div>
      <div>Room & Travel: {roomAndTravel}</div>
      <div>Other: {other}</div>
      <div>Savings: {savings}</div>
    </div>
  )
}

export default ExpenseCategories;
