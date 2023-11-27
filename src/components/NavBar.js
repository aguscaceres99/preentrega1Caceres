import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import CartWidget from './src/CartWidget';
import ItemListContainer from './components/ItemListContainer';



const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Tienda Gaming</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Inicio</Nav.Link>
        <Nav.Link href="#categoria1">Categoría 1</Nav.Link>
        <Nav.Link href="#categoria2">Categoría 2</Nav.Link>
        <Nav.Link href="#categoria3">Categoría 3</Nav.Link>
      </Nav>
      {/* Ubicamos el componente CartWidget en el Navbar */}
      <CartWidget />
    </Navbar>
  );
};

export default NavBar;