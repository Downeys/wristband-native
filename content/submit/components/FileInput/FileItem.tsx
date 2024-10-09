import React from 'react'
import { View, Text, Pressable } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import colors from '../../../common/constants/colors';

interface FileItemProps {
    name: string;
    size: number;
    onRemoveFile: (fileName: string) => void;
}

export const FileItem = ({ name, size, onRemoveFile }: FileItemProps) => {
    return (
        <View className='w-full border-b border-white border-opacity-20 flex flex-row justify-between items-end ml-4'>
            <View>
                <Text className='text-white text-lg font-secondaryBold w-full text-center'>{`${name} - ${size}`}</Text>
            </View>
            <Pressable onPress={() => onRemoveFile(name)}>
                <View className='py-2'>
                    <Ionicons name='trash-outline' size={28} color={colors.wbPink} />
                </View>
            </Pressable>
        </View>
    )
}

export default FileItem;