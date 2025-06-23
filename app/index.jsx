
import {View,Text,Image } from'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import style from '../app/style'
import COLOURS from '../constants/Colors'
import Button from '../components/button'
import {router} from 'expo-router'

const page = ()=>{

return(

    <SafeAreaView style={[style.container,{backgroundColor:"#161622"}]}>
        <Image resizeMode='center' source={require('../assets/images/logo.png')} style={{alignSelf:'center',width:115}}/>
        <Image resizeMode='center' source={require('../assets/images/img.png')} style={{alignSelf:'center',width:300,height:295}} />

        <View> 
        <Text style={{color:'white',fontFamily:'PoppinsBold',fontSize:30,textAlign:'center',marginTop:10}}>Discover Endless Possibilities with<Text style={COLOURS.primary}>Aora</Text> </Text>
        <Image resizeMethod='contain' source={require('../assets/images/Path 1.png')} style={{width:70,height:13,position:'absolute',right:15,bottom:5}}/>
        </View>

        <Text style={{color:COLOURS.text,textAlign:'center',fontFamily:'PoppinsRegular'}}>Where Creativity Meets Innovation: Embark on a Journey of Limitless Exploration with Aora</Text>

        
        <View style={{marginTop:40}} >
            <Button text={('Continue with Email')} onPress={()=>{

                router.navigate('/signup')

            }}/>
        </View>
    </SafeAreaView>


)
}

export default page