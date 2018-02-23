import React, {Component} from 'react';
import CalculatePayment from './CalculatePayment';

class MortgageCalculator extends Component {
  state = {
    mortgage: {
      amount: 0,
      years: 0,
      rate: 0
    }
  }

  calculatePayment = () => {
    let newRate = this.state.mortgage.rate;
    let monthlyRate = (newRate * 0.01)/12;
    let term = this.state.mortgage.years;
    let factor = Math.pow(monthlyRate + 1, (term * 12));
    let numerator = monthlyRate * factor;
    let denominator = factor - 1;
    let quotient = numerator / denominator;
    let payment = Math.round(this.state.mortgage.amount * quotient);
    console.log("Monthly Payment: "+ payment);
    return payment;
  }

  amountChangedHandler = (amount) => {
    this.setState({mortgage: {
      ...this.state.mortgage,
      amount: amount
    }})
  }

  yearsChangedHandler = (years) => {
    this.setState({mortgage: {
      ...this.state.mortgage,
      years: years,
    }})
  }

  rateChangedHandler = (rate) => {
    this.setState({
      mortgage: {
        ...this.state.mortgage,
        rate: rate,
      }
    });
  }

  render () {
    return (
      <div>
        <h2> Mortgage Calculator</h2>
        <CalculatePayment
          amount={this.state.mortgage.amount}
          years={this.state.mortgage.years}
          rate={this.state.mortgage.rate}
          onAmountChanged={this.amountChangedHandler}
          onYearsChanged={this.yearsChangedHandler}
          onRateChanged={this.rateChangedHandler}
          onClickCalculate={this.calculatePayment}>

        </CalculatePayment>
        <p>Your estimated monthly payment is: {this.calculatePayment.payment}</p>
      </div>
    )
  }
}


export default MortgageCalculator;
