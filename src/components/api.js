export const getProducts = async () => {
  try {
    // Simulación de datos de productos de computación
    const computerProducts = [
      {
        id: 1,
        name: 'Laptop Gamer Pro',
        description: 'Potente laptop para juegos con procesador de última generación y tarjeta gráfica dedicada.',
        price: 1299.99,
        imageUrl: '/imagenes/laptop gamer.jpg',
        category: 'Computación',
      },
      {
        id: 2,
        name: 'Teclado Mecánico RGB',
        description: 'Teclado mecánico con retroiluminación RGB para una experiencia de escritura y juego única.',
        price: 79.99,
        imageUrl: '/imagenes/tecladomecanico2.jpg',
        category: 'Periféricos',
      },
      {
        id: 3,
        name: 'Monitor 4K Ultra HD',
        description: 'Monitor de alta resolución para disfrutar de imágenes nítidas y colores vibrantes.',
        price: 499.99,
        imageUrl: '/imagenes/monitor4k.jpg',
        category: 'Monitores',
      },
      {
        id: 4,
        name: 'Tarjeta Gráfica Gaming XTREME',
        description: 'Tarjeta gráfica de última generación para rendimiento máximo en juegos y aplicaciones intensivas.',
        price: 799.99,
        imageUrl: '/imagenes/placa.jpg',
        category: 'Componentes',
      },
      {
        id: 5,
        name: 'Auriculares Inalámbricos Gamer',
        description: 'Auriculares inalámbricos con sonido envolvente para una experiencia de juego inmersiva.',
        price: 129.99,
        imageUrl: '/imagenes/auriculares.jpg',
        category: 'Audio',
      },
    ];

    return computerProducts;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw new Error('Error fetching products');
  }
};