import React from 'react';
import { Link } from 'react-router-dom';

const ItemListContainer = () => {
  // Tu lógica para mostrar una lista de productos

  return (
    <div>
      <h1>Lista de Productos</h1>
      {/* Itera sobre la lista de productos y muestra los componentes <Item> */}
      <Link to="/item/1">Item 1</Link>
      <Link to="/item/2">Item 2</Link>
      {/* Agrega más enlaces según sea necesario */}
    </div>
  );
};

export default ItemListContainer;