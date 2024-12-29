import React from 'react';
import { StyleSheet } from 'react-native';
import Header from "../components Inicio/header"
import { useAppContext } from '../Context/StateComp'; // Asegúrate de que la ruta es correcta
import { NativeBaseProvider, Text, View } from 'native-base';
import Posts from '../components Inicio/posts';
import { theme } from '../assets/theme';
const HomeScreen = () => {
  const { Usuario } = useAppContext();

  return (
    <NativeBaseProvider theme={theme}>
      <View style={styles.container}>
        <Header title={"Mockups"}/>
        
        <View style={{marginTop:0}}>
          <Text fontSize="xxl" fontFamily="body" color="black" marginLeft="1.5">
            {`Hola, ${Usuario}`}
          </Text>
        </View>
        <Posts/>
        
        
      </View>

    </NativeBaseProvider>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 0,
  },
});

export default HomeScreen;
