import { Image, ScrollView, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";

const profile =()=>{
    return(
        <SafeAreaView> 
            <ScrollView>
                <View>
                  <Image resizeMode='center' source={require('../../assets/images/logo.png')}/>
                  <Text>jsmastery</Text>  
                </View>
            </ScrollView>
        </SafeAreaView>

    )
} 
export default profile;