import React, { Component } from "react";
import IncomeForm from "./IncomeForm";
import ExpenseCategories from "./ExpenseCategories";
import ExpenseForm from "./ExpenseForm";
import SpendingLog from "./SpendingLog";
import "./App.css";

class App extends Component {
  state = {
    income: 0,
    grocery: 0,
    roomAndTravel: 0,
    other: 0,
    savings: 0,
    log: [],
  };

  componentDidMount() {
    const data = JSON.parse(localStorage.getItem("money-manager"));
    if (data) {
      this.setState({
        income: data.income,
        grocery: data.grocery,
        roomAndTravel: data.roomAndTravel,
        other: data.other,
        savings: data.savings,
        log: data.log,
      });
    }
  }

  componentDidUpdate() {
    localStorage.setItem("money-manager", JSON.stringify(this.state));
  }

  handleIncomeSubmit = (event) => {
    event.preventDefault();
    this.setState({
      income: event.target.income.value,
      grocery: event.target.income.value * 0.25,
      roomAndTravel: event.target.income.value * 0.3,
      other: event.target.income.value * 0.2,
      savings: event.target.income.value * 0.25,
    });
  };

  handleExpenseSubmit = (event) => {
    event.preventDefault();
    const category = event.target.category.value;
    const amount = parseFloat(event.target.amount.value);

    this.setState((prevState) => {
      return {
        [category]: prevState[category] - amount,
      };
    });
    this.addToLog(category, amount);
  };

  addToLog = (category, amount) => {
    this.setState((prevState) => {
      return {
        log: [...prevState.log, { category, amount, id: Date.now() }],
      };
    });
  };

  clearData = () => {
    this.setState({
      income: 0,
      grocery: 0,
      roomAndTravel: 0,
      other: 0,
      savings: 0,
      log: [],
    });
    localStorage.clear();
  };

  handleDelete = (id) => {
    this.setState((prevState) => {
      return {
        log: prevState.log.filter((item) => item.id !== id),
      };
    });
  };

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

          <button className="subButton" onClick={this.clearData}>Clear Data</button>
        </div>
        <SpendingLog log={this.state.log} handleDelete={this.handleDelete} />
      </div>
    );
  }
}

export default App;
