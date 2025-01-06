import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Header from "../components Inicio/header";
import { useAppContext } from '../Context/StateComp'; // Asegúrate de que la ruta es correcta
import Posts from '../components Inicio/posts';
import { theme } from '../assets/theme';

const HomeScreen = () => {
  const { Usuario } = useAppContext();

  return (
    <View style={styles.container}>
      <Header title={"Mockups"} />
      
      <View style={{ marginTop: 0 }}>
        <Text style={styles.greetingText}>
          {`Hola, ${Usuario}`}
        </Text>
      </View>
      
      <Posts />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 0,
  },
  greetingText: {
    fontSize: 34,        // equivalente a 'xxl' en NativeBase
    fontFamily: 'System', // Usa la fuente predeterminada del sistema
    color: 'black',
    fontWeight:"bold",
    marginLeft: 10,      // equivalente a 'marginLeft="1.5"' en NativeBase
  },
});

export default HomeScreen;
