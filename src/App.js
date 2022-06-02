import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './component/Navbar';
import { Calculator, Home, Quote } from './Pages/index';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/quote" element={<Quote />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
