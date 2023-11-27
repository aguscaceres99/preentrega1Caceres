import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const CartWidget = () => {
  // Número hardcodeado para la notificación del carrito
  const itemsInCart = 5;

  return (
    <div className="cart-widget">
      <FontAwesomeIcon icon={faShoppingCart} />
      <span className="notification">{itemsInCart}</span>
    </div>
  );
};

export default CartWidget;