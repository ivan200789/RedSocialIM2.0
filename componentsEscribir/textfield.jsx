import { useState } from "react"
import {  TextInput, TouchableOpacity, StyleSheet, ScrollView} from "react-native"
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';
import { Permissions } from 'expo';
import { Entypo } from '@expo/vector-icons';
import { Box, Input, Text, Button, VStack, Pressable } from "native-base";
import { useAppContext } from "../Context/StateComp";

export default function textfield(){
    const [text, setText] = useState("")
    const [selectedImage, setSelectedImage] = useState(null);
    const { setPosteo, Posteo } = useAppContext();

    const subirPublicacion = () => {
        if (text.length > 1 && text.length < 300) {
            setPosteo(text); 
            console.log(text)
        } else {
            alert('El texto debe tener entre 1 y 300 caracteres.');
        }
    };
    return(
        <ScrollView style={{
            marginTop:"auto",
            backgroundColor: "#fff",
            height:"100%"
        }}>
            <Text style={{fontSize: 20, fontWeight: "600", marginLeft:10, marginTop:15}}>¿En qué estas pensando?</Text>
            <TextInput 
            style={{
                backgroundColor:"#fff",
                marginHorizontal:"2%",
                width: "96%",
                height: 55,
                paddingHorizontal: 10,
                borderRadius: 4,
                fontSize: 16,
                borderWidth:1,
                marginTop:10,
                borderColor: "#000",
            }} 
            onChangeText={setText}
            value={text}
            placeholder="Escriba su mensaje aquí...."
            />
              <Box style={style.camContainer}>
                <TouchableOpacity style={style.camgaleria}>
                    <Entypo name="camera" size={38} color="black" style={{textAlign:"center"}} />
                </TouchableOpacity>
                <TouchableOpacity style={style.camgaleria}>
                    <Entypo name="images" size={38} color="black" style={{textAlign:"center"}} />
                </TouchableOpacity>
            </Box>
            <Button 
                onPress={subirPublicacion} 
                colorScheme={"violet"} 
                width={340} 
                marginTop={"1"} 
                margin="auto"
            >
              Publicar
            </Button>
          
        </ScrollView>   

    )
}
const style = StyleSheet.create({
    camContainer:{
        display:"flex",
        flexDirection:"row",
        width:"96%",
        margin:"auto",
        marginTop:10,
    },
    camgaleria:{
        width:"48%",
        height:70,
        borderRadius:6,
        justifyContent:"center",
        backgroundColor:"#ddd",
        marginHorizontal:"auto"


        //padding:10,
        //marginHorizontal:3,
   
    }
})