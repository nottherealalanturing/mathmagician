import React, { useState } from 'react';
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

const Calculator = () => {
  const [state, setState] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const handleClick = (e) => {
    setState((state) => ({
      ...state,
      ...calculate(state, e.target.name),
    }));
  };

  const { total, next, operation } = state;

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
              onClick={handleClick}
            >
              {value}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Calculator;
