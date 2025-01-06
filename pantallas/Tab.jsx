import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons'; // Importamos Ionicons de Expo
import HomeScreen from "./Home";
import BuscadorScreen from "./Buscador";
import Escribir from "./Escribir";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home'; // Icono de 'Home' en Ionicons
          } else if (route.name === 'Buscar') {
            iconName = 'search'; // Icono de 'Search' en Ionicons
          } else if (route.name === 'Publicar') {
            iconName = 'create'; // Icono de 'Create' en Ionicons
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'gray',
        tabBarShowLabel: false, // No mostrar etiquetas de texto en las pestañas
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Buscar" component={BuscadorScreen} />
      <Tab.Screen name="Publicar" component={Escribir} />
    </Tab.Navigator>
  );
}
