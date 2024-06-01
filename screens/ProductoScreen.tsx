// src/screens/ProductoScreen.tsx
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Producto from '../components/Producto';

interface ProductoData {
  nombre: string;
  precio: string;
  imagen: string;
}

const ProductoScreen: React.FC = () => {
  const [productos, setProductos] = useState<ProductoData[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await fetch('https://api.sampleapis.com/beers/ale/');
        const data = await response.json();
        const productosConPrecio = data.map((producto: any) => ({
          nombre: producto.name,
          precio: (Math.random() * 10 + 1).toFixed(2),
          imagen: producto.image || 'https://via.placeholder.com/150',
        }));
        setProductos(productosConPrecio);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProductos();
  }, []);

  const handlePrev = () => {
    setCurrentIndex(prevIndex => (prevIndex > 0 ? prevIndex - 1 : productos.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prevIndex => (prevIndex < productos.length - 1 ? prevIndex + 1 : 0));
  };

  if (productos.length === 0) {
    return <Text style={styles.loading}>Cargando...</Text>;
  }

  const producto = productos[currentIndex];

  return (
    <View style={styles.container}>
      <Producto
        producto={producto}
        onPrev={handlePrev}
        onNext={handleNext}
        currentIndex={currentIndex}
        totalProductos={productos.length}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#103158',
  },
  loading: {
    fontSize: 20,
  },
});

export default ProductoScreen;
