import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ item }) => {
  return (
    <div>
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <p>Precio: ${item.price.toFixed(2)}</p>
      <Link to={`/item/${item.id}`}>Ver más</Link>
    </div>
  );
};

export default Item;