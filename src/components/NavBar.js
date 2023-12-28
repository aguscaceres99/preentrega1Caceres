import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './cartWidget';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/category/computacion">Computación</Link></li>
        <li><Link to="/category/perifericos">Periféricos</Link></li>
        <li><Link to="/category/monitores">Monitores</Link></li>
        <li><Link to="/category/componentes">Componentes</Link></li>
        <li><Link to="/category/audio">Audio</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;