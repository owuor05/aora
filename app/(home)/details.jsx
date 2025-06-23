import { SafeAreaView } from "react-native-safe-area-context";
import { Image, Pressable, Text,View,Linking, TouchableOpacity, Alert, ScrollView} from "react-native";
import { useLocalSearchParams ,router} from "expo-router";
import styles from '../style';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Button from '../../components/button'
import AsyncStorage from "@react-native-async-storage/async-storage";
import WebView from 'react-native-webview'

const Detail = ()=>{
    const data = useLocalSearchParams();
    const film = JSON.parse(data.film);
    const saveToWatchLater = async ()=>{
        try{
            AsyncStorage.setItem('movie',JSON.stringfy(movie.item),(e)=>{}).then((e)=>{
                Alert.alert('Succes!!!',"you have succesfully saved"+movie.item.originalTitle+"to your bookmarks")
            }).catch((error))
        }
        catch(error){
            Alert.alert('Error!!!',"There was an error saving the movie"+movie.item.originalTitle + "to your bookmarks")
        }
    }
    return(
        <SafeAreaView style={styles.container}>
            <Pressable onPress={()=>{
                router.back
            }} >
                <MaterialIcons name="arrow-back" size={24} color="white" />
            </Pressable>
            <ScrollView>
            <TouchableOpacity 
                onPress={()=>{
                    Linking.openURL('movie.item.url')
                }}
            > 
                <Image resizeMethod="contain" style={{height:500,width:'100%'}} source={{uri:movie?.item?.primaryImage}}src={movie?.item?.primaryImage}/>  
            </TouchableOpacity>
             <Image resizeMethod="contain" style={{height:500,width:'100%'}} source={{uri:movie?.item?.primaryImage}}src={movie?.item?.primaryImage}/>
            <View style={{paddingHorizontal:'5%'}}>
               <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:15}}>
                    <Text style={{color:'white',fontFamily:'PoppinsBold',fontSize:20}}>{movie?.item?.originalTitle}</Text>
                    <Text style={{fontFamily:'SemiBold',color:COLOURS.primary}}>{movie?.item?.avarageRting}</Text>
                </View>
                
                <Text style={{color:'white',fontFamily:'SemiBold',textAlign:'justify'}}>{movie?.item?.description}</Text>
                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                    <Text style={{fontFamily:'PopinsSemiBold',fontSize:20,}}>Budget</Text>
                    <Text style={{color:'white',fontFamily:'PopinsSemiBold'}}>${movie?.item?.budget}</Text>
                </View>
                <View>
                     <Text style={{fontFamily:'PopinsSemiBold',fontSize:20,}}>Content</Text>
                     <Text style={{fontFamily:'PopinsSemiBold',fontSize:20,}}>{movie?.item?.contentRating}</Text>
               </View>
                <Text style={{fontFamily:'PoppinsBold',fontSize:20,}}>Trailer</Text>
                {
                    movie.item.trailer && (
                        <View style={{height:200,width:"100%",marginVertical:30}}>
                            <WebView 
                            source={{uri:movie.item.trailer}}
                            style={{flex:1,}}
                            javaScriptEnabled={true}
                            domStorageEnabled={true}
                            allowsFullscreenVideo={true}
                            />
                        </View>
                    )
                }

                <View style={{marginTop:30}}>
                    <Button text={'watch later'} onPress={()=>{
                        saveToWatchLater()
                    }}/>
                </View>
            </View>
            </ScrollView>
         
        </SafeAreaView>
    )
}
export default Detail;