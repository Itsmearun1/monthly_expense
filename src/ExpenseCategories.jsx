import React from 'react';
import './ExpenseCat.css';
function ExpenseCategories({ grocery, roomAndTravel, other, savings }) {
  return (
    <div>
      <div className='grocery'>Grocery(25%): {grocery}</div>
      <div className='roomAndTravel'>Room & Travel(30%): {roomAndTravel}</div>
      <div className='other'>Other(20%): {other}</div>
      <div className='savings'>Savings(25%): {savings}</div>
    </div>
  )
}

export default ExpenseCategories;
