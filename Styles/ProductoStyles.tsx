    // src/styles/ProductoStyles.ts
    import { StyleSheet } from 'react-native';

    const styles = StyleSheet.create({
        container: {
            alignItems: 'center',
            padding: 20,
            backgroundColor: '#FFFFFF',
            borderRadius: 10,
            shadowColor: '#000000',
            shadowOpacity: 0.1,
            shadowRadius: 5,
            shadowOffset: {
              width: 0,
              height: 2,
            },
            elevation: 5, 
          },
          
          title: {
            fontSize: 24,
            marginBottom: 10,
            color: '#333333', 
          },
    navigation: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    imagen: {
        width: 150,
        height: 150,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#CCCCCC', 
        borderRadius: 10, 
      },
      
    price: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    name: {
        fontSize: 16,
        marginBottom: 10,
        color: '#444444', 
      },
    index: {
        marginHorizontal: 20,
        fontSize: 16,
        color: '#666666',
    },
    });

    export default styles;
