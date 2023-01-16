import React, { Component } from 'react'
import IncomeForm from './IncomeForm'
import ExpenseCategories from './ExpenseCategories'
import ExpenseForm from './ExpenseForm'
import SpendingLog from './SpendingLog'
import './App.css'
class App extends Component {
  state = {
    income: 0,
    grocery: 0,
    roomAndTravel: 0,
    other: 0,
    savings: 0,
    log: []
  }

  handleIncomeSubmit = (event) => {
    event.preventDefault()
    this.setState({
      income: event.target.income.value,
      grocery: event.target.income.value * 0.25,
      roomAndTravel: event.target.income.value * 0.3,
      other: event.target.income.value * 0.2,
      savings: event.target.income.value * 0.25
    })
  }

  handleExpenseSubmit = (event) => {
    event.preventDefault()
    const category = event.target.category.value
    const amount = parseFloat(event.target.amount.value)

    this.setState(prevState => {
      return {
        [category]: prevState[category] - amount
      }
    })
    this.addToLog(category, amount)
  }

  addToLog = (category, amount) => {
    this.setState(prevState => {
      return {
        log: [...prevState.log, { category, amount, id: Date.now() }]
      }
    })
  }

  render() {
    return (
      <div className="wrapper">
      <div className="app-container">
        <h1>Pocket Saver</h1>
        <IncomeForm handleIncomeSubmit={this.handleIncomeSubmit} />
        <ExpenseCategories
          grocery={this.state.grocery}
          roomAndTravel={this.state.roomAndTravel}
          other={this.state.other}
          savings={this.state.savings}
        />
        <ExpenseForm handleExpenseSubmit={this.handleExpenseSubmit} />
      </div>
      <SpendingLog log={this.state.log} />
      </div>
    )
  }
}

export default App
