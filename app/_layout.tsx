import React, { useEffect, useState } from 'react'
import { SplashScreen } from 'expo-router'
import { useFonts } from "expo-font";
import { AppProvider, UserProvider } from '@realm/react';
import { StackComponent } from './stack';
import { Login } from '../content/common/components/Login/Login';
import { RealmContextProvider } from '../content/common/context/RealmContext/RealmContextProvider';

export const RootLayout = () => {
    const [fontsLoaded, error] = useFonts({
        "Lacquer-Regular": require("../assets/fonts/Lacquer-Regular.ttf"),
        "LifeSavers-Regular": require("../assets/fonts/LifeSavers-Regular.ttf"),
        "LifeSavers-Bold": require("../assets/fonts/LifeSavers-Bold.ttf"),
        "LifeSavers-ExtraBold": require("../assets/fonts/LifeSavers-ExtraBold.ttf")
    });

    const [appId, setAppId] = useState<string>(process.env.EXPO_PUBLIC_REALM_APPLICATION_ID ?? '');
    
    useEffect(() => {
        if (error) throw error;
        if (fontsLoaded) SplashScreen.hideAsync();
    }, [fontsLoaded, error]);

    if ((!fontsLoaded || !appId) && !error) return null;

    return (
        <AppProvider id={appId!}>
            <UserProvider fallback={<Login />}>
                <RealmContextProvider>
                    <StackComponent />
                </RealmContextProvider>
            </UserProvider>
        </AppProvider>
    )
}

export default RootLayout;
