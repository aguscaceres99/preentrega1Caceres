import React from 'react';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
  const { itemId } = useParams();

  // Tu lógica para obtener y mostrar los detalles del producto con el id proporcionado

  return (
    <div>
      <h2>Detalles del Producto</h2>
      <p>ID del Producto: {itemId}</p>
      {/* Muestra los detalles del producto */}
    </div>
  );
};

export default ItemDetailContainer;