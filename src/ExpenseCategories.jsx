import React from 'react'
import "./ExpenseCat.css"
const ExpenseCategories = (props) => {
  return (
    <div>
      <div>
        <div className="grocery">
          Grocery: ${props.grocery.toFixed(2)}
        </div>
        <div className="roomAndTravel">
          Room & Travel: ${props.roomAndTravel.toFixed(2)}
        </div>
        <div className="other">
          Other: ${props.other.toFixed(2)}
        </div>
        <div className="savings">
          Savings: ${props.savings.toFixed(2)}
        </div>
      </div>
    </div>
  )
}

export default ExpenseCategories


