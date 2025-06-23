import { Stack } from "expo-router";

const HomeLayout =()=>{
    return(
        <Stack>
            <Stack.Screen name="details" options={{ headerShown: false }} />
        </Stack>
    )
}
export default HomeLayout;