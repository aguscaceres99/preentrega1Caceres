import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ItemList from './ItemList';
import { getProducts } from '../api';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { categoryName } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchedProducts = await getProducts();

        if (categoryName) {
          const filteredProducts = fetchedProducts.filter((product) => product.category.toLowerCase() === categoryName.toLowerCase());
          setProducts(filteredProducts);
        } else {
          setProducts(fetchedProducts);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [categoryName]);

  const handleItemClick = (itemId) => {
    navigate(`/item/${itemId}`);
  };

  return (
    <div>
      <h1>Productos de la Tienda Gaming</h1>
      <ItemList products={products} onItemClick={handleItemClick} />
    </div>
  );
};

export default ItemListContainer;