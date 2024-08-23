import React, { useEffect } from 'react'
import { Stack, SplashScreen, router } from 'expo-router'
import { useFonts } from "expo-font";
import { Text, Image, View } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { images, colors } from '../constants'
import styles from '../styles/styles';


export const RootLayout = () => {
    const [fontsLoaded, error] = useFonts({
        "Lacquer-Regular": require("../assets/fonts/Lacquer-Regular.ttf"),
        "LifeSavers-Regular": require("../assets/fonts/LifeSavers-Regular.ttf"),
        "LifeSavers-Bold": require("../assets/fonts/LifeSavers-Bold.ttf"),
        "LifeSavers-ExtraBold": require("../assets/fonts/LifeSavers-ExtraBold.ttf")
    });
    
    useEffect(() => {
        if (error) throw error;
        if (fontsLoaded) SplashScreen.hideAsync();
    }, [fontsLoaded, error]);

    if (!fontsLoaded && !error) return null;

    return (
        <Stack
        screenOptions={{
            title: 'Wristband Radio',
            headerTitle: () => (
                <View className='flex flex-row items-center'>
                    <Image source={images.Logo} className="w-[75px] h-[75px]" resizeMode="contain" />
                    <Text className='font-primary text-2xl text-white'>Wristband Radio</Text>
                </View>),
            headerTitleStyle: {
                fontSize: 18
            },
            headerStyle: {
                backgroundColor: colors.wbSlate
            },
            headerTintColor: colors.wbWhite,
            headerRight: () => (<FontAwesome.Button name='question-circle' backgroundColor={colors.wbSlate} onPress={() => router.push('/contact')} />),
        }}>
            <Stack.Screen name="index" />
            <Stack.Screen name="contact" options={{
                title: 'Help/Feedback',
                headerTitle: () => (
                    <View className='flex flex-row h-20 items-center'>
                        <Text className='font-primary text-xl text-white'>Help/Feedback</Text>
                    </View>),
                headerRight: () => (<Text></Text>)
            }}/>
    </Stack>)
}

export default RootLayout;
