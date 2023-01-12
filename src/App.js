import React, { useState } from 'react';
import IncomeForm from './IncomeForm';
import ExpenseCategories from './ExpenseCategories';
import ExpenseForm from './ExpenseForm';
import './App.css';
function App() {
  const [grocery, setGrocery] = useState(0);
  const [roomAndTravel, setRoomAndTravel] = useState(0);
  const [other, setOther] = useState(0);
  const [savings, setSavings] = useState(0);

  const handleIncomeSubmit = (income) => {
    const grocery = income * 0.25;
    const roomAndTravel = income * 0.3;
    const other = income * 0.2;
    const savings = income * 0.25;
    setGrocery(grocery);
    setRoomAndTravel(roomAndTravel);
    setOther(other);
    setSavings(savings);
  }

  const handleExpenseReduce = (category, amount) => {
    switch (category) {
      case 'grocery':
        setGrocery(grocery - amount);
        break;
      case 'roomAndTravel':
        setRoomAndTravel(roomAndTravel - amount);
        break;
      case 'other':
        setOther(other - amount);
        break;
      case 'savings':
        setSavings(savings - amount);
        break;
      default:
        break;
    }
  }

  return (
    <div>
      <IncomeForm onSubmit={handleIncomeSubmit} />
      <ExpenseCategories
        grocery={grocery}
        roomAndTravel={roomAndTravel}
        other={other}
        savings={savings}
      />
      <ExpenseForm onReduce={handleExpenseReduce} />
    </div>
  );
}

export default App;
