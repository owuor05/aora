import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';


export default function RootLayout() {
 
  const [loaded] = useFonts({
    PoppinsRegular : require('../assets/fonts/Poppins-Regular.ttf'),
    PoppinsBold : require('../assets/fonts/Poppins-Bold.ttf'),
    SemiBold : require('../assets/fonts/Poppins-SemiBold.ttf'),
    Medium :require('../assets/fonts/Poppins-Medium.ttf')
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
   
      <Stack screenOptions={{headerShown:false}}>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(home)" options={{ headerShown: false }} />
      </Stack>
     
   
  );
}
