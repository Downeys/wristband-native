import React from 'react';
import { NativeSyntheticEvent, TextInput, TextInputChangeEventData } from 'react-native';
import colors from '../../constants/colors';

interface FormInputProps {
    name: string;
    type?: 'name' | 'emailAddress' | 'telephoneNumber';
    label: string;
    value: string;
    onChange: (name: string, text: string) => void
}

export const FormInput = ({ label, type, name, value, onChange }: FormInputProps) => {
    const handleChange = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
        onChange(name, e.nativeEvent.text)
    }
    const inputType = type ?? 'none';
    return (
        <TextInput
            className='text-lg font-secondary outline-none focus:outline-none w-full p-2 border-none rounded-lg mb-4 bg-slate-900'
            textContentType={inputType}
            placeholder={label}
            placeholderTextColor={colors.wbWhite}
            onChange={handleChange}
            value={value}
        />
    )
}

export default FormInput;