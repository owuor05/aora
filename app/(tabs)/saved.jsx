import { View,Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "../style";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";

const Saved =()=>{
    const [savedMovies , setSavedMovies]= useState([])

    useEffect(()=>{
        const getSavedMovies = async()=>{
            try{
                const movie  = AsyncStorage.getItem('movie')
                const parsedMovies = JSON.parse(movie)
                setSavedMovies(parsedMovies)
            }
            catch(error){
               console.log ('error',error)
            }
        }
        getSavedMovies()
    })

    return(
        <SafeAreaView style={styles.container}>
            <Text style={{color:'white'}}>{parsedMovies}</Text>
        </SafeAreaView>
    )
} 
export default Saved;