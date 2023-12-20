import React from 'react';

const Item = ({ product }) => {
  const { id, name, description, price, imageUrl, category } = product;

  return (
    <div className="item">
      <img src={imageUrl} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
      <p>Category: {category}</p>
      <p>Price: ${price}</p>
      
    </div>
  );
};

export default Item;