import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import colors from '../../../common/constants/colors';
import styles from '../../../common/styles/styles';

interface BackButtonProps {
    onPress: () => void;
}

export const BackButton = ({ onPress }: BackButtonProps) => (
    <TouchableOpacity onPress={onPress} >
        <View className='flex flex-col border-2 border-wbPink items-center justify-center h-10 w-10 rounded-full pr-1' style={styles.shadowPink}>
            <Ionicons name='play-back' size={28} color={colors.wbBlue} />
        </View>    
    </TouchableOpacity>
)

export default BackButton;