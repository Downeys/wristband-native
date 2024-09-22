import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

export const PhotoInput = () => {
    return (
        <TouchableOpacity>
            <View className="h-12 border-2 border-white rounded-lg flex flex-row justify-center items-center w-full self-end bg-slate-950">
                <Text className='font-primary text-lg text-white'>Choose album photo file</Text>
            </View>
        </TouchableOpacity>
    )
}

export default PhotoInput;