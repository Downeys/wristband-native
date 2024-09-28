import React, { useCallback, useState } from 'react';
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, View, TextInput, NativeSyntheticEvent, TextInputChangeEventData, TouchableOpacity, Text } from 'react-native';
import { FieldNames } from './constants/contactFormConstants';
import { ContactForm } from './types/contactFormTypes';
import ContactFormValidator from './utils/validations/validators/contactFormValidator';
import { FormInput } from '../common/components/formElements/FormInput';
import colors from '../common/constants/colors';
import styles from '../common/styles/styles';

interface ContactState {
    name: string;
    email: string;
    phone: string;
    message: string;
    validationMessages: string[];
    inProgress: boolean;
    showConfirmationModal: boolean;
    showFailureModal: boolean;
}

const initState: ContactState = {
    name: '',
    email: '',
    phone: '',
    message: '',
    inProgress: false,
    validationMessages: [],
    showConfirmationModal: false,
    showFailureModal: false
}

export const ContactPage = () => {
    const { NAME, EMAIL, PHONE, MESSAGE } = FieldNames;
    const [state, setState] = useState(initState);
    const resetState = () => setState(initState);

    const handleInputChange = useCallback((name: string, text: string, id?: string) => {
        switch (name) {
            case NAME:
                setState({ ...state, name: text })
                break;
            case EMAIL:
                setState({ ...state, email: text })
                break;
            case PHONE:
                setState({ ...state, phone: text })
                break;
            case MESSAGE:
                setState({ ...state, message: text })
                break;
            default:
                console.log("Something went wrong")
        }
    }, [state]);

    const handleSubmit = useCallback(async () => {
        const form: ContactForm = {
            name: state.name,
            email: state.email,
            phone: state.phone,
            message: state.message
        }
        const { isValid, validationMessages } = await ContactFormValidator.isValid(form);
        setState({ ...state, validationMessages }); 
        if (isValid) {
            try {
                // await FetchService.POST('/api/contact', JSON.stringify(form), 'application/json');
                setState({ ...state, showConfirmationModal: true });
            } catch (e) {
                setState({ ...state, showFailureModal: true });
            }
        }
    }, [state])

    const handleSubmitPress = useCallback(() => {
        setState({ ...state, inProgress: true });
        handleSubmit();
    }, [state, handleSubmit])

    const handleRetry = useCallback(() => {
        setState({ ...state, showFailureModal: false, inProgress: true });
        handleSubmit();
    }, [state, handleSubmit])

    return (
        <SafeAreaView className='bg-slate-950 h-screen w-screen flex-1'>
            <View className='px-12 w-full'>
                <Text className='text-white text-lg font-secondaryBold mb-2 w-full text-center'>Drop us a line about anything, and we'll get back to you asap.</Text>
                <FormInput name={NAME} label="Name" onChange={handleInputChange} value={state.name} />
                <FormInput name={EMAIL} type="emailAddress" label="Email" onChange={handleInputChange} value={state.email} />
                <FormInput name={PHONE} type="telephoneNumber" label="Phone Number (optional)" onChange={handleInputChange} value={state.phone} />
                <TextInput
                    className='text-lg font-secondary outline-none focus:outline-none w-full p-2 border-2 border-white rounded-lg mb-4'
                    multiline
                    numberOfLines={10}
                    placeholderTextColor={colors.wbWhite}
                    textAlignVertical='top'
                    placeholder='Enter your  message here'
                    onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>) => handleInputChange(MESSAGE, e.nativeEvent.text)}
                />
                <View className='w-full flex justify-center items-center'>
                    <TouchableOpacity className='flex justify-center items-center border-2 border-wbPink rounded-2xl px-2 py-3 w-1/2' style={styles.shadowPink} onPress={handleSubmitPress}>
                        <Text className='text-2xl text-white font-primary'>Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <StatusBar backgroundColor={colors.wbSlate} style='light' />
        </SafeAreaView>
    )
}

export default ContactPage;