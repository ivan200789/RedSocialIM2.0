import React from 'react';
import {  StyleSheet, Image, ImageComponent } from 'react-native';
import { Button, Center, Text, View } from 'native-base';
import { useAppContext } from '../Context/StateComp';

import AntDesign from '@expo/vector-icons/AntDesign';

const posts = () => {
  const { Usuario, Posteo } = useAppContext
  ();
  
  return (
    <View style={styles.container} marginLeft={"1"}>
      <Text fontFamily="mono" marginLeft={"1"} fontSize="lg">Últimos Posts</Text>

      <View shadow={"2"} backgroundColor={"muted.50"} width="95%" height={"auto"} marginX={"auto"} marginTop={"3.5"} borderRadius={"2xl"}>
        <Text textAlign={"center"} fontSize={"lg"}>{Usuario}</Text>
        <Text textAlign={"left"} marginTop={"2"} fontSize={"sm"} fontFamily={"heading"} marginLeft={"2"} m>{Posteo}</Text>
        <Image 
          source={require("../assets/Mendoza.jpeg")} // Usa require para imágenes locales

          alt="Alternate Text" 
          style={{ width: "98%", height: 120, margin:"auto", borderRadius:10, }} // Especifica un tamaño para que se muestre
        />

        <Button 
          variant={"unstyled"}
          marginTop={"2/7"}
          marginX={"auto"}
          _pressed={{ backgroundColor: "red.600" }} 
          borderRadius="full" 
          padding={3} 
          shadow={2} // Agrega una sombra sutil
          width={"1/3"}
        >
            <AntDesign name="heart" size={24} color="white" />
        </Button>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
   
  },
  posts: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  posteos: {
    width: '100%',
    
  },
  
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  nombres: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign:"center"
  },
  photo: {
    width: 100,
    height: 100,
  },
});

export default posts;
