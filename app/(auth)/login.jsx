import { SafeAreaView } from "react-native-safe-area-context"
import styles from "../style"
import { Text,View,Image, TextInput, ScrollView,TouchableOpacity, Pressable } from "react-native"
import authstyles from "./style"
import Button from "../../components/button"
import COLOURS from "../../constants/Colors"
import { router } from "expo-router"
import { useState } from "react"
import Feather from '@expo/vector-icons/Feather';



const Login = ()=>{

    const [passwordShow , setPasswordShow] = useState(false)
    const [emailonfocus, setemailfocus] = useState(false)
    const [passwordonfocus, setpasswordfocus] =useState(false)


    return(
        <SafeAreaView style={[styles.container,{backgroundColor:"#161622"}]}>
            <ScrollView>
            <Image resizeMode='center' source={require('../../assets/images/logo.png')} style={{width:115}} />
            
                 <Text style={authstyles.authtext}>Sign In</Text>
                <View style={authstyles.secondarycontainer}>

                <View style={authstyles.formcontainer}>
                    <Text style={authstyles.formtext}>Email</Text>
                    <TextInput style={[authstyles.input, {borderColor:emailonfocus?COLOURS.primary :'tranparent',borderWidth:emailonfocus?1:0}]} cursorColor={COLOURS.primary} onFocus={()=>{
                        setemailfocus(true)
                    }} onBlur={()=>{
                        setemailfocus(false)
                    }} />
                </View>

                <View style={authstyles.formcontainer}>
                    <Text style={authstyles.formtext}> Password</Text> 
                    <View style={{borderColor:passwordonfocus?COLOURS.primary :'tranparent',borderWidth:passwordonfocus?1:0}} >
                        <TextInput style={authstyles.input} secureTextEntry={!passwordShow} cursorColor={COLOURS.primary}  onFocus={()=>{
                            setpasswordfocus(true)
                        }} onBlur={()=>{
                            setpasswordfocus(false)
                        }}/>
                        <View  style={{position:'absolute',bottom:15,right:10}}>
                           {
                                 passwordShow ? < Pressable onPress={()=>{
                                 setPasswordShow(false)
                                 }} >      
                                 <Feather name="eye-off" size={20} color="#7B7B8B" />
                                 </Pressable> :<Pressable onPress={()=>{
                                  setPasswordShow(true)
                                 }}>    
                                       <Feather name="eye" size={20} color="#7B7B8B" />
                              </Pressable>                        
                            }
                        </View>
                    </View>
                  
                </View>
                <View>
                    <Pressable  onPress={()=>{
                        router.navigate('/signup')
                    }}> 
                        <Text style={{color:"#CDCDE0",fontFamily:'PoppinsSemiBold',marginVertical:25,paddingLeft:250,fontWeight:400}}>Forgot Password</Text>
                    </Pressable>
                </View>

                <View style={authstyles.buttoncontainer}>
                    <Button text={('Log in')} onPress={()=>{
                        router.navigate('/details')
                    }} />
                </View>
             </View>

                <Pressable onPress ={()=>{

                router.navigate('/signup')
                }}>
                
                <Text style={authstyles.note}> Don't have an account? <Text style={{color:COLOURS.primary,fontFamily:'SemiBold'}}>Sign up</Text></Text>
        
             </Pressable>

            </ScrollView>
        </SafeAreaView>
    )
}

export default Login;