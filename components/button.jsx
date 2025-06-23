import { TouchableOpacity,Text,view } from "react-native"
import COLOURS from "../constants/Colors"


const button = ({text, onPress})=>{
    return(
    <TouchableOpacity  onPress={onPress} style={{backgroundColor:COLOURS.primary,height:58,borderRadius:8,justifyContent:'center',width:362}}>
        <Text style={{color:COLOURS.background,textAlign:'center',fontFamily:'PoppinsSemiBold'}}>{text}</Text>
    </TouchableOpacity>
    
)}

export default button;