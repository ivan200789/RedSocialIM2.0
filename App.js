import React, { useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './pantallas/Tab';

import Escribir from './pantallas/Escribir';
import BuscadorScreen from './pantallas/Buscador';
import HomeScreen from './pantallas/Home';
import Login from './pantallas/Login';
import { AppContextProvider } from './Context/StateComp';
import Registrar from './pantallas/Registrar';

import { theme } from './assets/theme';
import { Provider as PaperProvider } from 'react-native-paper';

// Impide que la splash screen se oculte automáticamente
const Stack = createStackNavigator(); // Creamos el Stack Navigator

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);


  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    async function loadResources() {
      try {
        await Font.loadAsync({
          Roboto: require('./assets/roboto/Roboto-Regular.ttf'),
          Roboto_medium: require('./assets/roboto/Roboto-Medium.ttf'),
          Roboto_bold: require('./assets/roboto/Roboto-Bold.ttf'),

          ...Ionicons.font,
        });
      } catch (error) {
        console.warn(error);
      } finally {
        setIsReady(true);
        SplashScreen.hideAsync(); // Oculta la splash screen cuando esté listo
      }
    }

    loadResources();
  }, []);

  if (!isReady) {
    // Retorna null mientras se cargan los recursos
    return null;
  }

  return (
    <AppContextProvider>
      <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Login'>
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="Registrar" component={Registrar} options={{ headerShown: false }} />

          <Stack.Screen name="Home" component={TabNavigator} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>

      </PaperProvider>

  </AppContextProvider>
  );
}
