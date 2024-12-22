import React from 'react';
import { View, Text, StyleSheet, Image, ImageComponent } from 'react-native';
import useFetch from '../llamarApis/useFetch'; // Ajusta la ruta según sea necesario

const posts = () => {
  const { data: photosData, loading: photosLoading, error: photosError } = useFetch('https://api.unsplash.com/photos/random?query=landscape&count=3&client_id=B0oSuy4BO0YCc-KSgo2YqiK7c5eISRjZlPbiiF8zgiA');

  const { data: userData, loading: userLoading, error: userError } = useFetch('https://randomuser.me/api');

  const imageUrl = photosData && photosData.length > 0 ? photosData[0].urls.small : null;

 // console.log('User Loading:', userLoading);
 // console.log('User Error:', userError);
 // console.log('User Data:', userData);

  // Verificar si hay resultados válidos en photosData
  if (!photosData) {
    return <Text>No se encontraron Imagenes</Text>;
  }
  if (photosLoading) {
    return <Text>Cargando imagen</Text>
  }
  if (photosError) {
    return <Text>Error: {photosError.message}</Text>
  }
  if (userLoading) {
    return <Text>Cargando...</Text>;
  }

  if (userError) {
    return <Text>Error: {userError.message}</Text>;
  }


  if (!userData) {
    return <Text>No se encontraron resultados válidos</Text>;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.posts}>Últimos Posts</Text>

      <View style={styles.posteos}>
      {userData.map((persona, index) => (
        <View key={index} style={styles.personContainer}>
          <Image source={{ uri: persona.picture.medium }} style={styles.avatar}/>
          <Text style={styles.nombres}>{`${persona.name.first} ${persona.name.last}`}</Text>
        </View>
      ))}
        {/*{photosData.map((imagen, i) => (
        <Image key={i} source={{ uri: imageUrl }} style={styles.photo}/>
        ))} */}
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
    backgroundColor:"red"
    
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
