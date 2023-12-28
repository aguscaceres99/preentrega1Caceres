import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './itemList';
import { getProducts } from './api';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const allProducts = await getProducts();
        const filteredProducts = categoryId
          ? allProducts.filter((product) => product.category.toLowerCase() === categoryId.toLowerCase())
          : allProducts;

        setProducts(filteredProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [categoryId]);

  return (
    <div>
      <h1>{categoryId ? `Productos de ${categoryId}` : 'Todos los Productos'}</h1>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;