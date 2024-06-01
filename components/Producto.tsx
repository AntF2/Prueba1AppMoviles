import React from 'react';
import { View, Text, Image, Button } from 'react-native';
import styles from '../Styles/ProductoStyles';

interface ProductoProps {
  producto: {
    nombre: string
    precio: string
    imagen: string
  };
  onPrev: () => void
  onNext: () => void
  currentIndex: number
  totalProductos: number
}

const Producto: React.FC<ProductoProps> = ({ producto, onPrev, onNext, currentIndex, totalProductos }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido</Text>
      <Text style={styles.title}>Productos</Text>
      <View style={styles.navigation}>
        <Button title="Anterior" onPress={onPrev} />
        <Text style={styles.index}>{currentIndex + 1} / {totalProductos}</Text>
        <Button title="Siguiente" onPress={onNext} />
      </View>
      <Image source={{ uri: producto.imagen }} style={styles.imagen} />
      <Text style={styles.price}>Precio: ${producto.precio}</Text>
      <Text style={styles.name}>Nombre: {producto.nombre}</Text>
    </View>
  );
};

export default Producto;
