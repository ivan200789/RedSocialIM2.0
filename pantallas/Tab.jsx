import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./Home";
import BuscadorScreen from "./Buscador";
import Escribir from "./Escribir";
import Login from "./Login";



const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator

    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarShowLabel: false, // This hides the labels

      tabBarIcon: ({ color, size }) => {
        let iconName;

        // Asigna el nombre del archivo PNG según la ruta de la pestaña
        if (route.name === 'Home') {
          iconName = require('../icons/casa.png');
        } else if (route.name === 'Buscar') {
          iconName = require('../icons/busqueda.png');
        } else if (route.name === 'Publicar') {
          iconName = require('../icons/escribir.png');
        }

        // Retorna el componente Image con el ícono PNG
      },
      tabBarActiveTintColor: '#009688',
      tabBarInactiveTintColor: '#000',
      tabBarLabelStyle: {
        fontSize: 12, // Tamaño del texto de las etiquetas de las pestañas
      },
      tabBarIconStyle: {
        width: 28, // Ancho del ícono de las pestañas
        height: 28, // Alto del ícono de las pestañas
      },
      tabBarStyle: {
        height: 70, // Altura total del tab bar
        paddingBottom: 8, // Espacio adicional en la parte inferior si es necesario
      },
    })}
  >
    <Tab.Screen name="Login" component={Login} />
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Buscar" component={BuscadorScreen} />
    <Tab.Screen name="Publicar" component={Escribir} />
  </Tab.Navigator>
  );
}
