import { StyleSheet } from "react-native"
import COLOURS from "../../constants/Colors"
import { Colors } from "react-native/Libraries/NewAppScreen"

const authstyles= StyleSheet.create({
    authtext:{
        fontFamily:'SemiBold',
        color:COLOURS.white,
        fontSize:22
    },
    secondarycontainer:{
        marginTop:30

    },
    formcontainer:{
        gap:10,
        marginVertical:10

    },
    formtext:{
        fontFamily:'Medium',
        fontSize:16,
        //color:COLOURS.text2
        color:"#CDCDE0"


    },
    input:{
        backgroundColor:COLOURS.background2,
        height:58,
        borderRadius:8,
        color:COLOURS.white,
        paddingLeft:20
    
    },
    buttoncontainer:{
        marginVertical:20,
       
    },
    note:{
        color:COLOURS.white,
        textAlign:'center',
        fontFamily:'PoppinsRegular'
    }
})

export default authstyles