import React from 'react';
import { Link } from 'react-router-dom';
import './styles/pages.css';

const NavBar = () => (
  <div className="navbar">
    <h1 className="pagetitle">Mathmagician</h1>
    <nav className="navlinks">
      <Link to="/">Home</Link>
      <Link to="/calculator">Calculator</Link>
      <Link to="/quote">Quote</Link>
    </nav>
  </div>
);

export default NavBar;
