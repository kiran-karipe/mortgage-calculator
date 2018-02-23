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
    let payment =  ((this.state.mortgage.amount) * (this.state.mortgage.rate)) / 100;
    let monthlyPayment = payment / (this.state.mortgage.years * 12);
    console.log(this.state.mortgage.amount);
    console.log(this.state.mortgage.rate);
    console.log(this.state.mortgage.years);
    console.log("Yearly Payment: "+ payment);
    console.log("Monthly Payment: "+ monthlyPayment);
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
      </div>
    )
  }
}


export default MortgageCalculator;
