import React, { useCallback, useState } from 'react'
import { NativeSyntheticEvent, SafeAreaView, TextInput, TextInputChangeEventData, TouchableOpacity, View, Text } from 'react-native'
import { StatusBar } from "expo-status-bar";
import { colors } from '../constants';
import styles from '../styles/styles';

export interface ContactState {
    name: string;
    email: string;
    phone: string;
    message: string;
    validationMessages: string[];
    inProgress: boolean;
}

const initState: ContactState = {
    name: '',
    email: '',
    phone: '',
    message: '',
    inProgress: false,
    validationMessages: []
}

export const Contact = () => {
    const [state, setState] = useState(initState);
    const handleFormChange = useCallback((e: NativeSyntheticEvent<TextInputChangeEventData>) => {
        console.log(`${e.nativeEvent.text}`)
    }, [state])
    return (
        <SafeAreaView className='bg-slate-950 h-screen w-screen flex-1'>
            <View className='px-12 w-full'>
                <Text className='text-white text-lg font-secondaryBold mb-2 w-full text-center'>Drop us a line about anything, and we'll get back to you asap.</Text>
                <TextInput
                    className='text-lg font-secondary outline-none focus:outline-none w-full p-2 border-2 border-white rounded-lg mb-4'
                    textContentType='name'
                    placeholder='Name'
                    placeholderTextColor={colors.wbWhite}
                    onChange={handleFormChange}
                />
                <TextInput
                    className='text-lg font-secondary outline-none focus:outline-none w-full p-2 border-2 border-white rounded-lg mb-4'
                    textContentType='emailAddress'
                    placeholder='Email'
                    placeholderTextColor={colors.wbWhite}
                    onChange={handleFormChange}
                />
                <TextInput
                    className='text-lg font-secondary outline-none focus:outline-none w-full p-2 border-2 border-white rounded-lg mb-4'
                    textContentType='emailAddress'
                    placeholder='Phone Number (optional)'
                    placeholderTextColor={colors.wbWhite}
                    onChange={handleFormChange}
                />
                <TextInput
                    className='text-lg font-secondary outline-none focus:outline-none w-full p-2 border-2 border-white rounded-lg mb-4'
                    multiline
                    numberOfLines={10}
                    placeholderTextColor={colors.wbWhite}
                    textAlignVertical='top'
                    placeholder='Enter your  message here'
                    onChange={handleFormChange}
                />
                <View className='w-full flex justify-center items-center'>
                    <TouchableOpacity className='flex justify-center items-center border-2 border-wbPink rounded-2xl px-2 py-3 w-1/2' style={styles.shadowPink}>
                        <Text className='text-2xl text-white font-primary'>Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <StatusBar backgroundColor={colors.wbSlate} style='light' />
        </SafeAreaView>
    )
}

export default Contact;
