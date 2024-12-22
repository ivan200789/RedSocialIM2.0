import { Text, View } from "react-native";
import Header from "../components Inicio/header"
import TextField from "../componentsEscribir/textfield"
export default function Escribir() {
    

    return(
        <View>
            <Header title='Escribir'/>
            <TextField/>
        </View>
    )
}