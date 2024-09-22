import React, { useCallback } from 'react';
import { TouchableOpacity, View, Text } from "react-native"

interface SpanButtonProps {
    text: string;
    color?: 'black' | 'white';
    id?: string;
    onPress: (id?: string) => void;
}

export const TextButton = ({ text, color, id, onPress }: SpanButtonProps) => {
    const textColorClass = color ? `text-${color}` : 'text-white';
    const handlePress = useCallback(() => onPress(id), [id, onPress]);
    return (
        <TouchableOpacity onPress={handlePress}>
            <View className='p-1'>
                <Text className={`font-secondary ${textColorClass}`}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default TextButton;