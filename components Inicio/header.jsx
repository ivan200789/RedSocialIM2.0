import React from 'react';
import { StyleSheet, Platform, StatusBar } from 'react-native';
import { Box, Text } from 'native-base';

const Header = ({ title }) => {
  return (
    <Box style={styles.header}>
      <Text 
        color="black" 
        fontSize="4xl" 
        fontWeight="bold" 
        style={styles.text} 
        numberOfLines={1} 
        ellipsizeMode="tail" 
      > 
        {title} 
      </Text>
    </Box>
  );
};

// ... (código existente)

const styles = StyleSheet.create({
  header: {
    justifyContent: 'center',
    height: 75,
    backgroundColor: '#fff', // Fondo gris claro
    borderBottomColor: '#d0d3d4', // Línea divisoria gris más claro
    shadowColor: '#000', // Sombra negra
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    borderRadius: 15,
    elevation: 5, // Para Android
    paddingHorizontal: 20, // Agrega espacio horizontal interno
    marginBottom: 10, // Agrega espacio inferior
  },
  text: {
    marginTop:8,
    textAlign:"center",
    fontFamily: 'Montserrat', // Cambia la fuente
    fontSize: 28,
  },
});

export default Header;