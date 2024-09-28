import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

export const SongFileInput = () => {
    return (
        <TouchableOpacity>
            <View className="h-12 border-2 border-white rounded-lg flex flex-row justify-center items-center w-full self-end bg-slate-950">
                <Text className='font-primary text-lg text-white'>Choose song file - mp3 only</Text>
            </View>
        </TouchableOpacity>
    )
}

export default SongFileInput;