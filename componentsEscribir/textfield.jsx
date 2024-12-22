import { useState } from "react"
import { Text, TextInput, View, TouchableOpacity, Button, StyleSheet, ScrollView} from "react-native"
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';
import { Permissions } from 'expo';
import { Entypo } from '@expo/vector-icons';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

export default function textfield(){
    const [text, setText] = useState("")
    const [selectedImage, setSelectedImage] = useState(null);
    
    
    

    return(
        <ScrollView style={{
            marginTop:70,
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
            //value={text}
            placeholder="Escriba su mensaje aquí..."
            />
              <View style={style.camContainer}>
                <TouchableOpacity style={style.camgaleria}>
                    <Entypo name="camera" size={38} color="black" style={{textAlign:"center"}} />
                </TouchableOpacity>
                <TouchableOpacity style={style.camgaleria}>
                    <Entypo name="images" size={38} color="black" style={{textAlign:"center"}} />
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={{backgroundColor:"#009688", height:55, width:"96%", marginHorizontal:"2%",  borderRadius:6, marginTop:10}} >
             
                <Text style={{
                    fontSize: 18,
                    fontWeight: "700",
                    textAlign:"center",
                    margin:"auto",
                    color:"#fff" 
                }}>
                Publicar</Text>
            </TouchableOpacity>
          
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