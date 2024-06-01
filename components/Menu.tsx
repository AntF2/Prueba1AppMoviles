import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import styles from '../Styles/MenuStyles';

interface MenuProps {
  platillo: {
    strCategory: string;
    strCategoryThumb: string;
    strCategoryDescription: string;
  };
}

const Menu: React.FC<MenuProps> = ({ platillo }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: platillo.strCategoryThumb }} style={styles.image} />
      <Text style={styles.title}>{platillo.strCategory}</Text>
      <Text style={styles.description}>{platillo.strCategoryDescription}</Text>
    </View>
  );
};

export default Menu;
