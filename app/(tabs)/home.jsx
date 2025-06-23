
import { FlatList, Image, Pressable,Text, TextInput, TouchableOpacity, View,ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";
import COLOURS from "../../constants/Colors";
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { useEffect, useState } from "react";
import axios from "axios"
import { router } from "expo-router";


export default function Home() {
    const [topMoviesData , setTopMoviesData] = useState([])
    const [query , setQuery] = useState ('')
   //  console.log('response from the api', response.data);
   const getMovieData = async () =>{
    try{
        const options = {
  method: 'GET',
  url: 'https://imdb236.p.rapidapi.com/api/imdb/most-popular-tv',
  headers: {
    'x-rapidapi-key': '4326803aabmsh29a1292288929c1p19a4b6jsn3d147835fc5c',
    'x-rapidapi-host': 'imdb236.p.rapidapi.com'
  }
};
          const response = await axios.request(options);
          console.log('response from the api', response.data);
          setTopMoviesData(response.data)
      }
    catch (error){
      console.log('error',error)
    }


   } 
    useEffect(() => {
      getMovieData()},[]);
    

  return(
    <SafeAreaView style={[styles.container,{backgroundColor:"#161622"}]}>
              <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:30,alignItems:'center',marginHorizontal:20,paddingRight:10}}>
          <View>
          <Text style={{fontFamily:'PoppinsRegular',fontWeight:500,fontSize:14,letterSpacing:0,color:"#CDCDE0"}} >Welcome Back</Text>
          <Text style={{fontFamily:'PoppinsBold',fontSize:24,fontWeight:600,letterSpacing:-1,color:"#FFFFFF"}}>jsmastery</Text>
          </View>
          <Image resizeMethod="contain" source={require('../../assets/images/Group 8522.png')} style={{width:30,height:34}}/>
        </View>
        <View style={{flexDirection:'row',alignItems:'center',backgroundColor:COLOURS.background2,paddingLeft:20,marginTop:30,marginHorizontal:20,borderRadius:20}}>
          <TextInput style={{
        backgroundColor:COLOURS.background2,height:58,borderRadius:30,color:COLOURS.white,paddingRight:20}} placeholder="search for videos" placeholderTextColor={'white'}
        onChange={setQuery}

        />
        <View style={{position:'absolute',marginLeft:280}}>
              <EvilIcons name="search" size={24} color='white' />
        </View>
          
        </View>
        <View style={{marginTop:30,marginHorizontal:20}} >
          <Text style={{color:COLOURS.text,fontFamily:'PoppinsBold',fontSize:20}}>Trending Videos</Text>
        </View>

        <View style={{marginBottom:300}}>
        {  topMoviesData.length < 1 ? <ActivityIndicator size={"large"} color={COLOURS.primary} animating={true}/>
          :
          <FlatList 
          data={topMoviesData.filter(movie=>{
            const film = movie.originalTitle?.toLowerCase().includes(query.toLowerCase())
            return film;
          })}
          renderItem={({movie})=>{
            return(
              <TouchableOpacity onPress={()=>{
          router.push({
            pathname:'/details',
            params:{film: JSON.stringfy(film)}
          } )
        }}  style={{marginVertical:20}}>

                <Image resizeMode="contain" style={{height:500,width:'100%'}} source={"https://m.media-amazon.com/images/M/MV5BNjgxZGM0OWUtZGY1MS00MWRmLTk2N2ItYjQyZTI1OThlZDliXkEyXkFqcGc@._V1_.jpg"}/>
                <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:15}}>
                    <Text style={{color:'white',fontFamily:'PoppinsBold',fontSize:20}}>{movie?.item?.originalTitle}</Text>
                    <Text style={{fontFamily:'SemiBold',color:COLOURS.primary}}>{movie?.item?.avarageRting}</Text>
                </View>
                
                <Text style={{color:'white',fontFamily:'SemiBold',textAlign:'justify'}}>{movie?.item?.description}</Text>

              </TouchableOpacity>
            )
          }}
          /> 
        }
        </View>
      
        

      
    </SafeAreaView>
  )
}