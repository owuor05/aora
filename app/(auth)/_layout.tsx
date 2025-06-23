
import { Stack } from "expo-router";


const AuthScreens = ()=>{

    return(
        <Stack screenOptions={{headerShown:false}}>
            <Stack.Screen name="signup" options={{ headerShown: false}}/>
            <Stack.Screen name="login" options={{ headerShown: false}}/>
        </Stack>
    )
}
export default AuthScreens;

