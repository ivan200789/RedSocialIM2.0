// theme.js
import { DefaultTheme } from 'react-native-paper';

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',   // Azul
    accent: '#e74c3c',    // Rojo
    background: '#f5f5f5', // Gris claro
    surface: '#ffffff',    // Blanco
    text: '#2c3e50',      // Gris oscuro
  },
  fonts: {
    regular: {
      fontFamily: 'Roboto', // Asegúrate de tener esta fuente disponible
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'Roboto-Medium',
      fontWeight: 'normal',
    },
  },
  roundness: 2, // Bordes redondeados de los botones y tarjetas
};
