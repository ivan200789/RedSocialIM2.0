import React from 'react';
import { View, Text, ActivityIndicator, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import useFetch from '../llamarApis/useFetch'; // Ajusta la ruta si es necesario
import Header from "../components Inicio/header"
import Inicio from '../components Inicio/inicio';
import Posts from "../components Inicio/posts"
const HomeScreen = () => {
  const { data: userData, loading: userLoading, error: userError } = useFetch('https://randomuser.me/api/?results=3');
  const { data: photosData, loading: photosLoading, error: photosError } = useFetch('https://api.unsplash.com/photos/random?query=landscape&count=3&client_id=B0oSuy4BO0YCc-KSgo2YqiK7c5eISRjZlPbiiF8zgiA');
  

  return (
    <View style={styles.container}>
      <Header title={"Mockups"}/>
      <Inicio Name="Ivan Molina" Info="Desarrollador" Imagen={photosData}/>
      <Posts />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:"#fff"
  },
 

});

export default HomeScreen;
