export const getProducts = () => {
    
    return Promise.resolve([
      {
        id: 1,
        name: 'Mouse Gamer X1',
        description: 'El mejor mouse para juegos de alta precisión.',
        price: 49.99,
        imageUrl: 'mouse-x1.jpg',
        category: 'Periféricos',
      },
      {
        id: 2,
        name: 'Teclado Mecánico Pro',
        description: 'Teclado mecánico para jugadores profesionales.',
        price: 99.99,
        imageUrl: 'teclado-pro.jpg',
        category: 'Periféricos',
      },
      {
        id: 3,
        name: 'Monitor Gaming 27"',
        description: 'Monitor de alta frecuencia de actualización para una experiencia inmersiva.',
        price: 299.99,
        imageUrl: 'monitor-gaming.jpg',
        category: 'Monitores',
      },
      
    ]);
  };