import React, { useState, useEffect } from "react";
import {
  Platform,
  KeyboardAvoidingView,
  ScrollView,
  Keyboard,
  TouchableWithoutFeedback,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useAppContext } from "../Context/StateComp"; // Asegúrate de que la ruta es correcta
import Wave from "../assets/Wave"; // Asegúrate de que la ruta es correcta
import { supabase } from "../Supabase/supabase";
import { theme } from "../assets/theme";
import { Button } from 'react-native-paper';



export default function Login({ navigation }) {
  const { setUsuario } = useAppContext();
  const [nombre, setNombreInput] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const registrar = () => {
    navigation.navigate("Registrar");
  };

  const logearse = async () => {
    try {
      const { data, error } = await supabase
        .from("Usuarios")
        .select("*")
        .eq("Usuario", nombre)  // Busca el usuario ingresado
        .maybeSingle();  // Devuelve un único valor o null si no se encuentra nada
    
      if (error) {
        console.error(error);
        return; // Si hay error (usuario no encontrado), no hacemos nada
      }
    
      if (!data) {
        console.log("Usuario no encontrado");
        setPasswordError("Usuario no encontrado");
        return; // Si no se encuentra el usuario
      }
    
      // Verificar si la contraseña ingresada es correcta
      if (data.Contraseña === password) {
        setUsuario(nombre); // Establecer el usuario en el contexto
        navigation.navigate("Home"); // Navegar a la pantalla de inicio
      } else {
        setPasswordError("Contraseña incorrecta");
        console.log(passwordError);
      }
    } catch (error) {
      console.error("Error inesperado:", error);
    }
    
  };

  const handleLogin = () => {
    setUsuario(nombre);
    setPasswordError("");
    navigation.navigate("Home");
  };

  const validarContraseña = (password) => {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.waveContainer}>
            <Wave color1="#bb8fce" color2="#2980b9" />
          </View>
          <View style={styles.content}>
            <Text style={styles.title}>Hola</Text>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Usuario</Text>
              <TextInput
                style={styles.input}
                placeholder="Usuario"
                value={nombre}
                onChangeText={setNombreInput}
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Contraseña</Text>
              <TextInput
                style={styles.input}
                placeholder="Contraseña"
                value={password}
                onChangeText={(text) => {
                  setPassword(text);
                  if (passwordError) {
                    setPasswordError(""); // Limpia el error mientras escribe
                  }
                }}
                secureTextEntry={!showPassword}
              />
              <TouchableOpacity
                onPress={() => setShowPassword(!showPassword)}
                style={styles.showPassword}
              >
                <Text style={styles.showPasswordText}>
                  {showPassword ? "Ocultar" : "Mostrar"}
                </Text>
              </TouchableOpacity>
              {passwordError && (
                <Text style={styles.errorText}>{passwordError}</Text>
              )}
            </View>
            
            <Button 
              buttonColor="#bb8fce"
              textColor="white"
              mode="contained"
              onPress={logearse}
              style={{
                width: '100%',            // Hace el botón más ancho (ocupa el ancho completo del contenedor)
                paddingVertical: 10,      // Ajusta el alto del botón (si lo deseas)
              }}
            >
            
             Iniciar sesión
            </Button>
            <TouchableOpacity onPress={registrar} style={styles.registerButton}>
              <Text style={styles.registerText}>
                ¿Aún no tienes cuenta? Presióname para registrarte
              </Text>
            </TouchableOpacity>

            <TouchableOpacity  style={ styles.googleButton}>
              <AntDesign name="google" size={24} color="white" />
            </TouchableOpacity>
  
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  waveContainer: {
    position: "absolute",
    bottom: 0,
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    marginTop: 40,
  },
  title: {
    fontSize: 66,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 24,
  },
  inputContainer: {
    width: "100%",
    marginBottom: 16,
  },
  label: {
    textAlign:"center",
    fontSize: 18,
    color: "#333",
    marginBottom: 8,
  },
  input: {
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    fontSize: 16,
    paddingVertical: 8,
    color: "#000",
  },
  showPassword: {
    position: "absolute",
    right: 0,
    bottom: 10,
  },
  showPasswordText: {
    fontSize: 14,
    color: "#2980b9",
  },
  errorText: {
    fontSize: 14,
    color: "#e74c3c",
    marginTop: 8,
  },
  button: {
    width: "100%",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 16,
  },
  loginButton: {
    backgroundColor: "#2980b9",
  },
  googleButton: {
    marginTop:10,
    width: 55,
    height:55,
    alignItems: "center",
    textAlign:"center",
    justifyContent:"center",
    backgroundColor: "#e74c3c",
    borderRadius:100,
  },
  registerButton: {
    backgroundColor: "transparent",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  registerText: {
    color:"#ec407a",
    fontSize: 15,
    textAlign: "center",
    marginTop:3,
  },
});
