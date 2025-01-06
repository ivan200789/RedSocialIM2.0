import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text} numberOfLines={1} ellipsizeMode="tail">
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    justifyContent: 'center',
    alignItems: 'center', // Para centrar el texto horizontalmente
    height: 75,
    backgroundColor: '#fff',
    borderBottomColor: '#d0d3d4',
    borderBottomWidth: 1, // Establecer el borde inferior
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // Para Android
    paddingHorizontal: 20,
    marginBottom: 10,
    borderRadius: 15, // Redondear las esquinas
  },
  text: {
    textAlign: 'center',
    fontFamily: 'Montserrat', // Asegúrate de tener esta fuente en tu proyecto
    fontSize: 28,
    fontWeight: 'bold',
  },
});

export default Header;
