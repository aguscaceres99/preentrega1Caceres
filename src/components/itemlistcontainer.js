import React, { useEffect, useState } from 'react';
import ItemList from './itemlist';
import { getProducts } from '../api';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchedProducts = await getProducts();
        setProducts(fetchedProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Productos de la Tienda Gaming</h1>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;