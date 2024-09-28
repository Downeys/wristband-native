import React, { useMemo } from 'react'
import { View, Text} from 'react-native'
import { usePlayerContext } from '../../context/PlayerContextProvider';
import BackButton from '../buttons/BackButton';
import NextButton from '../buttons/NextButton';
import { PlayButton } from '../buttons/PlayButton';

export const Player = () => {
    const { trackInPlayer, playerStatus, playingIndex, back, next } = usePlayerContext();
    const trackMessage = useMemo(() => trackInPlayer?.bandName ? `${trackInPlayer?.bandName} - ${trackInPlayer?.trackName}` : 'Welcome to Wristband Radio', [trackInPlayer]);
    return (
        <View className='h-44 w-screen flex flex-col pt-2 px-6 bg-slate-950'>
            <View className='mb-3'>
                <Text className='font-secondaryExtraBold text-lg text-white'>{trackMessage}</Text>
            </View>
            <View className='flex flex-row justify-center items-center p-2'>
                <BackButton onPress={back} />
                <PlayButton status={playerStatus} trackIndex={playingIndex} />
                <NextButton onPress={next} />
            </View>
        </View>
    )
}

export default Player;