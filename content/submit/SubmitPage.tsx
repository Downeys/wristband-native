import React, { useCallback, useState } from 'react'
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, View, TouchableOpacity, Text, ScrollView } from 'react-native';
import { FieldNames } from './constants/submitFormConstants';
import colors from '../common/constants/colors';
import styles from '../common/styles/styles';
import { FormInput } from '../common/components/formElements/FormInput';
import { SubmitState } from './types/submitMusicFormTypes';
import FileInput from './components/FileInput/FileInput';

const initState: SubmitState = {
    band: '',
    contact: '',
    email: '',
    phone: '',
    imageFiles: [],
    audioFiles: [],
    validationMessages: [],
    inProgress: false,
    showConfirmationModal: false,
    showFailureModal: false
}

export const SubmitPage = () => {
    const [state, setState] = useState(initState);
    const { BAND, CONTACT, EMAIL, PHONE } = FieldNames;

    const handleInputChange = useCallback((name: string, text: string, id?: string) => {
        switch (name) {
            case BAND:
                setState({ ...state, band: text })
                break;
            case CONTACT:
                setState({ ...state, contact: text })
                break;
            case EMAIL:
                setState({ ...state, email: text })
                break;
            case PHONE:
                setState({ ...state, phone: text })
                break;
            default:
                console.log("Something went wrong")
        }
    }, [state]);

    const handleFilesAdded = useCallback((imageFiles: File[], audioFiles: File[]) => {
        const updatedImageFiles = [...state.imageFiles, ...imageFiles];
        const updatedAudioFiles = [...state.audioFiles, ...audioFiles];
        setState({ ...state, imageFiles: updatedImageFiles, audioFiles: updatedAudioFiles});
    }, [state]);

    const handleFileRemoved = useCallback((fileName: string) => {
        const updatedImageFiles = state.imageFiles.filter(file => file.name !== fileName);
        const updatedAudioFiles = state.audioFiles.filter(file => file.name !== fileName);
        setState({ ...state, imageFiles: updatedImageFiles, audioFiles: updatedAudioFiles });
    }, [state])

    const handleSubmit = async ()=> {
        const url = 'UPDATE ME';

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                Accept: "application/json",
                "Content-Type": "multipart/form-data",
            }
        })
        .then(async res => {
            if (res.status !== 204) {
                const data = await res.json()
                if (!res.ok) return Promise.reject({ message: `${res.status}: ${data.message}` })
                return data
            }
        })
    }

    return (
        <SafeAreaView className='bg-slate-950 h-screen w-screen flex-1'>
            <ScrollView>
                <View className='px-12 w-full'>
                    <Text className='text-white text-lg font-secondaryBold mb-2 w-full text-center'>Submit music here.</Text>
                    <FormInput name={BAND} label="Band/Artist Name" onChange={handleInputChange} value={state.band} />
                    <FormInput name={CONTACT} label="Contact Person Name" onChange={handleInputChange} value={state.contact} />
                    <FormInput name={EMAIL} label="Contact Email" type='emailAddress' onChange={handleInputChange} value={state.email} />
                    <FormInput name={PHONE} label="Phone Number (optional)" type='telephoneNumber' onChange={handleInputChange} value={state.phone} />
                    <FileInput imageFiles={state.imageFiles} audioFiles={state.audioFiles} onFilesAdded={handleFilesAdded} onFileRemoved={handleFileRemoved} />
                    <View className='w-full flex justify-center items-center mt-4'>
                        <TouchableOpacity className='flex justify-center items-center border-2 border-wbBlue rounded-2xl px-2 py-3 w-1/2' style={styles.shadowBlue}>
                            <Text className='text-2xl text-white font-primary'>Submit</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
            <StatusBar backgroundColor={colors.wbSlate} style='light' />
        </SafeAreaView>
    )
}

export default SubmitPage;
