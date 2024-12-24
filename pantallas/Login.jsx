import React, { useState } from "react";
import { Box, Input, Text, Button, VStack } from "native-base";
import Wave from "../assets/Wave"; // Asegúrate de que la ruta a la ola sea correcta

export default function Login({ navigation }) { // Asegúrate de recibir 'navigation' como prop
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Password:', password);
    navigation.navigate('Home'); // Navegar a la pantalla "Home"
  };

  return (
    <>
      <Box flex={1} alignItems="center" justifyContent="center" bg="white" p={0}>
        <Box position="absolute" bottom="0" top="0" left="0" width="100%" height="100%">
          <Wave /> {/* Aquí está la ola como fondo */}
        </Box>
        {/* Fondo con la ola en la parte superior */}

        {/* Formulario de inicio de sesión */}
        <Box width="90%" borderRadius="lg" p={4} zIndex={1} mt={0}>
          <VStack space={5} alignItems="center">
            <Text fontSize="6xl" fontFamily="body">Hola</Text>

            {/* Campo de Email */}
            <Box width="100%">
              <Text fontSize="lg" textAlign="center" fontFamily="heading">Nombre</Text>
              <Input
                variant="underlined"
                placeholder="Nombre"
                value={email}
                onChangeText={setEmail}
                width="100%"
                fontFamily="heading"
                mt={2}
              />
            </Box>

            {/* Campo de Contraseña */}
            <Box width="100%">
              <Text fontSize="lg" textAlign="center" fontFamily="heading">Contraseña</Text>
              <Input
                variant="underlined"
                placeholder="Contraseña"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                width="100%"
                fontFamily="heading"
                mt={2}
              />
            </Box>

            {/* Botón de Iniciar sesión */}
            <Button onPress={handleLogin} width="100%" variant="outline" colorScheme="cyan">
              Iniciar sesión
            </Button>
          </VStack>
        </Box>
      </Box>
    </>
  );
}
