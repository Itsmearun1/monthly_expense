import React from 'react'
import "./IncomeForm.css"
const IncomeForm = (props) => {
  return (
    <form onSubmit={props.handleIncomeSubmit}>
      <label>
        Income:
        <input type="number" name="income" />
      </label>
      <button>Submit</button>
    </form>
  )
}

export default IncomeForm
