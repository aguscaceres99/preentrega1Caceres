import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { getProductById } from '../api'; // Asegúrate de tener una función getProductById en tu archivo api.js

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const { itemId } = useParams();

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const fetchedItem = await getProductById(itemId);
        setItem(fetchedItem);
      } catch (error) {
        console.error('Error fetching item details:', error);
      }
    };

    if (itemId) {
      fetchItem();
    }
  }, [itemId]);

  return (
    <div>
      <h1>Detalles del Producto</h1>
      {item ? <ItemDetail item={item} /> : <p>Cargando detalles...</p>}
    </div>
  );
};

export default ItemDetailContainer;