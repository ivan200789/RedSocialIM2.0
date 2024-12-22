import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    borderRadius:13,
    width: '100%',
    height: 75,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    position: 'absolute', // Fija el encabezado en una posición absoluta
    top: 0, // Lo coloca en la parte superior de la pantalla
    zIndex: 100, // Asegura que esté por encima de otros componentes
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginTop:20
  },
});

export default Header;
