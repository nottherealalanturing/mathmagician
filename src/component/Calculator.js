import React from 'react';
import './styles/Calculator.css';
import calculate from '../logic/calculate';

const buttonsArray = [
  'AC',
  '+/-',
  '%',
  '÷',
  '7',
  '8',
  '9',
  '*',
  '4',
  '5',
  '6',
  '-',
  '1',
  '2',
  '3',
  '+',
  '0',
  '.',
  '=',
];

const operatorsArray = ['÷', '*', '-', '+', '='];

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState((state) => ({
      ...state,
      ...calculate(state, e.target.name),
    }));
  }

  render() {
    const { total, next, operation } = this.state;

    return (
      <div className="calculatorBody">
        <p type="text" className="result">
          {total}
          {operation}
          {next}
        </p>
        <div className="calculatorButtons">
          {buttonsArray.map((value) => {
            const operator = operatorsArray.includes(value) ? 'operator' : '';
            return (
              <button
                className={`calculatorBtn ${operator}`}
                type="button"
                key={value}
                name={value}
                onClick={this.handleClick}
              >
                {value}
              </button>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Calculator;
