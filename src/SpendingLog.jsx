import React from "react";
import "./SpendingLog.css";
const SpendingLog = (props) => {
  return (
    <div className="aa">
      <h2>Spending Log</h2>
      <ul>
        {props.log.map((item) => {
          return (
            <div className="box">
              <div>Category: {item.category}</div>
              <div>Amount: ${item.amount.toFixed(2)}</div>
              </div>
          );
        })}
      </ul>
    </div>
  );
};

export default SpendingLog;
