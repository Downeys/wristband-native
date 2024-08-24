import React, { useMemo } from 'react'
import { View } from 'react-native'
import { PlayerStatus } from '../../types/PlayerStatus.enum';
import Ionicons from '@expo/vector-icons/Ionicons';
import { colors } from '../../constants';
import styles from '../../styles/styles';

export interface PlayButtonProps {
    variant?: 'primary' | 'track';
    status: PlayerStatus;
    loading?: boolean;
    onClick?: (trackId: string, status: 'playing' | 'paused') => void;
}

const Config = {
    primary: {
        style: 'h-20 w-20 mx-12 border-2 border-wbBlue border-opacity-75 rounded-full',
        iconSize: 56,
        iconColor: colors.wbPink
    },
    track: {
        style: 'h-14 w-14 border-2 border-white rounded-full',
        iconSize: 28,
        iconColor: colors.wbWhite
    }
}

export const PlayButton = ({ variant, status, loading, onClick }: PlayButtonProps) => {
    const styleVariant = variant ?? 'primary';
    const isPlaying = useMemo(() => status === PlayerStatus.playing, [status]);

    return (
        <View className={`flex flex-row items-center justify-center ${Config[styleVariant].style} ${isPlaying ? 'pl-1' : ''}`} style={styleVariant === 'primary' ? styles.shadowBlue : {}}>
            <Ionicons name={isPlaying ? 'pause' : 'play'} color={Config[styleVariant].iconColor} size={Config[styleVariant].iconSize} onPress={() => {}} />
        </View>
    )
}