import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { useAppContext } from '../Context/StateComp'; // Asegúrate de que la ruta sea correcta
import AntDesign from '@expo/vector-icons/AntDesign';

const Posts = () => {
  const { Usuario, Posteo } = useAppContext();

  return (
    <View style={styles.container}>
      <Text style={styles.posts}>Últimos Posts</Text>

      <View style={styles.postContainer}>
        <Text style={styles.username}>{Usuario}</Text>
        <Text style={styles.postText}>{Posteo}</Text>

        <Image 
          source={require("../assets/Mendoza.jpeg")}  // Usa require para imágenes locales
          style={styles.image}
        />

        <Button
          title=""
          onPress={() => {}}
          color="red"
          style={styles.likeButton}
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
    marginLeft: 10,
  },
  posts: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
    marginBottom: 10,
  },
  postContainer: {
    backgroundColor: '#f4f4f4',
    width: '95%',
    marginHorizontal: 'auto',
    marginTop: 14,
    borderRadius: 15,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // Para Android
  },
  username: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  postText: {
    textAlign: 'left',
    fontSize: 14,
    marginTop: 10,
  },
  image: {
    width: '98%',
    height: 120,
    marginHorizontal: 'auto',
    borderRadius: 10,
    marginTop: 10,
  },
  likeButton: {
    alignSelf: 'center',
    marginTop: 20,
    backgroundColor: 'red',
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});

export default Posts;
