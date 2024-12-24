import React from 'react';
import { View, Text, ActivityIndicator, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Header from "../components Inicio/header"
import Inicio from '../components Inicio/inicio';
import TabNavigator from './Tab';
const HomeScreen = () => {
  
  return (
    <View style={styles.container}>
      <Header title={"Mockups"}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:"#fff",
    marginTop:5
  },
 

});

export default HomeScreen;
