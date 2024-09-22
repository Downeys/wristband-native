import React from 'react';
import { View, TextInput } from 'react-native';
import colors from '../../../constants/colors'
import styles from '../../../styles/styles';
import SongFileInput from './SongFileInput';
import TextButton from '../../buttons/TextButton';

export const SongInput = () => {
    return (
        <View className={`flex flex-col border border-wbPink border-opacity-55 rounded-lg p-2 mt-4 mb-1 ${styles.shadowPink}`}>
            <TextInput
                className='text-lg font-secondary outline-none focus:outline-none w-full p-2 border-none rounded-lg mb-4 bg-slate-900'
                textContentType='name'
                placeholder='Song Name'
                placeholderTextColor={colors.wbWhite}
                onChange={() => {}}
            />
            <SongFileInput />
            <View className="flex flex-row justify-start p-1">
                <TextButton text='- Remove Song' onPress={(id: string | undefined) => {}}/>
            </View>
        </View>
    )
}

export default SongInput;