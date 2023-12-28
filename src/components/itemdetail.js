import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ItemDetail = ({ item }) => {
  return (
    <div>
      <h2 className="mb-4">{item.name}</h2>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={item.imageUrl} alt={item.name} />
        <Card.Body>
          <Card.Text>{item.description}</Card.Text>
          <Card.Text>
            <strong>Precio:</strong> ${item.price.toFixed(2)}
          </Card.Text>
          <Button variant="primary">Agregar al Carrito</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ItemDetail;