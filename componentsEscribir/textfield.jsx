import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';
import { IconButton, TextInput, Button } from 'react-native-paper'; // Importamos componentes de React Native Paper
import { useAppContext } from "../Context/StateComp"; // Importa el contexto

export default function TextField() {
    const [text, setText] = useState(""); // Estado para el texto
    const [selectedImage, setSelectedImage] = useState(null); // Estado para la imagen seleccionada
    const { setPosteo, Posteo } = useAppContext(); // Obtener funciones del contexto

    const subirPublicacion = () => {
        if (text.length > 1 && text.length < 300) {
            setPosteo(text); 
            console.log(text);
        } else {
            alert('El texto debe tener entre 1 y 300 caracteres.');
        }
    };

    const seleccionarImagen = () => {
        launchImageLibrary({ mediaType: 'photo' }, (response) => {
            if (response.didCancel) {
                console.log('El usuario canceló la selección de la imagen');
            } else if (response.errorCode) {
                console.log('Error: ', response.errorMessage);
            } else {
                setSelectedImage(response.assets[0]);
            }
        });
    };

    const tomarFoto = () => {
        launchCamera({ mediaType: 'photo' }, (response) => {
            if (response.didCancel) {
                console.log('El usuario canceló la cámara');
            } else if (response.errorCode) {
                console.log('Error: ', response.errorMessage);
            } else {
                setSelectedImage(response.assets[0]);
            }
        });
    };

    return (
        <ScrollView style={styles.scrollView}>
            <Text style={styles.textTitle}>¿En qué estás pensando?</Text>
            <TextInput
                style={styles.textInput}
                onChangeText={setText}
                value={text}
                placeholder="Escribe tu mensaje aquí...."
                mode="outlined"
                multiline
            />
            <View style={styles.camContainer}>
                <IconButton
                    icon="camera"
                    size={38}
                    onPress={tomarFoto}
                    style={styles.iconButton}
                />
                <IconButton
                    icon="image"
                    size={38}
                    onPress={seleccionarImagen}
                    style={styles.iconButton}
                />
            </View>
            <Button
                mode="contained"
                onPress={subirPublicacion}
                style={styles.publishButton}
            >
                Publicar
            </Button>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollView: {
        marginTop: "auto",
        backgroundColor: "#fff",
        height: "100%",
        padding: 10,
    },
    textTitle: {
        fontSize: 20,
        fontWeight: "600",
        marginTop: 15,
    },
    textInput: {
        marginTop: 10,
        height: 100, // Se ajusta el tamaño para que sea un área más grande
        paddingVertical: 10, // Agrega espacio interno
    },
    camContainer: {
        flexDirection: "row", // Asegura que los iconos estén en una fila
        justifyContent: "space-between", // Alinea los iconos a lo largo del eje horizontal
        marginTop: 10,
        width: "96%",
        alignSelf: "center", // Centra el contenedor
    },
    iconButton: {
        backgroundColor: "#ddd",
        borderRadius: 6,
        marginHorizontal: 10, // Agrega espacio entre los iconos
    },

    publishButton: {
        marginTop: 15,
        width: "100%",
    },
});
