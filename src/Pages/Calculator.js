import React from 'react';
import CalculatorComponent from '../component/CalculatorComponent';
import NavBar from '../component/Navbar';

const Calculator = () => (
  <div>
    <NavBar />
    <div className="calculatorContainer">
      <h3>Lets do some meth!</h3>
      <CalculatorComponent />
    </div>
  </div>
);

export default Calculator;
