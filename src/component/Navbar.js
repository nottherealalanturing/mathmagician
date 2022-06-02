import React from 'react';
import { Link } from 'react-router-dom';
import './styles/pages.css';

const NavBar = () => (
  <div className="navbar">
    <h1 className="pagetitle">Mathmagician</h1>
    <nav className="navlinks">
      <Link className="navlink" to="/">
        Home
      </Link>
      <Link className="navlink" to="/calculator">
        Calculator
      </Link>
      <Link className="navlink" to="/quote">
        Quote
      </Link>
    </nav>
  </div>
);

export default NavBar;
