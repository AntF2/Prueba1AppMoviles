import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import Menu from '../components/Menu';

interface PlatilloData {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
}

const Screen2: React.FC = () => {
  const [platillos, setPlatillos] = useState<PlatilloData[]>([]);

  useEffect(() => {
    const fetchPlatillos = async () => {
      try {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
        const data = await response.json();
        setPlatillos(data.categories);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPlatillos();
  }, []);

  const renderItem = ({ item }: { item: PlatilloData }) => <Menu platillo={item} />;

  if (platillos.length === 0) {
    return <Text style={styles.loadingText}>Cargando...</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Descripción</Text>
      <FlatList
        data={platillos}
        renderItem={renderItem}
        keyExtractor={(item) => item.idCategory}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  loadingText: {
    fontSize: 20,
    textAlign: 'center',
  },
});

export default Screen2;
