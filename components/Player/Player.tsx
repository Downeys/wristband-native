import React from 'react'
import { View, Text} from 'react-native'
import BackButton from '../buttons/BackButton';
import { PlayButton } from '../buttons/PlayButton';
import { PlayerStatus } from '../../types/PlayerStatus.enum';
import NextButton from '../buttons/NextButton';
import styles from '../../styles/styles';

export const Player = () => {
    return (
        <View className='h-44 w-screen flex flex-col pt-2 px-6 bg-slate-950'>
            <View className='mb-3'>
                <Text className='font-secondaryExtraBold text-lg text-white'>Track Message</Text>
            </View>
            <View className='flex flex-row justify-center items-center p-2'>
                <BackButton />
                <PlayButton status={PlayerStatus.playing} />
                <NextButton />
            </View>
        </View>
    )
}

export default Player;