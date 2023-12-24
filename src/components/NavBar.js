import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Tienda Gaming
      </Link>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/category/perifericos">
            Periféricos
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/category/monitores">
            Monitores
          </Link>
        </li>
        
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;