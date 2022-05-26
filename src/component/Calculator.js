import React from 'react';
import './styles/Calculator.css';

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
    this.state = {};
  }

  render() {
    return (
      <div className="calculatorBody">
        <input type="text" className="result" value={0} />
        <div className="calculatorButtons">
          {buttonsArray.map((value) => {
            const operator = operatorsArray.includes(value) ? 'operator' : '';
            return (
              <button className={`calculatorBtn ${operator}`} type="button" key={value}>
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
