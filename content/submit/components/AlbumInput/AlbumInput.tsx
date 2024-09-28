import React, { PropsWithChildren } from 'react';
import { View, TextInput } from 'react-native';
import PhotoInput from './PhotoInput';
import colors from '../../../common/constants/colors';
import styles from '../../../common/styles/styles';

interface AlbumInputProps {
    id: string;
    index: number;
    value: string;
    onNameChange: (name: string, text: string, id?: string) => void;
    onPhotoChange: (song: File, id: string) => void;
}

export const AlbumInput: React.FC<PropsWithChildren> = ({ children }, props: AlbumInputProps) => {
    return (
        <View className={`flex flex-col border border-opacity-55 rounded-lg p-3 mb-4 border-wbBlue ${styles.shadowBlue}`}>
            <TextInput
                className='text-lg font-secondary outline-none focus:outline-none w-full p-2 border-none rounded-lg mb-4 bg-slate-900'
                textContentType='name'
                placeholder='Album Name'
                placeholderTextColor={colors.wbWhite}
                onChange={() => {}}
            />
            <PhotoInput />
            {children}
        </View>
    )
}

export default AlbumInput;