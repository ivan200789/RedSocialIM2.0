import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const Inicio = ({ Name, Info, Imagen }) => {
    //------- Verifica que Imagen sea un objeto y que contenga una propiedad urls con la URL de la imagen
 //   const imageUrl = Imagen && Imagen.length > 0 ? Imagen[0].urls.small : null;

    return (
    {/*   <View style={styles.container}>
            {imageUrl ? (
               <Image source={{ uri: imageUrl }} style={styles.image} /> 
            ) : (
                <Text>Imagen no disponible</Text>
            )}  
            <View>
                <Text style={styles.name}>{Name}</Text>
                <Text style={styles.info}>{Info}</Text>
            </View>
        </View>
        */}  
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 80,
        backgroundColor: "#F2F2F2",
        width: "96%",
        marginHorizontal:"2%",
        borderRadius: 15,
        padding:8,
        flexDirection: "row",
    },    
    image: {
        width: 60,
        height: 60,
        resizeMode: 'cover',
        borderRadius: 18,
    },
    name: {
        fontSize: 18,
        fontWeight: "500",
        textAlign: 'left',
        marginLeft:10
    },
    info: {
        marginLeft:10,
        fontSize: 14,
        textAlign: "left",
    },
});

export default Inicio;
