import React, { useState } from "react";
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
import Wave from "../assets/Wave"; // Asegúrate de que la ruta sea correcta
import { supabase } from "../Supabase/supabase";

export default function Registrar({ navigation }) {
  const [gmail, setGmail] = useState("");
  const [usuario, setUsuario] = useState("");
  const [contraseña, setContraseña] = useState("");

  const añadirUserDatabase = async () => {
    try {
      console.log("Objeto a insertar:", {
        Usuario: usuario,
        Contraseña: contraseña,
        Gmail: gmail,
      });
    
      const { data, error } = await supabase
        .from("Usuarios")
        .insert([
          {
            Usuario: usuario,
            Contraseña: contraseña,
            Gmail: gmail,
          },
        ]);
    
      if (error) {
        console.error("Error al insertar usuarios:", error);
        return;
      }
    
      console.log("Usuarios insertados:", data);
    } catch (error) {
      console.error("Error inesperado:", error);
    }
    
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.waveContainer}>
            <Wave color1="#f1c40f" color2="#d35400" />
          </View>

          <View style={styles.content}>
            <Text style={styles.title}>Regístrate</Text>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Gmail</Text>
              <TextInput
                value={gmail}
                onChangeText={setGmail}
                style={styles.input}
                placeholder="Gmail"
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Nombre</Text>
              <TextInput
                value={usuario}
                onChangeText={setUsuario}
                style={styles.input}
                placeholder="Nombre"
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Contraseña</Text>
              <TextInput
                value={contraseña}
                onChangeText={setContraseña}
                style={styles.input}
                placeholder="Contraseña"
                secureTextEntry={true}
              />
            </View>

            <TouchableOpacity
              onPress={añadirUserDatabase}
              style={[styles.button, styles.registerButton]}
            >
              <Text style={styles.buttonText}>Registrarse</Text>
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
    fontSize: 46,
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
  button: {
    width: "100%",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 16,
  },
  registerButton: {
    backgroundColor: "#f39c12",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
