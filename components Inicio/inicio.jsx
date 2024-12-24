import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import textfield from "../componentsEscribir/textfield";


const Inicio = ({ Name, Info, Imagen }) => {
  return (
    <>
      <Text style={styles.headerText}>Inicio</Text>

      <View style={styles.container}>

        <View>
       
        </View>
      </View>
    
    </>
  );
};

const styles = StyleSheet.create({
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
  },
  screenText: {
    fontSize: 20,
    textAlign: "center",
    marginVertical: 50,
  },
  container: {
    alignItems: "center",
    marginTop: 20,
    backgroundColor: "#F2F2F2",
    width: "96%",
    marginHorizontal: "2%",
    borderRadius: 15,
    padding: 8,
    flexDirection: "row",
  },
  image: {
    width: 60,
    height: 60,
    resizeMode: "cover",
    borderRadius: 18,
  },
  name: {
    fontSize: 18,
    fontWeight: "500",
    textAlign: "left",
    marginLeft: 10,
  },
  info: {
    marginLeft: 10,
    fontSize: 14,
    textAlign: "left",
  },
});

export default Inicio;
