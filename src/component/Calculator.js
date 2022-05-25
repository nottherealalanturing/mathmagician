import React from 'react';
import './styles/Calculator.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calcBody">
        <input type="text" className="result" value={0} />
        <div className="calcButtons">
          <button className="calcBtn" type="button">
            AC
          </button>
          <button className="calcBtn" type="button">
            +/-
          </button>
          <button className="calcBtn" type="button">
            %
          </button>
          <button className="calcBtn operator" type="button">
            ÷
          </button>
          <button className="calcBtn" type="button">
            7
          </button>
          <button className="calcBtn" type="button">
            8
          </button>
          <button className="calcBtn" type="button">
            9
          </button>
          <button className="calcBtn operator" type="button">
            *
          </button>
          <button className="calcBtn" type="button">
            4
          </button>
          <button className="calcBtn" type="button">
            5
          </button>
          <button className="calcBtn" type="button">
            6
          </button>
          <button className="calcBtn operator" type="button">
            -
          </button>
          <button className="calcBtn" type="button">
            1
          </button>
          <button className="calcBtn" type="button">
            2
          </button>
          <button className="calcBtn" type="button">
            3
          </button>
          <button className="calcBtn operator" type="button">
            +
          </button>
          <button className="calcBtn zero" type="button">
            0
          </button>
          <button className="calcBtn" type="button">
            .
          </button>
          <button className="calcBtn operator" type="button">
            =
          </button>
        </div>
      </div>
    );
  }
}

export default Calculator;
