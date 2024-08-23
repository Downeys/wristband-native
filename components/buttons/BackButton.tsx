import React from 'react'
import { View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import { colors } from '../../constants';
import styles from '../../styles/styles';

export const BackButton = () => {
    return (
        <View className='flex flex-col border-2 border-wbPink items-center justify-center h-10 w-10 rounded-full pr-1' style={styles.shadowPink}>
            <Ionicons name='play-back' size={28} color={colors.wbBlue} />
        </View>
    )
}

export default BackButton;