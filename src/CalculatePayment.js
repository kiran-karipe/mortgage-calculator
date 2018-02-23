import React from 'react';
// import MortgageCalculator from './MortgageCalculator';
import './App.css';

const calculatePayment = (props) => {

  return (
      <div className="CalculatePayment">
        <label>Amount: </label>
        <input type='text' onChange={(event) => props.onAmountChanged(event.target.value)}/>
        <span>{props.amount}</span>
        <br/>
        <label>Years: </label>
        <input type='text' onChange={(event) => props.onYearsChanged(event.target.value)}/>
        <span>{props.years}</span>
        <br/>
        <label>Rate: </label>
        <input type='text' onChange={(event) => props.onRateChanged(event.target.value)}/>
        <span>{props.rate}</span>
        <br/>
        <button onClick={props.onClickCalculate}>Calculate</button>
        <br/>
      </div>
  )
}

export default calculatePayment;
