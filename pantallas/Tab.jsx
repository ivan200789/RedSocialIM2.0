import React from "react";
import { Image } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NativeBaseProvider, Icon } from 'native-base'; // Importamos Icon de NativeBase
import HomeScreen from "./Home";
import BuscadorScreen from "./Buscador";
import Escribir from "./Escribir";
import Login from "./Login";
import { Ionicons } from '@expo/vector-icons'; // Asegúrate de tener instalado @expo/vector-icons

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <NativeBaseProvider>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown:false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home'; // Usamos el nombre del icono de Ionicons
            } else if (route.name === 'Buscar') {
              iconName = 'search';
            } else if (route.name === 'Publicar') {
              iconName = 'create';
            }

            return <Icon as={Ionicons} name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'gray',
          tabBarShowLabel: false, 

        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Buscar" component={BuscadorScreen} />
        <Tab.Screen name="Publicar" component={Escribir} />
      </Tab.Navigator>
    </NativeBaseProvider>
  );
}