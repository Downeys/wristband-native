import React, { useCallback, useState } from 'react'
import { StatusBar } from "expo-status-bar";
import { NativeSyntheticEvent, TextInputChangeEventData, SafeAreaView, View, TextInput, TouchableOpacity, Text } from 'react-native';
import { FieldNames } from './constants/submitFormConstants';
import AlbumInput from './components/AlbumInput/AlbumInput';
import SongInput from './components/SongInput/SongInput';
import colors from '../common/constants/colors';
import styles from '../common/styles/styles';

interface SubmitState {
    name: string;
    email: string;
    phone: string;
    message: string;
    validationMessages: string[];
    inProgress: boolean;
}

const initState: SubmitState = {
    name: '',
    email: '',
    phone: '',
    message: '',
    inProgress: false,
    validationMessages: []
}

export const SubmitPage = () => {
    const [state, setState] = useState(initState);
    const { BAND, CONTACT, EMAIL, PHONE, ALBUM, SONG } = FieldNames;
    const handleFormChange = useCallback((e: NativeSyntheticEvent<TextInputChangeEventData>) => {
        console.log(`${e.nativeEvent.text}`)
    }, [state])
    return (
        <SafeAreaView className='bg-slate-950 h-screen w-screen flex-1'>
            <View className='px-12 w-full'>
                <Text className='text-white text-lg font-secondaryBold mb-2 w-full text-center'>Submit music here.</Text>
                <TextInput
                    className='text-lg font-secondary outline-none focus:outline-none w-full p-2 border-none rounded-lg mb-4 bg-slate-900'
                    textContentType='name'
                    placeholder='Band/Artist Name'
                    placeholderTextColor={colors.wbWhite}
                    onChange={handleFormChange}
                />
                <TextInput
                    className='text-lg font-secondary outline-none focus:outline-none w-full p-2 border-none rounded-lg mb-4 bg-slate-900'
                    textContentType='name'
                    placeholder='Contact Person Name'
                    placeholderTextColor={colors.wbWhite}
                    onChange={handleFormChange}
                />
                <TextInput
                    className='text-lg font-secondary outline-none focus:outline-none w-full p-2 border-none rounded-lg mb-4 bg-slate-900'
                    textContentType='emailAddress'
                    placeholder='Contact Email'
                    placeholderTextColor={colors.wbWhite}
                    onChange={handleFormChange}
                />
                <TextInput
                    className='text-lg font-secondary outline-none focus:outline-none w-full p-2 border-none rounded-lg mb-4 bg-slate-900'
                    textContentType='telephoneNumber'
                    placeholder='Phone Number (optional)'
                    placeholderTextColor={colors.wbWhite}
                    onChange={handleFormChange}
                />
                <AlbumInput>
                    <SongInput />
                </AlbumInput>
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

export default SubmitPage;