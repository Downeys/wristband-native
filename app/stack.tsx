import React, { useEffect, useState } from 'react'
import { Stack, router } from 'expo-router'
import { View, Image, Text, ActivityIndicator } from 'react-native'
import { images, colors } from '../constants'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { RealmProvider, useApp } from '@realm/react';
import { Credentials, OpenRealmBehaviorType } from 'realm';

export const StackComponent = () => {
    const app = useApp();

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const login = async () => {
            const credentials = Credentials.anonymous();
            await app.logIn(credentials);
            setIsLoggedIn(true)
        }
        login();
    }, [])

    return (
        <RealmProvider
            sync={{
                flexible: true,
                newRealmFileBehavior: {
                    type: OpenRealmBehaviorType.DownloadBeforeOpen
                },
                existingRealmFileBehavior: {
                    type: OpenRealmBehaviorType.OpenImmediately
                }
            }}
        >
            {isLoggedIn ? <Stack
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
                    headerRight: () => (<FontAwesome.Button name='question-circle' backgroundColor={colors.wbSlate} onPress={() => router.push('/contact')} />)
                    }
                }
            >
                <Stack.Screen name="index" />
                <Stack.Screen name="contact" options={{
                    title: 'Help/Feedback',
                    headerTitle: () => (
                        <View className='flex flex-row h-20 items-center'>
                            <Text className='font-primary text-xl text-white'>Help/Feedback</Text>
                        </View>),
                    headerRight: () => (<Text></Text>)
                }}/>
            </Stack>
            : <ActivityIndicator size={'large'} />}
        </RealmProvider>
    )
}