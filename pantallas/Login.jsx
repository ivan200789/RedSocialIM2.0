import React, { useState, useContext } from "react";
import { Box, Input, Text, Button, VStack, Pressable, HStack, CheckIcon, Alert } from "native-base";
import Wave from "../assets/Wave"; // Asegúrate de que la ruta a la ola sea correcta
import {
  Platform,
  KeyboardAvoidingView,
  ScrollView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { useAppContext } from "../Context/StateComp"; // Asegúrate de que la ruta es correcta
import AntDesign from '@expo/vector-icons/AntDesign';

import { registrarUsuario } from "../firebase/firebase";

export default function Login({ navigation }) {

  const {setUsuario } = useAppContext(); 
  const [nombre, setNombreInput] = useState('');  

  const [gmail, setGmail] = useState('');  

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleRegistro = async () => {
    try {
      await registrarUsuario(nombre, password);
    } catch (error) {
      console.error(error);
    }
  };
  
  const handleLogin = () => {
   // const isPasswordValid = validarContraseña(password);
   // if (!isPasswordValid) {
   //   setPasswordError(
   //     `La contraseña debe cumplir los siguientes requisitos:
   //     * Contener al menos 8 caracteres.
   //     * Incluir al menos una letra minúscula.
   //     * Incluir al menos una letra mayúscula.
   //     * Contener al menos un número.
   //     * Incluir al menos un carácter especial.
   //     `
   //   );
   //   return; // Detenemos la ejecución si hay un error
   // }

    // Si la contraseña es válida, limpia el error y navega
    setUsuario(nombre)
    setPasswordError('');
    navigation.navigate('Home');
  };

  const validarContraseña = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
          <Box flex={1} alignItems="center" justifyContent="center" bg="white" p={0}>
            <Box position="absolute" bottom="0" top="0" left="0" width="100%" height="100%">
              <Wave />
            </Box>

            <Box width="90%" borderRadius="lg" p={4} zIndex={1} mt={40}>
              <VStack space={5} alignItems="center">
                <Text fontSize="6xl" fontFamily="body">Hola</Text>

                <Box width="100%">
                  <Text fontSize="lg" textAlign="center" fontFamily="heading">Gmail</Text>
                  <Input
                    variant="underlined"
                    placeholder="Gmail"
                    value={gmail}
                    onChangeText={setGmail}
                    width="100%"
                    fontFamily="heading"
                    mt={2}
                  />
                </Box>
                <Box width="100%">
                  <Text fontSize="lg" textAlign="center" fontFamily="heading">Nombre</Text>
                  <Input
                    variant="underlined"
                    placeholder="Nombre"
                    value={nombre}
                    onChangeText={setNombreInput}
                    width="100%"
                    fontFamily="heading"
                    mt={2}
                  />
                </Box>
                <Box width="100%">
                  <Text fontSize="lg" textAlign="center" fontFamily="heading">Contraseña</Text>
                  <Input
                    variant="underlined"
                    placeholder="Contraseña"
                    value={password}
                    onChangeText={(text) => {
                      setPassword(text);
                      if (passwordError) {
                        setPasswordError(''); // Limpia el error mientras escribe
                      }
                    }}
                    secureTextEntry={!showPassword}
                    width="100%"
                    fontFamily="heading"
                    mt={2}
                    InputRightElement={
                      <Pressable onPress={() => setShowPassword(!showPassword)} style={{ padding: 8 }}>
                        <Text fontSize="xs" fontFamily="heading" color="cyan.600">
                          {showPassword ? "Ocultar" : "Mostrar"}
                        </Text>
                      </Pressable>
                    }
                  />
                  {passwordError && (
                    <Text fontFamily="mono" fontSize="sm" color="danger.500">
                      {passwordError}
                    </Text>
                  )}
                </Box>

                <Button onPress={handleLogin} width="100%" variant="outline" colorScheme="blue">
                  Iniciar sesión
                </Button>
                <Button onPress={handleRegistro}  width="100%" variant="outline" colorScheme="pink">
                  Registrarse
                </Button>
              </VStack>
            </Box>
            <Button  variant={"solid"} borderRadius={"full"} colorScheme={"red"}>
              <AntDesign name="google" size={24} color="white" />
            </Button>
          </Box>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
