import React from 'react'
import { View, Image, Text } from 'react-native'
import { images } from '../../constants'
import { PlayButton } from '../buttons/PlayButton'
import { PlayerStatus } from '../../types/PlayerStatus.enum'

export const Track = () => {
    return (
        <View className='flex flex-row h-22 w-full justify-between content-center items-center p-2'>
            <View className='flex flex-row'>
                <View className='h-14 w-14 justify-center content-center'>
                    <Image source={images.Logo} className="w-[48px] h-[48px]" resizeMode="contain"  />
                </View>
                <View className='flex-col ml-2'>
                    <Text className='font-secondaryBold text-white'>Band Name</Text>
                    <Text className='font-secondary text-white'>Track Name</Text>
                </View>
            </View>
            <View className='flex justify-center content-center'>
                <PlayButton variant='track' status={PlayerStatus.playing} />
            </View>
        </View>
    )
}

export default Track;