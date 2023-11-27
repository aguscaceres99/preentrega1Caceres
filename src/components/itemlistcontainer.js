import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap';

const ItemListContainer = ({ greeting }) => {
  return (
    <Container>
      <Jumbotron>
        <h1>{greeting}</h1>
        <p>
          ¡Bienvenido a nuestra tienda! Explora nuestra amplia selección de productos para gamers.
        </p>
      </Jumbotron>
    </Container>
  );
};

export default ItemListContainer;