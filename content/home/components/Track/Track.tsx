import React from 'react'
import { View, Image, Text, Pressable } from 'react-native'
import { PlayButton } from '../buttons/PlayButton'
import { PlayerStatus } from '../../constants/PlayerStatus.enum';
import { usePlayerContext } from '../../context/PlayerContextProvider';
import { TrackData } from '../../types/playerTypes';

interface TrackProps extends TrackData {
    playerStatus: PlayerStatus;
    trackIndex: number;
    trackInPlayer: number;
    trackInFocus: number;
}

export const Track = ({ playerStatus, trackIndex, trackInFocus, trackInPlayer, picSrc, bandName, trackName }: TrackProps) => {
    const { updateTrackInFocus } = usePlayerContext();
    const isInPlayer = trackInPlayer === trackIndex;
    const isInFocus = trackInFocus === trackIndex;
    const playButtonStatus = isInPlayer ? playerStatus : PlayerStatus.paused;

    return (
        <Pressable onPress={() => updateTrackInFocus(trackIndex)}>
            <View className='flex flex-row h-22 w-full justify-between content-center items-center p-2'>
                <View className='flex flex-row'>
                    <View className='h-14 w-14 justify-center content-center'>
                        <Image source={{ uri: picSrc }} className="w-[48px] h-[48px]" resizeMode="contain"  />
                    </View>
                    <View className='flex-col ml-2'>
                        <Text className='font-secondaryBold text-white'>{bandName}</Text>
                        <Text className='font-secondary text-white'>{trackName}</Text>
                    </View>
                </View>
                {isInFocus && <View className='flex justify-center content-center'>
                    <PlayButton variant='track' status={playButtonStatus} trackIndex={trackIndex} />
                </View>}
            </View>
        </Pressable>
    )
}

export default Track;