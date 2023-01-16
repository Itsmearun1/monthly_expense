import React from 'react'
import "./SpendingLog.css"
const SpendingLog = (props) => {
  return (
    <div className='aa'>
      <h2>Spending Log</h2>
      <ul>
        {props.log.map(item => {
          return <li key={item.id}>{item.category}: ${item.amount}</li>
        })}
      </ul>
    </div>
  )
}

export default SpendingLog
